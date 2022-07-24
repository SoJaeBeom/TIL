## Javascript의 ES란?

- ES는 ECMAScript의 약자이다.
- ECMAScript는 Ecma 인터내셔널의 ECMA-262 기술 규격에 정의된 표준화된 스크립트 프로그래밍 언어이다.
- 자바스크립트를 표준화하기 위해서 만들어졌으며 꼭 자바스크립트가 아니더라고 어도비 플래시를 사용하는 소프트웨어에서 사용하는 액션스크립트, MS사의 인터넷 익스플로러에 쓰이는 J스크립트 등 다른 구현체들 역시 포함하고 있다.
- ES는 프로그래밍 언어가 아닌 스크립트 언어들에 대한 표준, 규격이다.

### ES5/ES6 문법 차이

1. let, const 추가

- 기존의 var 키워드는 함수 레벨 스코프를 가지며 암묵적 재할당이 가능했다.
- 단점을 보완하기 위해 블록 레벨 스코프를 가지며 재할당이 가능한 let, const 키워드가 추가되었다.

2. Arrow function 추가

- 화살표 함수가 추가되어 함수를 간결하게 나타낼 수 있다.

```js
// es5
function sum(a, b) {
  return a + b
}

// es6
const sum = (a, b) => a + b
```

3. Template literal 추가

- ``(back tic) 안에 \${} 표현식을 사용하여 문자열을 간편하게 쓸 수 있다.

```js
// es5
var first = 'hong'
var last = 'gildong'
var name = 'My name is ' + first + ' ' + last + '.'
// My name is hong gildong.

// es6
const name = `My name is ${first} ${last}.`
// My name is hong gildong.
```
