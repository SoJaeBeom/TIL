function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    if (a[n] > b[n]) return 1;
    if (a[n] === b[n]) return a < b ? -1 : 1;
    return 0;
  });
}

console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));

/**
 * sort(a, b)
 * 1 : 0보다 클 때 -> a가 먼저
 * 0 : 0일 때 -> 그대로
 * -1 : 0보다 작을 때 -> b가 먼저
 */
