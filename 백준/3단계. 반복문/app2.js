let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString());
const result = input

let count = 0;

while(true){
    let sum = parseInt((parseInt(input/10)) + (input % 10) %10)
    let num = (input % 10)*10 + (sum % 10)
    input = num;
    count ++
    if(result === num) break;
}
console.log(count);