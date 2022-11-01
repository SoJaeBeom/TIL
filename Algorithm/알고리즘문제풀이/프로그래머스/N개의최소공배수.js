function solution(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}

function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));

/**
 * reduce() : 배열의 각 요소를 순회하며 callback 함수의 실행 값을 누적하여 하나의 결과값을 반환한다.
 *
 * arr.reduce(callback[, initialValue])
 * 1. callback function
 * - accumulator : callback 함수의 반환값을 누적한다.
 * - currentValue : 배열의 현재 요소
 * - index : 배열의 현재 요소의 인덱스
 * - array : 호출한 배열
 *
 * -> callback 함수의 반환 값은 accumulator에 할당되고 순회중 계속 누적되어 최종적으로 하나의 값을 반환한다.
 *
 * 2. initialValue
 * - 최초 callback 함수 실행 시 accumulator 인수에 제공되는 값
 * - 초기값을 제공하지 않을 경우 배열의 첫 번째 요소를 사용한다.
 * - 빈 배열에서 초기값이 없을 경우 에러가 발생한다.
 *
 * 유클리드 호제법
 * 두 수의 최대공약수를 구하는 알고리즘이다.
 * - 두 수중에서 큰 수를 작은 수로 나눈다.
 * - 만약 나누고 난 나머지가 0 이라면 작은 수가 최대공약수이다.
 * - 만약 나머지가 0 이 아니라면 작은 수를 다시 나머지로 나눈다.
 * - 이를 반복해서 나머지가 0 이 될 때 그 수가 바로 두 수의 최대공약수이다.
 */
