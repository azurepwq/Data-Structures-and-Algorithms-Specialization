// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);

        console.log(getFibMod(n, m));
        process.exit();
    }
}

function getPisanoPeriod(m) {
    let prev = 0, curr = 1;
    for (let i = 0; i < m * m; i++) {
        let next = (prev + curr) % m;
        prev = curr;
        curr = next;
        // Pisano period always starts with 0, 1
        if (prev === 0 && curr === 1) return i + 1;
    }
}

function getFibMod(n, m) {
    const pisanoPeriod = getPisanoPeriod(m);
    n = n % pisanoPeriod;

    if (n <= 1) return n;

    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, (prev + curr) % m];
    }
    return curr;
}

module.exports = getFibMod;
