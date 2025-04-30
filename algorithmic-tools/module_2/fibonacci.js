const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const n = line.split(' ').map(Number)[0];
  console.log(fib(n));
  rl.close();
});

// solution
const memo = {};
function fib (n) {
  if (n <= 1) return n;
  if (!memo[n]) memo[n] = fib(n - 2) + fib(n - 1);
  return memo[n];
}