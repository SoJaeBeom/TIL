function solution(n, words) {
  let answer = [0, 0];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let p = (i % n) + 1;
    let turn = Math.ceil((i + 1) / n);

    if (i > 0) {
      let last = words[i - 1].split('').pop();

      if (i > words.indexOf(word) || words[i][0] !== last) {
        answer = [p, turn];
        break;
      }
    }
  }

  return answer;
}
console.log(
  solution(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
  ])
);
console.log(
  solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
  ])
);
console.log(
  solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])
);

/**
 * split() : String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눈다.
 * pop() : 배열에서 마지막 요소를 제거하고 그 요소를 반환한다.
 * indexOf() : 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환한다.
 * Math.ceil() : 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환한다.
 */
