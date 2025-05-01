// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);

        console.log(fibonacciPartialSum(m, n));
        process.exit();
    }
}

function fibonacciPartialSum(m, n) {
  if (n === 0) return 0;
  if (m === n) return fibonacci(n);

  let [prev, curr] = [0, 1];
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i >= m) sum += prev;
    [prev, curr] = [curr, prev + curr];
  }
  return sum;
}

function fibonacci(n) {
  if (n <= 1) return n;

  let [prev, curr] = [0, 1];
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}

module.exports = fibonacciPartialSum;
