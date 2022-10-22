function solution(s) {
  let zeroCount = 0;
  let loopCount = 0;

  while (s !== '1') {
    const tempLength = [...s].reduce((total, string) => {
      if (string === '0') {
        zeroCount += 1;
        return total;
      }
      return total + 1;
    }, 0);

    s = tempLength.toString(2);
    loopCount += 1;
  }

  return [loopCount, zeroCount];
}
console.log(solution('110010101001'));
console.log(solution('01110'));
console.log(solution('1111111'));
