// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fibLastDigit(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    if (n <= 1) return n;

    let [prev, curr] = [0, 1];
    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, (prev + curr) % 10];
    }

    return curr; 
}

function fibLastDigit(n) {
    const PISANO_PERIOD_FOR_10 = 60;
    const reducedN = n % PISANO_PERIOD_FOR_10;
    return fib(reducedN);
}

module.exports = fib;
