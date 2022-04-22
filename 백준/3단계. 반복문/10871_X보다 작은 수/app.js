let input = require('fs').readFileSync('./input.txt').toString().split('\n');
let [len, x] = input[0].split(" ").map(Number); 
let arr = input[1].split(" ").map(Number);

for (let i = 0; i <= len; i++) {
    if (arr[i] < x) {
        // console.log(arr[i]);
        process.stdout.write(arr[i]);
    }
}
