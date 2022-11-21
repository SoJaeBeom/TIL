function solution(cacheSize, cities) {
  if (cities.length === 0) return 0;
  if (cacheSize === 0) return cities.length * 5;
  var queue = [];
  var answer = 0;

  let cities2 = cities.map((v) => v.toUpperCase());
  console.log(cities);

  for (var i = 0; i < cities2.length; i++) {
    if (queue.length < cacheSize) {
      if (queue.indexOf(cities2[i]) >= 0) {
        answer++;
        queue.push(queue.splice(queue.indexOf(cities2[i]), 1)[0]);
      } else {
        queue.push(cities2[i]);
        answer += 5;
      }
    } else {
      if (queue.indexOf(cities2[i]) >= 0) {
        answer++;
        queue.push(queue.splice(queue.indexOf(cities2[i]), 1)[0]);
      } else {
        answer += 5;
        queue.shift();
        queue.push(cities2[i]);
      }
    }
  }
  return answer;
}

console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
  ])
);
console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'Jeju',
    'Pangyo',
    'Seoul',
    'Jeju',
    'Pangyo',
    'Seoul',
  ])
);
console.log(
  solution(2, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'SanFrancisco',
    'Seoul',
    'Rome',
    'Paris',
    'Jeju',
    'NewYork',
    'Rome',
  ])
);
console.log(
  solution(5, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'SanFrancisco',
    'Seoul',
    'Rome',
    'Paris',
    'Jeju',
    'NewYork',
    'Rome',
  ])
);
console.log(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']));
console.log(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']));
