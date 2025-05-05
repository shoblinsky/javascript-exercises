let fibonacciOnPosition = 0;
const fibonacci = function (position) {
    if (position < 0) return "OOPS";
    if (position == 0) return 0;
    let firstFibonacci = 1;
    let secondFibonacci = 0;

    for (let i = 2; i <= (position); i++) {

        fibonacciOnPosition = firstFibonacci + secondFibonacci
        secondFibonacci = firstFibonacci;
        firstFibonacci = fibonacciOnPosition;
    }
    return firstFibonacci;
};

// Do not edit below this line
module.exports = fibonacci;
