// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.on('line', line => {
    const n = parseInt(line.trim(), 10);
    console.log(moneyChange(n));
    process.exit();
});

function moneyChange(n) {
  let count = 0;
  const coins = [10, 5, 1];

  for (const coin of coins) {
    while (n >= coin) {
      n -= coin;
      count++;
    }
  }
  return count;
}

module.exports = moneyChange;
