const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b
};

const multiply = function(a, b){
    return a * b
};

const divide = (a, b) => a / b;

const modulus = (a, b) => a % b;

const even = a => a % 2 === 0;

const odd = a => a % 2 === 1;;

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
