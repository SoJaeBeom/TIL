# strict mode

## strict mode(엄격 모드)란

- ES5 부터 추가되었다.
- 자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수있은 코드에 대해 명시적인 에러를 발생시킨다.
- ESLint같은 린트 도구를 사용해도 유사한 효과를 얻을 수 있다.
- 린트 도구는 정적 분석 기능을 통해 소스코드를 실행하기 전에 소스코드를 스캔하여 문법적 오류만이 아니라 잠재적 오류까지 찾아내고 오류의 원인을 리포팅해주는 도구다.
- 린트 도구는 strict mode가 제한하는 오류는 물론 코딩 컨벤견을 설정 파일 형태로 정의하고 강제할 수 있다.

## strict mode 의 적용

- strict mode를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 `use strict;`를 추가한다.

```js
// 전역의 선두에 추가
'use strict';

function foo() {
  x = 10; // ReferenceError: x is not defined
}

foo();

// 함수 몸체의 선두에 추가
function foo() {
  'use strict';

  x = 10; // ReferenceError: x is not defined
}

foo();
```

- 코드의 선두에 `use strict`를 위치시키지 않으면 제대로 동작하지 않는다.

## 전역에 strict mode를 적용하는 것은 피하자

- 전역에 적용한 strict mode는 스크립트 단위로 적용된다.
- 스크립트 단위로 적용된 엄격모드는 다른 스크립트에 영향을 주지 않고 해당 스크립트에 한정되어 적용된다.
- 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다.

```js
// 즉시 실행 함수의 선두에 적용
(function () {
  'use strict';

  // Do Something....
})();
```

## 함수 단위로 strict mode를 적용하는 것도 피하자

## strict mode가 발생시키는 에러

### 암묵적 전역

- 선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.

### 변수, 함수, 매개변수의 삭제

- delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다.

### 매개변수 이름의 중복

- 중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다.

### with문의 사용

- with문을 사용하면 SyntaxError가 발생한다.

## strict mode 적용에 의한 변화

### 일반 함수의 this

- 엄격 모드에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다.
- 생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 때문이다.

### arguments 객체

- 엄격모드에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.
