function solution(clothes) {
  console.log(clothes);
  const hashMap = new Map();
  let count = 1;

  for (let [_, type] of clothes) {
    if (hashMap.has(type)) {
      hashMap.set(type, hashMap.get(type) + 1);
    } else {
      hashMap.set(type, 1);
    }
  }

  for (let x of hashMap.values()) {
    count *= x + 1;
  }

  return count - 1;
}
console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
);
console.log(
  solution([
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
);
