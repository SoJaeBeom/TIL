function solution(n) {
  var answer = 1;

  for (let i = 1; i <= n; i++) {
    let sum = i;
    for (let j = i + 1; j <= n; j++) {
      sum += j;
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }
  return answer;
}

console.log(solution(15));
