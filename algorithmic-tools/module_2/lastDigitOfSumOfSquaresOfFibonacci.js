// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(lastDigitOfSumOfSquaresOfFibonacci(parseInt(line, 10)));
    process.exit();
}

// Efficiently computes the nth Fibonacci number modulo m
function fibonacciMod(n, m) {
    if (n <= 1) return n;
    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, (prev + curr) % m];
    }
    return curr;
}

// Computes the last digit of the sum of squares of Fibonacci numbers from F_0 to F_n
function lastDigitOfSumOfSquaresOfFibonacci(n) {
    const PISANO_10 = 60;
    return (fibonacciMod(n % PISANO_10, 10) *
        fibonacciMod((n + 1) % PISANO_10, 10)) % 10;
}

module.exports = lastDigitOfSumOfSquaresOfFibonacci;
