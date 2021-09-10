let input = require('fs').readFileSync('./input.txt').toString().split('\n');

let num = input[0] * 1;

for (let i = 1; i <= num; i++) {
    let score = input[i].split(' ');
    let num2 = score.shift() * 1;
    let count = 0;

    let avg = score.reduce((acc, v) => acc += v * 1, 0);
    
}