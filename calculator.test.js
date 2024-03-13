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
    expected = 100000;
    actual = sum(55000, 45000);
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
    expected = 95000;
    actual = subtract(170000, 75000);
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
    actual = divide(375000, 75000);
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

  // Ideas for additional testing:
  // argument ordering matters
  // dividing by decimal equivalent to multiplication

});

describe('modulus', () => {

  test('can get the modulus of two small positive numbers', () => {
    expected = 1;
    actual = modulus(7, 3);
    expect(actual).toBe(expected);
  });

  test('can get the modulus of two large positive numbers', () => {
    expected = 20000;
    actual = modulus(173000, 51000);
    expect(actual).toBe(expected);
  });

  test('can get the modulus of two negative numbers', () => {
    expected = -1;
    actual = modulus(-21, -4);
    expect(actual).toBe(expected);
  });

  test('modulus with no remainder returns zero', () => {
    expected = 0;
    actual = modulus(10, 5);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('can check positive even number', () => {
    actual = even(2);
    expect(actual).toBeTruthy();
  });

  test('can check positive odd number', () => {
    actual = even(3);
    expect(actual).toBeFalsy();
  });

  test('can check negative even number', () => {
    expected = true;
    actual = even(-2);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {

  test('can check positive even number', () => {
    expected = false;
    actual = odd(2);
    expect(actual).toBe(expected);
  });

  test('can check positive odd number', () => {
    expected = true;
    actual = odd(3);
    expect(actual).toBe(expected);
  });

  test('can check negative even number', () => {
    expected = false;
    actual = odd(-2);
    expect(actual).toBe(expected);
  });

});
