function solution(food) {
  return food.reverse().reduce((acc, cur, index, array) => {
    const calorie = (food.length - index - 1).toString();

    const repeatedFood = calorie.repeat(parseInt(cur / 2));

    return repeatedFood + acc + repeatedFood;
  }, '0');
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
