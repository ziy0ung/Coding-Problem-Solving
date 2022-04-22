let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n').map(x => Number(x));
let result = input[0] * input[1] * input[2];
result = result.toString().split('').map(x => Number(x));

for (let i = 0; i <= 9; i++) {
    let count = 0;
    for (let j = 0; j < result.length; j++) {
        if (i === result[j]) {
            count++;
        }
    }
    console.log(count);
}