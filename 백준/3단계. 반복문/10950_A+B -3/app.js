const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i <= +input[0]; i++) {
    input[i] = input[i].split(" ").map(Number);
    [a, b] = input[i];
    console.log(a + b);
}