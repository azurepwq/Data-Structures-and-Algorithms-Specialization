const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let input = [];
rl.on('line', line => input.push(line));
rl.on('close', () => {
  const [n, m] = input[0].split(' ').map(Number);
  const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
  const points = input[n + 1].split(' ').map(Number);
  const result = countSegmentsCoveringPoints(segments, points);
  process.stdout.write(result.join(' ') + '\n');
});

function countSegmentsCoveringPoints(segments, points) {
  const events = [];
  for (const [l, r] of segments) {
    events.push({x: l, type: 'L'});
    events.push({x: r, type: 'R'});
  }
  points.forEach((p, idx) => {
    events.push({x: p, type: 'P', idx});
  });
  events.sort((a, b) => {
    if (a.x !== b.x) return a.x - b.x;
    const order = {L: 0, P: 1, R: 2};
    return order[a.type] - order[b.type];
  });
  const result = new Array(points.length);
  let count = 0;
  for (const e of events) {
    if (e.type === 'L') count++;
    else if (e.type === 'R') count--;
    else result[e.idx] = count;
  }
  return result;
} 