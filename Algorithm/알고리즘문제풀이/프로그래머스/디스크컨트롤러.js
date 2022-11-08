function solution(jobs) {
  let [currentTime, totalTime] = [0, 0];
  const priorityQueue = [];

  const getTime = () => {
    const [arrivalTime, burstTime] = priorityQueue.shift();
    totalTime += currentTime - arrivalTime + burstTime;
    currentTime += burstTime;
  };

  jobs
    .sort((a, b) => a[0] - b[0])
    .forEach(([arrivalTime, burstTime]) => {
      while (currentTime < arrivalTime) {
        if (!priorityQueue.length) {
          currentTime = arrivalTime;
        } else {
          getTime();
        }
      }
      priorityQueue.push([arrivalTime, burstTime]);
      priorityQueue.sort((a, b) => a[1] - b[1]);
    });

  while (priorityQueue.length > 0) {
    getTime();
  }

  return Math.floor(totalTime / jobs.length);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);
