const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
  inputLines.push(line);
  if (inputLines.length === 2) {
    const numbers = inputLines[1].split(' ').map(Number);
    console.log(maximumPairwiseProduct(numbers));
    rl.close();
  }
});

// solution
function maximumPairwiseProduct(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[sortedNumbers.length - 1] * sortedNumbers[sortedNumbers.length - 2];
}