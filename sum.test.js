const sum = require('./sum');

test('somma 2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('somma numeri negativi', () => {
  expect(sum(-1, -1)).toBe(-2);
});

test('somma con zero', () => {
  expect(sum(5, 0)).toBe(5);
});