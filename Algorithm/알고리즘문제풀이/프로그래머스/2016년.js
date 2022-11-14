function solution(a, b) {
  let arr = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let passedDays = 0;

  for (let i = 1; i < a; i++) passedDays += arr[i];

  passedDays += b - 1;
  return week[(5 + passedDays) % 7];
}

console.log(solution(5, 24));
