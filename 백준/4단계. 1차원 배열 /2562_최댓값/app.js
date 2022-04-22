let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n').map(x => Number(x));

let max = input[0];
let maxIdx = 0;

for (let i = 1; i < input.length; i++) {
    if (max < input[i]) {
        max = input[i];
        maxIdx = i;
    }
}

console.log(max);
console.log(maxIdx+1)
