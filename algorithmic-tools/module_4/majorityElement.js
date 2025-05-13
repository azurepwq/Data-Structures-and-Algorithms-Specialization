// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let input = '';
rl.on('line', line => {
  input += line + ' ';
});
rl.on('close', () => {
  const tokens = input.trim().split(/\s+/).map(Number);
  const n = tokens[0];
  const arr = tokens.slice(1, n + 1);

  const result = majorityElement(n, arr);
  process.stdout.write(result + '\n');
});

function majorityElement(n, arr) {
  let [candidate, count] = [null, 0];

  for (const element of arr) {
    if (count === 0) {
      candidate = element;
      count++;
    } else if (element === candidate) {
      count++;
    } else count--;
  }

  // validate if the candidate is majority
  const num = arr.reduce((res, cur) => cur === candidate ? res + 1: res, 0);

  return num > arr.length / 2 ? 1 : 0;
}

module.exports = majorityElement;
