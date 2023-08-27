// 피로도
function solution(k, dungeons) {
  let answer = 0;

  const visited = Array.from({ length: dungeons.length }, () => false);

  function DFS(hp, L) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= hp) {
        visited[i] = true;

        DFS(hp - dungeons[i][1], L + 1);

        visited[i] = false;
      }
    }

    answer = Math.max(answer, L);
  }

  DFS(k, 0);

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
