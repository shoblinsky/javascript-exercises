const add = function (first, second) {
  return first + second;
};

const subtract = function (first, second) {
  return first - second
};

const sum = function (array) {
  const arraySum = array.reduce(function summarizeOfArray(currentSum, currentNumber) {
    return currentSum + currentNumber
  }, 0);
  return arraySum;
};


const multiply = function (array) {
  const arrayMult = array.reduce(function summarizeOfArray(currentMult, currentNumber) {
    return currentMult * currentNumber
  });
  return arrayMult;
};

const power = function (base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result
};

const factorial = function (number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
  }
  return result
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
