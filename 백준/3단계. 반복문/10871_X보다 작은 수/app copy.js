/*
Math.floor()
    Math.floor() : 소수점 이하를 버림한다.
    Math.ceil() : 소수점 이하를 올림한다.
    Math.round() : 소수점 이하를 반올림한다.
각 자리의 수 구하기
    1의 자리에 있는 수 구하기: num % 10
    10의 자리에 있는 수 구하기: Math.floor(num / 10)
    1의 자리에 있는 수 10의 자리 수로 만들기 : (num % 10) * 10
*/


let input = Number(require('fs').readFileSync('./input.txt').toString());

let num = input;
let sum;
let i = 0;

while (true) {
    i++;
    
    sum = Math.floor(num / 10) + num % 10; 
    num = (num % 10) * 10 + sum % 10;

    if (input === num) {
        break;
    }
}

// i = 1
// num = 26
// sum = 2  + 6 = 8
// num = 60 + 8 = 68

// i = 2
// num = 68
// sum = 6  + 8 = 14
// num = 80 + 4 = 84

// i = 3
// num = 84
// sum = 8  + 4 = 12
// num = 40 + 2 = 42

// i = 4
// num = 42
// sum = 4  + 2 = 6
// num = 20 + 6 = 26
