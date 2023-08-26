function solution(k, m, score) {
  if (score.length < m) {
    return 0;
  }

  score.sort((a, b) => a - b);

  let total = 0;

  while (score.length >= m) {
    const box = score.splice(score.length - m, m);

    const prize = m * Math.min(...box);

    total += prize;
  }

  return total;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
