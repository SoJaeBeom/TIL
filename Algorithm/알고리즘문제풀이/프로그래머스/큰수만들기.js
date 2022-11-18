function solution(number, k) {
  const stack = [];
  let count = 0;

  for (const item of number) {
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count += 1;
    }

    stack.push(item);
  }

  while (count < k) {
    stack.pop();
    count += 1;
  }

  return stack.join('');
}

console.log(solution('1924', 2));
console.log(solution('1231234', 3));
console.log(solution('4177252841', 4));
