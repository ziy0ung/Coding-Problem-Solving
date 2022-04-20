const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let dice1 = +input[0];
let dice2 = +input[1];
let dice3 = +input[2];
let maxDice = Math.max(...input);

if (dice1 === dice2 && dice1 === dice3) {
    console.log(1000 + dice1 * 1000)
} else if (dice1 === dice2 || dice1 === dice3) {
    console.log(1000 + dice2 * 1000)
} else if (dice2 === dice3) {
    console.log(1000 + dice2 * 1000)
} else {
    console.log(maxDice * 100)
}
