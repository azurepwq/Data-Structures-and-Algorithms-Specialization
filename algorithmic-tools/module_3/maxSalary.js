const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const input = [];
rl.on('line', line => {
  input.push(line.trim());
});

rl.on('close', () => {
  const n = parseInt(input[0], 10);
  const digits = input[1].trim().split(/\s+/).map(Number);
  console.log(maxSalary(n, digits));
  process.exit();
});

function maxSalary(n, digits) {
  return digits.
      map(String).
      sort((a, b) => Number(b + a) - Number(a + b)).
      join('');
}

module.exports = maxSalary;