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

  const result = randomizedQuickSort(n, arr).join(' ');
  process.stdout.write(result + '\n');
});

function randomizedQuickSort(n, arr) {
  const sort = (arr, first, last) => {
    if (first >= last) return;

    const [leftLast, rightFirst] = partition(arr, first, last);
    // [first, leftLast-1] < pivot
    // [leftLast, rightFirst] == pivot
    // [rightFirst+1, last] > pivot
    sort(arr, first, leftLast - 1);
    sort(arr, rightFirst + 1, last);
  }

  const partition = (arr, first, last) => {
    swap(arr, randomPos(first, last), last);
    const pivot = arr[last];
    let [leftLast, rightFirst, current] = [first, last, first];
    while (current <= rightFirst) {
      if (arr[current] < pivot) {
        swap(arr, leftLast++, current++);
      } else if (arr[current] > pivot) {
        swap(arr, current, rightFirst--);
      } else {
        current++;
      }
    }
    return [leftLast, rightFirst];
  }

  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  const randomPos = (i, j) => {
    return Math.floor(Math.random() * (j - i + 1)) + i;
  }

  sort(arr, 0, arr.length - 1);
  return arr;
}

module.exports = randomizedQuickSort;
