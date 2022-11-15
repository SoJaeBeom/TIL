function makeTrie(words) {
  const root = {};
  for (const word of words) {
    let current = root;
    for (const letter of word) {
      if (!current[letter]) current[letter] = [0, {}];
      current[letter][0] = 1 + (current[letter][0] || 0);
      current = current[letter][1];
    }
  }
  return root;
}

function solution(words) {
  let answer = 0;
  const trie = makeTrie(words);

  for (const word of words) {
    let count = 0;
    let current = trie;

    for (const [index, letter] of [...word].entries()) {
      count += 1;
      if (current[letter][0] <= 1) {
        break;
      }
      current = current[letter][1];
    }
    answer += count;
  }

  return answer;
}

console.log(solution(['go', 'gone', 'guild']));
console.log(solution(['abc', 'def', 'ghi', 'jklm']));
console.log(solution(['word', 'war', 'warrior', 'world']));
