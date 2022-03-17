let progresses = [93, 30, 55];
let speeds = [1, 30, 5];

function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let count = 1;
  let maxDay = days[0];

  console.log(days);

  // for (let i = 1; i < days.length; i++) {

  // }

  // return answer;
}

solution(progresses, speeds);
