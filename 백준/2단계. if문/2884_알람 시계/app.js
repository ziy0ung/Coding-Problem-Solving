const input = require('fs').readFileSync('./input.txt').toString().split(' ');
let hour = Number(input[0]);
let minute = Number(input[1]);

// 먼저 minute에서 45를 뺀 값을 구한다.
// 그 값이 0보다 작을 경우 45분 뺀 값 + 60이 minute값이 되고, hour값을 1 빼 준다.
minute = minute - 45;

if (minute < 0) {
    minute += 60;
    hour--;

    // 1을 뺀 값이 -1일 경우 23 (0에서 1을 뺀 시간이므로)
    if (hour === -1) {
        hour = 23; 
    }
}

console.log(hour + ' ' + minute);