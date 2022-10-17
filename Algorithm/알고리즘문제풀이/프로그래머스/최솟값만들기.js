function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  answer = A.reduce((prev, cur, index) => prev + cur * B[index], 0);

  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
