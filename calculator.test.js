const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1000;
    actual = sum(550, 450);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = sum(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum(5, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 2;
    actual = subtract(5, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => {
    expected = 95;
    actual = subtract(170, 75);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = 1;
    actual = subtract(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 2;
    actual = subtract(2, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(2, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => {
    expected = 3000;
    actual = multiply(75, 40);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 6;
    actual = multiply(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(3, 0);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 2;
    actual = divide(6, 3);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => {
    expected = 5;
    actual = divide(375, 75);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 2;
    actual = divide(-6, -3);
    expect(actual).toBe(expected);
  });

  test('can divide zero by a number', () => {
    expected = 0;
    actual = divide(0, 2);
    expect(actual).toBe(expected);
  });

  test('cannot divide by zero', () => {
    expected = Infinity;
    actual = divide(2, 0);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
