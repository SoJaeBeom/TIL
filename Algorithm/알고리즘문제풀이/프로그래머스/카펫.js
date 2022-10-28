const solution = (brown, yellow) => {
  let answer = [];
  const total = brown + yellow;

  for (let y = 3; y <= total; y++) {
    const x = total / y;
    if (Number.isInteger(x) && x >= y && (x - 2) * (y - 2) === yellow) {
      answer.push(x);
      answer.push(y);
      break;
    }
  }

  return answer;
};

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
