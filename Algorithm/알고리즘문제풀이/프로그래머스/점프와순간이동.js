function solution(n) {
  var answer = 0;

  while (n !== 0) {
    if (n % 2 === 1) {
      n -= 1;
      answer++;
    } else {
      n /= 2;
    }
  }

  return answer;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
