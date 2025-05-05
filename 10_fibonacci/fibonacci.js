let fibonacciOnPosition = 0;
const fibonacci = function (position) {
    let firstFibonacci = 1;
    let secondFibonacci = 0;

    for (let i = 2; i <= (position); i++) {
        fibonacciOnPosition = firstFibonacci + secondFibonacci
        secondFibonacci = firstFibonacci;
        firstFibonacci = fibonacciOnPosition;
    }
    return fibonacciOnPosition;
};
fibonacci(5)

// Do not edit below this line
// module.exports = fibonacci;
