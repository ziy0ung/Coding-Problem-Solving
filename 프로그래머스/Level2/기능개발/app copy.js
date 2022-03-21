let progresses = [93, 30, 55];
let speeds = [1, 30, 5];

// 구해야 하는 것 = answer
// 각 배포마다 몇 개의 기능이 배포되는지

function solution(progresses, speeds) {
  var answer = []; // 배포된 기능의 수
  let deploy = 0;

  // 모든 작업이 끝날 때까지
  while (progresses.length > 0) {
    // 진행률 계싼
    for (let i = 0; i < progresses.length; i++) {
      // 작업진도 + 작업속도 = 진행률
      progresses[i] += speeds[i];
    } while (true) {
      // 제일 앞에 있는 기능이 완료된 상태면 배열에서 제거
      if (progresses[0] >= 100) {
        deploy += 1;
        progresses.shift();
        speeds.shift();
      } else {
        if (deploy !== 0) {
          answer.push(deploy);
        }
        deploy = 0;
        break;
      }
    }
  }
}

console.log(solution(progresses, speeds));
