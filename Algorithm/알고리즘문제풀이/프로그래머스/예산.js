function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  d.sort((a, b) => a - b).forEach((value) => {
    sum += value;

    if (sum <= budget) {
      answer++;
    }
  });
  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
