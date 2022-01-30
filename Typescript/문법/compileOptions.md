## complieOptions
1. @types
- TypeScript2.0부터 사용 가능해진 내장 type definition 시스템이다.
- 아무 설정을 안하면 node_modules/@types라는 모든 경로를 찾아서 사용한다.
- typeRoots를 사용하면 배열 안에 들어있는 경로들 아래서만 가져온다.
- types를 사용하면 배열 안의 모듈 혹은 ./node_modules/@types/ 안의 모듈 이름에서 찾아온다.
- [] 빈 배열을 넣는다는건 이 시스템을 이용하지 않겠다는 것이다.
- typeRoots와 types를 같이 사용하지 않습니다.

2. target
- 빌드의 결과물을 어떤 버전으로 할 것인지 결정하는 것이다.
- 지정을 안하면 es3 이다.

3. lib
- 기본 type definition 라이브러리를 어떤 것을 사용할 것인지 결정하는 것이다.
- lib를 지정하지 않을 때,
  - target이 es3이고 디폴트로 lib.d.ts를 사용한다.
  - target이 es5이면 디폴트로 dom, es5, scripthost를 사용한다.
  - target이 es6이면 디폴트로 dom, es6, dom.iterable, scripthost를 사용한다.
- lib를 지정하면 그 lib 배열로만 라이브러리를 사용한다.
  - 빈 [] => no definition found... 라는 에러를 나타낸다.