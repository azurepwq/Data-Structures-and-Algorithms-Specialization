// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(lastDigitOfSumOfFibonacci(parseInt(line, 10)));
    process.exit();
}

function fibonacciMod(n, m) {
    if (n <= 1) return n;
    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, (prev + curr) % m];
    }
    return curr;
}

function lastDigitOfSumOfFibonacci(n) {
    const PISANO_10 = 60;
    const pisanoIndex = (n + 2) % PISANO_10;

    // Use the sum formula: S(0, n) = F(n+2) - 1
    return (fibonacciMod(pisanoIndex, 10) - 1 + 10) % 10;
}

module.exports = lastDigitOfSumOfFibonacci;
