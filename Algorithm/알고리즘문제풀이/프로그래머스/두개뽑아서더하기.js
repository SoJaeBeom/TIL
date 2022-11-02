function solution(numbers) {
  let temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(temp)].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));

/**
 * 배열에서 중복 제거
 * 1. Set을 이용하여 중복제거
 * 2. filter(), indexOf()를 이용하여 중복제거
 * 3. reduce()를 이용하여 중복제거
 * 4. for 루프를 이용하여 중복제거
 */
