// 명예의 전당(1)

function solution(k, score) {
  let result = [];
  let king = [];

  score.forEach((v, i) => {
    king.sort((a, b) => b - a);

    if (i < k) king.push(v);
    else {
      if (Math.min(...king) < v) {
        king.pop();
        king.push(v);
      }
    }
    result.push(Math.min(...king));
  });

  return result;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
