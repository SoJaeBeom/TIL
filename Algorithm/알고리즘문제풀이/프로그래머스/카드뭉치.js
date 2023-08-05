// 카드 뭉치
function solution(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] === s) {
      cards1.shift();
    } else if (cards2[0] === s) {
      cards2.shift();
    } else {
      return 'No';
    }
  }

  return 'Yes';
}

console.log(
  solution(
    ['i', 'drink', 'water'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
);
console.log(
  solution(
    ['i', 'water', 'drink'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
);
