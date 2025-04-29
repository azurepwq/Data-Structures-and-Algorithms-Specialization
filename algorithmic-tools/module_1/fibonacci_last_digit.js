// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fibonacciLastDigit(parseInt(line, 10)));
    process.exit();
}

const memo = {};
function fib(n) {
    // write your code here
    if (n <= 1) return n;
    if (!memo[n]) memo[n] = fib(n - 2) + fib(n - 1);
    
    return memo[n];
}

function fibonacciLastDigit(n) {
    return fib(n - 1) % 10;
}

module.exports = fib;
