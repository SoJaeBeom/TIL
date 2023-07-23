function solution(name, yearning, photo) {
  const memory = {};
  for (let i = 0; i < name.length; i++) {
    memory[name[i]] = yearning[i];
  }

  return photo.map((arr) =>
    arr.reduce((acc, cur) => acc + (memory[cur] || 0), 0)
  );
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
);
console.log(
  solution(
    ['kali', 'mari', 'don'],
    [11, 1, 55],
    [
      ['kali', 'mari', 'don'],
      ['pony', 'tom', 'teddy'],
      ['con', 'mona', 'don'],
    ]
  )
);
console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']]
  )
);
