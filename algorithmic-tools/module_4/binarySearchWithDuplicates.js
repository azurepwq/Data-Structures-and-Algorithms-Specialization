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
  const keys = tokens.slice(n + 2);

  const result = keys.map(key => binarySearchWithDuplicates(arr, key)).join(' ');
  process.stdout.write(result + '\n');
});

function binarySearchWithDuplicates(arr, key) {
  let [low, high] = [0, arr.length - 1];
  let res = -1;

  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    if (arr[mid] === key) {
      res = mid;
      high = mid - 1;
    } else if (arr[mid] < key) low = mid + 1;
    else high = mid - 1;
  }

  return res;
}

module.exports = binarySearchWithDuplicates;
