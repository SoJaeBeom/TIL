function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s.charAt(i)) {
      stack.pop();
    } else {
      stack.push(s.charAt(i));
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));
console.log(solution('aaa'));
