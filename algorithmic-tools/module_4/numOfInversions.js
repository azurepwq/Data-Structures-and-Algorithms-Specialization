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

  const result = numOfInversions(n, arr);
  process.stdout.write(result + '\n');
});

function numOfInversions(n, arr) {
  let counter = 0;
  const mergeSort = (arr, left, right) => {
    if (left >= right) return;
    const mid = left + ((right - left) >> 1);

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }

  const merge = (arr, left, mid, right) => {
    const n = right - left + 1;
    const newArray = new Array(n);

    let [i, j, k] = [left, mid + 1, 0];
    while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) newArray[k++] = arr[i++];
      else {
        newArray[k++] = arr[j++];
        counter += (mid - i + 1);
      }
    }
    while (i <= mid) newArray[k++] = arr[i++];
    while (j <= right) newArray[k++] = arr[j++];

    for (let i = 0; i < n; i++) {
      arr[left + i] = newArray[i];
    }
  }

  mergeSort(arr, 0, arr.length - 1);
  return counter;
}

module.exports = numOfInversions;