// by Alexander Nikolskiy

const { prependListener } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function max(count, capacity, values, weights) {
    // write your code here
  const items = new Array(count).fill();
  for (let i = 0; i < count; i++) {
    items[i] = {
      value: values[i],
      weight: weights[i],
      pricePerWeight: values[i] / weights[i]
    }
  }

  items.sort((a, b) => b.pricePerWeight - a.pricePerWeight);

  let totalValue = 0;
  let i = 0;
  while (capacity > 0 && i < count) {
    if (items[i].weight <= capacity) {
      totalValue += items[i].value;
      capacity -= items[i].weight;
    } else {
      totalValue += capacity * items[i].pricePerWeight;
      capacity = 0;
    }
    i++;
  }

  return totalValue;
}

module.exports = max;
