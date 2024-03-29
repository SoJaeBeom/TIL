# 타입스크립트 : 3000미터 상공엣 내려다보기

## 컴파일러

- 프로그램은 프로그래머가 작성한 다수의 텍스트 파일로 구성된다.
- 텍스트를 컴파일러라는 프로그램이 파싱하여 추상 문법트리(abstract syntax tree, AST)라는 자료구조로 변환한다.
- 컴파일러는 AST를 바이트코드라는 하위 수준의 표현으로 변환한다.
- 바이트코드가 만들어졌으면 런타임이라는 다른 프로그램에 바이트코드를 입력해 평가하고 결과를 얻을 수 있다.
- 프로그램을 실행한다는 것은 컴파일러가 소스 코드를 파싱해 AST로 만들고 다시 AST를 바이트코드로 변환한 것을 런타임이 평가하도록 지시한다는 의미이다.
  - 프로그램이 AST로 파싱된다.
  - AST가 바이트코드로 컴파일된다.
  - 런타임이 바이트코드를 평가한다.
- 타입스크립트는 컴파일러가 코드를 바이트코드 대신 자바스크립트 코드로 변환한다.
- 이후로는 자바스크립트 코드를 실행하듯이 브라우저, NodeJS로 실행할 수 있다.
- 타입스크립트 컴파일러는 AST를 만들어 결과 코드를 내놓기 전에 타입 확인을 거친다.
-

## 타입 시스템

- 타입 검사기가 프로그램에 타입을 할당하는데 사용하는 규칙 집합
- 어떤 타입을 사용하는지를 컴파일러에 명시적으로 알려주는 타입시스템과 자동으로 타입을 추론하는 타입 시스템으로 구분된다.
- 어노테이션을 이용하면 타입스크립트에 명시적으로 타입을 지정할 수 있다.
  - value: type 형태로 쓰이며 타입 검사기에게 value의 타입은 type이라고 알리는 역할을 한다.

### 타입스크립트 vs 자바스크립트

- 동적 타입 바인딩이란 자바스크립트가 프로그램을 실행해야만 특정 데이터의 타입을 알 수 있을을 의미한다.
- 점진적 타입 확인은 타입을 지정하지 않은 기존 자바스크립트 코드를 타입을 사욧ㅇ하는 타입스크립트로 마이그레이션할 때 유용하다.
- 자바스크립트는 약한 타입언어다.
- 자바스크립트가 제공하는 암묵적 변환때문에 문제의 원인을 추적하기 어렵다.
- 타입을 변환할때는 명시적으로 해야한다.
- 자바스크립트는 대부분의 상황에서 타입이 무엇인지 따지지 않는다.
- 타입스크립트에서는 컴파일 타임에 코드의 타입을 확인하기 때문에 코드를 실행하지 않고도 에러가 있음을 바로 알 수 있다.
- 자바스크립트는 런타임에 예외를 던지거나 암묵적 형변환을 수행한다.
  - 프로그램을 실행해야만 어떤 문제가 있는지 알수 있다.
- 타입스크립트는 컴파일 타임에 문법에러와 타입관련 에러를 모두 검출 한다.
