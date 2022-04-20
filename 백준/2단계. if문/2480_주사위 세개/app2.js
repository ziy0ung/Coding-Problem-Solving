// 풀이 방법: sort를 이용해 오름차순 정렬한다.

const fs = require('fs');
const [a, b, c] = fs.readFileSync('./input.txt').toString().split(" ").map(Number).sort((a, b) => a - b);

if (a === b && b === c) {
 console.log(10000 + a * 1000);
} else if (a === b || b === c) {
  console.log(1000 + b * 100);
} else {
  console.log(c * 100);
}