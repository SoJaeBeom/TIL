function solution(n, a, b) {
  var answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return answer;
}

console.log(solution(8, 4, 7));

// Math.ceil() : 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환한다.
// - 입력받은 숫자를 올림한 정수를 리턴한다.(음수 포함)
