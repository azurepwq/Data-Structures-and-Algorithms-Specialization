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
  const n = parseInt(input[0], 10);
  console.log(collectingSignature(n, segments));
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
  return points;
}

module.exports = collectingSignature;