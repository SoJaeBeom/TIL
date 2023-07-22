function solution(a, b, n) {
  let change = 0;

  while (n >= a) {
    change += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }
  return change;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
