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
  const d = parseInt(input[0], 10);
  const m = parseInt(input[1], 10);
  const n = parseInt(input[2], 10);
  const stops = input[3].split(' ').map(Number);
  console.log(carFueling(d, m, n, stops));
  process.exit();
});

function carFueling(distance, tank, n, stops) {
  stops = [0, ...stops, distance];
  let numRefills = 0, currentRefill = 0, lastRefill = 0;

  while (currentRefill < stops.length - 1) {
    lastRefill = currentRefill;
    while (
      currentRefill < stops.length - 1 &&
      stops[currentRefill + 1] - stops[lastRefill] <= tank
    ) {
      currentRefill++;
    }
    if (currentRefill === lastRefill) {
      return -1;
    }
    if (currentRefill < stops.length - 1) {
      numRefills++;
    }
  }
  return numRefills;
}

module.exports = carFueling;