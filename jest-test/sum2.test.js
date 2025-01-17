const { sum } = require('./sum');

test('sum test1', () => {
  expect(sum(1, 2)).toBeGreaterThan(2);
});

test('sum test2', () => {
  expect(sum(1, 2)).toBe(3);
});

jest.mock('fs', {
  readFileSync: jest.fn(() => 'lp')
});

const fs = require('fs');

test('read test', () => {
  const test = fs.readFileSync();
  expect(test).toBe('lp');
});
