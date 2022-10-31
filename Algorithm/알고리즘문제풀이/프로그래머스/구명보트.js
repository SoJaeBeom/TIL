function solution(people, limit) {
  let answer = 0;
  let rt = people.length - 1;
  let lt = 0;

  people.sort((a, b) => a - b);

  while (lt < rt) {
    if (people[lt] + people[rt] > limit) {
      rt--;
    } else {
      rt--;
      lt++;
    }
    answer++;
  }

  if (lt === rt) {
    answer++;
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));

// 투포인터 알고리즘
