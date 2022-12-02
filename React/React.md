## React
- SPA를 위한 사용자 인터페이스를 구축하는데 사용되는 라이브러리이다.
- 웹, 모바일 앱의 View Layer를 처리한다.
- 재사용 가능한 UI 구성 요소를 만들 수 있다.
- 페이지를 다시 로드하지 않고도 데이터를 변경 할 수 있는 대규모 웹 어플리케이션을 만들 수 있다.
- 빠르고 확장 가능하며 단순하다.

### React : 컴포넌트 구조
- 컴포넌트 기반의 라이브러리다.
- 독립적인 단위의 소프트웨어 모듈이다.
- 유지보수, 관리, 재사용이 용이해지는 장점이 있다.
- 컴포넌트 종류에는 클래스형(stateful)과 함수형(stateless)으로 나누어진다.

### Data Flow
- 부모에서 자식으로 단방향이다.(one-way data flow)
- 데이터가 내려가기만 하지 밑에서 데이터를 올려줄 수는 없다.
- 부모의 데이터를 바꿔주기 위해 state를 이용한다.

### JSX
- HTML을 표현할 때 사용한다.
- 외관상 HTML 마크업 언어를 리터럴로 입력하는 것으로 보이는데 빌드시 babel에 의해 자바스크립트로 변홥된다.
- HTML요소에 class값을 정의할 때 class대신 className을 사용한다.
- 이벤트를 핸들링하는 onClick등의 단어들은 카멜 표기법으로 표기한다.
- HTML의 custom-element는 `<my-element>`와 같이 표기했지만 React의 custom-element는 `<MyElement />`와 같이 파스칼 표기법으로 표기한다.
- JSX내부에서도 JS를 {}를 사용해서 불러올 수 있다. (ex::  `{console.log(this.props)})`
- 닫는 태그에는 명시적으로 /> 표기를 해준다.

### Virtual DOM
- DOM : Document Object Model
- HTML, xml, CSS등을 트리 구조로 인식하고 데이터를 객체로 간주하여 관리한다.
- Virtual DOM은 가상의 DOM이다.
- HTML 코드를 작성하고 HTML파일을 열게되면 HTML코드들이 DOM을 만든다.
- HTML코드가 수정되면 전체 DOM을 새롭게 만든다. -> 비효율적이다.
- React Virtual DOM은 변경된 부분만 DOM에 반영하는 방식이다. -> 효율성과 속도를 높힌다.

### Props and State
- 공통점
  - 두 객체 모두 렌더링 결과물에 영향을 주는 정보를 가지고 있다.
- 차이점 
  - props(like 함수 매개변수)는 component에 전달된다.  
  - state(like 함수내에 선언된 변수)는 component안에서 관리된다.

1. props
- 부모 컴포넌트에서 자식 컴포넌트로 전달해주는 읽기 전용 데이터이다.
- 자식 컴포넌트에서 props 변경이 불가능, props를 전달해준 최상위 부모 컴포넌트에서만 변경 가능하다.

2. state
- 동적인 데이터를 다룰 때 사용한다.
- state는 클래스형 컴포넌트에서만 사용할 수 있는데 각각의 state는 독립적이라 다른 컴포넌트의 직접적인 접근은 불가능하다.
- 자신보다 상위에 있는 state는 변경이 가능한데 state를 변경해주는 함수를 props로 받는다면 state의 변경이 가능하다.
- props로 넘겨줄 때에 this의 binding을 신경써줘야 한다.


