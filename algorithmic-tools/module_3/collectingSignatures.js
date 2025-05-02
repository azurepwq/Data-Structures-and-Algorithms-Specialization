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
  const segments = [];
  for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
  }
  const { points, count } = collectingSignature(n, segments);
  console.log(count);
  console.log(points.join(' '));
  process.exit();
});

function collectingSignature(n, segments) {
  segments.sort((a, b) => a[1] - b[1]);
  const points = [];
  let i = 0;
  while (i < n) {
    const point = segments[i][1]; // right endpoint of the segment
    points.push(point);
    i++;
    while (i < n && segments[i][0] <= point) i++;
  }
  return { points, count: points.length };
}

module.exports = collectingSignature;