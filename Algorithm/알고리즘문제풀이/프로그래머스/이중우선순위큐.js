function solution(operations) {
  const pq = [];

  operations.forEach((operation) => {
    let [command, num] = operation.split(' '); //I. 16
    num = parseInt(num);
    switch (command) {
      case 'I':
        pq.unshift(num);
        break;
      case 'D':
        if (pq.length == 0) break;
        if (num == 1) pq.sort((a, b) => b - a);
        else if (num == -1) pq.sort((a, b) => a - b);
        pq.shift();
        break;
    }
  });

  if (!pq.length) return [0, 0];

  pq.sort((a, b) => b - a);
  return [pq[0], pq[pq.length - 1]];
}

console.log(
  solution(['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1'])
);
console.log(
  solution([
    'I -45',
    'I 653',
    'D 1',
    'I -642',
    'I 45',
    'I 97',
    'D 1',
    'D -1',
    'I 333',
  ])
);
