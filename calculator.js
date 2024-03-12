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

const even = a => {
    number = modulus(a, 2)
    if (number === 0){
        return true;
    } else {
        return false;
    }
};

const odd = a => {
    number = modulus(a, 2)
    if (number != 0){
        return true;
    } else {
        return false;
    }
}

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
