// jest.mock 是模块 mock，而 jest.fn 是函数 mock
const jest = {
  fn(impl = () => {}) {
    const mockFn = (...args) => {
      mockFn.mock.calls.push(args);
      return impl(...args);
    };
    mockFn.originImpl = impl;
    mockFn.mock = {
      calls: []
    };
    return mockFn;
  },
  mock(mockPath, mockExports = {}) {
    const path = require.resolve(mockPath);
    require.cache[path] = {
      id: path,
      filename: path,
      loaded: true,
      exports: mockExports
    };
  }
};

const createState = () => {
  global['STATE'] = {
    testBlock: [],
    beforeEachBlock: [],
    beforeAllBlock: [],
    afterEachBlock: [],
    afterAllBlock: [],
    reports: []
  };
};

createState();

const dispatch = (event) => {
  const { fn, type, name, pass } = event;
  switch (type) {
    case 'ADD_TEST':
      const { testBlock } = global['STATE'];
      testBlock.push({ fn, name });
      break;
    case 'BEFORE_EACH':
      const { beforeEachBlock } = global['STATE'];
      beforeEachBlock.push(fn);
      break;
    case 'BEFORE_ALL':
      const { beforeAllBlock } = global['STATE'];
      beforeAllBlock.push(fn);
      break;
    case 'AFTER_EACH':
      const { afterEachBlock } = global['STATE'];
      afterEachBlock.push(fn);
      break;
    case 'AFTER_ALL':
      const { afterAllBlock } = global['STATE'];
      afterAllBlock.push(fn);
      break;
    case 'COLLECT_REPORT':
      const { reports } = global['STATE'];
      reports.push({ name, pass });
      break;
  }
};

const test = (name, fn) => dispatch({ type: 'ADD_TEST', fn, name });
const afterAll = (fn) => dispatch({ type: 'AFTER_ALL', fn });
const afterEach = (fn) => dispatch({ type: 'AFTER_EACH', fn });
const beforeAll = (fn) => dispatch({ type: 'BEFORE_ALL', fn });
const beforeEach = (fn) => dispatch({ type: 'BEFORE_EACH', fn });

const vm = require('vm');
const fs = require('fs');

const testPath = process.argv.slice(2)[0];
const code = fs.readFileSync(testPath, { encoding: 'utf8' });

const expect = (actual) => ({
  toBe(expected) {
    if (actual !== expected) {
      throw new Error(`${actual} is not equal to ${expected}`);
    }
  },
  toBeGreaterThan(expected) {
    if (actual <= expected) {
      throw new Error(`${actual} is not greater than to ${expected}`);
    }
  }
});

const context = {
  console,
  jest,
  require,
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  test,
  expect
};

(async () => {
  vm.createContext(context);
  vm.runInContext(code, context);

  const { testBlock, beforeEachBlock, beforeAllBlock, afterEachBlock, afterAllBlock } = global['STATE'];

  for (let i = 0; i < beforeAllBlock.length; i++) {
    await beforeAllBlock[i]();
  }

  for (let i = 0; i < testBlock.length; i++) {
    const item = testBlock[i];
    const { fn, name } = item;
    try {
      await beforeEachBlock.map(async (beforeEach) => await beforeEach());

      await fn.apply(this);

      dispatch({ type: 'COLLECT_REPORT', name, pass: 1 });

      await afterEachBlock.map(async (afterEach) => await afterEach());
      console.log(`${name} passed`);
    } catch (error) {
      dispatch({ type: 'COLLECT_REPORT', name, pass: 0 });

      console.error(error);
      console.log(`${name} error`);
    }
  }

  for (let i = 0; i < afterAllBlock.length; i++) {
    await afterAllBlock[i]();
  }

  const { reports } = global['STATE'];

  let passNum = 0;
  reports.forEach((item) => {
    passNum += item.pass;
  });
  console.log(`All Tests: ${passNum}/${reports.length} passed`);
})();