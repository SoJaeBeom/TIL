## undeclared & undefined & null 차이점

### undeclared

- undeclared 변수는 이전에 var, let, const를 사용하여 생성되지 않은 식별자에 값을 할당할 때 생성된다.
- undeclared 변수는 현재 범위 외부에 전역으로 정의된다.
- strict 모드에서는 Undeclared 변수에 할당하려고 할 때, ReferenceError가 발생한다.

```js
function foo() {
  x = 1 // strict 모드에서 ReferenceError를 발생시킨다.
}

foo()
console.log(x) // 1
```

### undefined

- undefined 변수는 선언되었지만, 값이 할당되지 않은 변수이다.
- 함수가 실행 결과에 따라 아무값도 반환하지 않으면, 변수에 할당되며, 그 변수가 undefined 값을 갖는다.
- 엄격한 (===) 연산자 또는 typeof에 undefined 문자열을 사용하여 비교한다.
- 확인을 위해 추상 평등 연산자(==)를 사용해서는 안되며, 이는 값이 null이면 true를 반환한다.

```js
var foo
console.log(foo) // undefined
console.log(foo === undefined) // true
console.log(typeof foo === 'undefined') // true

console.log(foo == null) // true. 옳지않다. 이렇게 사용하면 안된다.

function bar() {}
var baz = bar()
console.log(baz) // undefined
```

### null

- null인 변수는 null 값이 명시적으로 할당된 것이다.
- null은 값을 나타내지 않으며, 명시적으로 할당됐다는 점에서 undefined와 다르다.
- null을 체크하기 위해서 단순히 완전 항등 연산자(===)를 사용하여 비교하면 된다.
- 추상 평등 연산자 (==)를 사용해서는 안되며, 값이 undefined이면 true를 반환한다.

```js
var foo = null
console.log(foo === null) // true

console.log(foo == undefined) // true. 옳지않다. 이렇게 사용하면 안된다.
```
