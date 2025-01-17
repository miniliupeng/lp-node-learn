// Matcher、Mock、钩子函数、覆盖率检测

const fs = require('node:fs');
const { sum, read, some } = require('./sum');

jest.mock('node:fs'); // 自由修改返回值

test('sum test', () => {
  expect(sum(1, 2)).toBe(3);
});

test('read test', () => {
  fs.readFileSync.mockReturnValue(JSON.stringify({ version: '1.0.0' }));
  expect(read()).toBe(111);

  fs.readFileSync.mockReturnValue(JSON.stringify({ version: '2.0.0' }));
  expect(read()).toBe(222);
});

test('some test', () => {
  const callback = jest.fn();
  some(callback);
  expect(callback.mock.calls.length).toBe(2); // 2 次调用
  expect(callback.mock.calls[0][0]).toBe(1); // 第一次调用参数
});


// 在所有测试开始前执行一次
beforeAll(() => {
  console.log('all')
})

// 在所有测试结束后执行一次
afterAll(() => {
  console.log('after all')
})

// 在每个测试用例开始前执行
beforeEach(() => {
  console.log('each')
})

// 在每个测试用例结束后执行
afterEach(() => {
  console.log('after each')
})


// npx jest --coverage
