function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const share = parseInt(i / n);
    const reminder = i % n;
    answer.push(Math.max(share, reminder) + 1);
  }
  return answer;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
