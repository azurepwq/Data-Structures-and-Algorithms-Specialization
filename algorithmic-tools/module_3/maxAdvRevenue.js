// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');

const input = [];
rl.on('line', line => {
  input.push(line.trim());
});

rl.on('close', () => {
  const n = parseInt(input[0], 10);
  const prices = input[1].split(' ').map(Number);
  const clicks = input[2].split(' ').map(Number);
  console.log(maxAdvRevenue(n, prices, clicks));
  process.exit();
});

function maxAdvRevenue(n, prices, clicks) {
  prices.sort((a, b) => b - a);
  clicks.sort((a, b) => b - a);

  let maxRev = 0;
  for (let i = 0; i < n; i++) {
    maxRev += prices[i] * clicks[i];
  }

  return maxRev;
}

module.exports = maxAdvRevenue;