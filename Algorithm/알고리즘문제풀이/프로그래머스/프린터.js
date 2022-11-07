function solution(priorities, location) {
  var answer = 0;
  let max = 0;
  let cnt = 0;

  while (priorities.length > 0) {
    max = Math.max.apply(null, priorities);
    let n = priorities.shift();

    if (n === max) {
      cnt++;
      if (location === 0) {
        return cnt;
      }
    } else {
      priorities.push(n);
    }
    location--;

    if (location === -1) {
      location = priorities.length - 1;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
