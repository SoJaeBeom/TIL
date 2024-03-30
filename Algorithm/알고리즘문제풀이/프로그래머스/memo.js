//////////한 글자 입력////////////////
function solution(input) {
  // 답변 출력
  console.log(input);
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = line; // 입력받은 문자열, line
  input = parseInt(line); // 형변환, parseInt
  rl.close(); // 입력 종료
}).on('close', function () {
  solution(input); // 문제 풀이 함수 호출
  process.exit(); // 프로세스 종료
});
////////////////////////////////////////////////////////
/////////// 한 줄 입력/////////////////////////
function solution(input) {
  // 답변 출력, list
  console.log(input);
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let list = [];

rl.on('line', function (line) {
  input = line; // 입력받은 문자열, line
  rl.close(); // 입력 종료
}).on('close', function () {
  // 형변환, 구분자(띄어쓰기)기준으로 배열에 삽입
  list = input.split(' ').map((el) => Number(el));

  solution(list); // 문제 풀이 함수 호출
  process.exit(); // 프로세스 종료
});
////////////////////////////////////////////////////////
////////////////////// 여러 줄 입력////////////////////////
function solution(input) {
  // 답변 출력, list
  console.log('hi :: ', input);
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl.on('line', function (line) {
  input.push(line); // 입력받은 여러줄, line
  // rl.close()이 없기에 계속 입력, 로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료
}).on('close', function () {
  // 형변환, 구분자(띄어쓰기)기준으로 배열에 삽입
  input.forEach((val) => {
    list.push(
      val
        .trim()
        .split(' ')
        .map((el) => parseInt(el))
    );
  });

  solution(list); // 문제 풀이 함수 호출
  process.exit(); // 프로세스 종료
});
