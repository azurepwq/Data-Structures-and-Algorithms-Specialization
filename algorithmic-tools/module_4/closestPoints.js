const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let input = [];
rl.on('line', line => input.push(line));
rl.on('close', () => {
  const n = Number(input[0]);
  const points = [];
  for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    points.push({x, y});
  }
  points.sort((a, b) => a.x - b.x);
  const pointsByY = points.slice();
  pointsByY.sort((a, b) => a.y - b.y);
  const minDist = closestPair(points, pointsByY, 0, n - 1);
  process.stdout.write(minDist.toFixed(4) + '\n');
});

function dist(a, b) {
  const dx = a.x - b.x, dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function closestPair(px, py, left, right) {
  if (right - left <= 2) {
    let minD = Infinity;
    for (let i = left; i <= right; i++) {
      for (let j = i + 1; j <= right; j++) {
        minD = Math.min(minD, dist(px[i], px[j]));
      }
    }
    py.sort((a, b) => a.y - b.y);
    return minD;
  }
  const mid = Math.floor((left + right) / 2);
  const midX = px[mid].x;
  const pyl = [], pyr = [];
  for (const p of py) {
    if (p.x <= midX) pyl.push(p);
    else pyr.push(p);
  }
  const d1 = closestPair(px, pyl, left, mid);
  const d2 = closestPair(px, pyr, mid + 1, right);
  let d = Math.min(d1, d2);
  const strip = [];
  for (const p of py) {
    if (Math.abs(p.x - midX) < d) strip.push(p);
  }
  for (let i = 0; i < strip.length; i++) {
    for (let j = i + 1; j < strip.length && (strip[j].y - strip[i].y) < d; j++) {
      d = Math.min(d, dist(strip[i], strip[j]));
    }
  }
  return d;
}