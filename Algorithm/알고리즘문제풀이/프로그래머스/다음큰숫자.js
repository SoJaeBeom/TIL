function solution(n) {
  var answer = 0;
  let isFinished = false;
  let length = n
    .toString(2)
    .split('')
    .filter((v) => v === '1').length;

  while (!isFinished) {
    n++;
    if (length === countFunc(n)) {
      isFinished = true;
      answer = n;
    }
  }
  return answer;
}

const countFunc = (n) => {
  return n
    .toString(2)
    .split('')
    .filter((v) => v === '1').length;
};

console.log(solution(78));
console.log(solution(15));
