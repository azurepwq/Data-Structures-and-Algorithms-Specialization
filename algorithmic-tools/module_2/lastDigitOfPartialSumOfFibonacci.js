// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);


function readLine(line) {
    const [m, n] = line.trim().split(/\s+/).map(Number);
    console.log(lastDigitOfPartialSumOfFibonacci(m, n));
    process.exit();
}

// Computes the last digit of the sum of Fibonacci numbers from F_m to F_n (inclusive)
function lastDigitOfPartialSumOfFibonacci(m, n) {
  const PISANO_10 = 60;
  const fibMod10 = [0, 1];
  const prefixSum = [0, 1];

  for (let i = 2; i < PISANO_10; i++) {
    fibMod10[i] = (fibMod10[i - 1] + fibMod10[i - 2]) % 10;
    prefixSum[i] = (prefixSum[i - 1] + fibMod10[i]) % 10;
  }

  const mIdx = m % PISANO_10;
  const nIdx = n % PISANO_10;

  if (nIdx < mIdx) {
    return (prefixSum[PISANO_10 - 1] - (mIdx > 0 ? prefixSum[mIdx - 1] : 0) + prefixSum[nIdx] + 10) % 10;
  } else {
    return (prefixSum[nIdx] - (mIdx > 0 ? prefixSum[mIdx - 1] : 0) + 10) % 10;
  }
}

module.exports = lastDigitOfPartialSumOfFibonacci;
