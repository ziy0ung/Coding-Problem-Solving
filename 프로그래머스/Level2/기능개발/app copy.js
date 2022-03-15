let progresses = [93, 30, 55];
let speeds = [1, 30, 5];

// 구해야 하는 것 = answer
// 각 배포마다 몇 개의 기능이 배포되는지

function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

console.log(solution(progresses, speeds));
