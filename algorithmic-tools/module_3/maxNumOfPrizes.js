const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let input = '';
rl.on('line', line => {
  input += line.trim();
});

rl.on('close', () => {
  const n = parseInt(input, 10);
  const prizes = maxNumOfPrize(n);
  console.log(prizes.length);
  console.log(prizes.join(' '));
});

function maxNumOfPrize(n) {
  let remaining = n;
  const prizes = [];
  let next = 1;
  while (remaining - next > next) {
    prizes.push(next);
    remaining -= next;
    next++;
  }
  prizes.push(remaining);
  return prizes;
}

module.exports = maxNumOfPrize;