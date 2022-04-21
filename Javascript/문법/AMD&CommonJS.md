## AMD & CommonJS
- AMD, CommonJS는 ES2015가 등장하기 전까지 JavaScript에 기본적으로 존재하지 않는 모듈 시스템을 구현하는 방법이다.

## 모듈화의 필요성
- 자바스크립트는 파일을 나누어  `<script>`  태그로 불러오는 방식밖에는 모듈화 방법이 없었다.

### 문제점
- 파일을 불러들이는 순서가 중요하게 되었다.
- 따로 파일을 나눠도 모두 글로벌 변수로 생성되어 겹칠 수 있다.
- 다른 사람의 코드를 그대로 가져오기 힘들다.
- 이러한 문제들로 자바스크립트를 범용화하기 위한 모듈화 방법들이 나오기 시작했는데, 대표적인 명세가 AMD와 CommonJS다.

## CommonJs
- 동기식이다.
- 서버사이드 개발을 염두에 두고 설계되었다.
- 다른 언어처럼 import 문을 작성하는 스타일에 더 가깝다.
- 자바스크립트를 사용하는 모든 환경에서 모듈을 하는 것이 목표다.
- exports 키워드로 모듈을 만들고 require()함수로 불러 들이는 방식이다.
- 모듈 작성의 노드 스타일에 가깝고 클라이언트 사이드와 서버사이드 JavaScript 개발 사이를 전환할 때 문맥 전환 오버 헤드가 적다.
- 대표적으로 서버 사이드 플랫폼인 Node.js에서 이를 사용한다.

모듈화는 아래와 같이 세 부분으로 이루어진다.
- 스코프(Scope): 모든 모듈은 자신만의 독립적인 실행 영역이 있어야 한다.
- 정의(Definition): 모듈 정의는 exports 객체를 이용한다.
- 사용(Usage): 모듈 사용은 require 함수를 이용한다. 
  - 전역변수와 지역변수를 분리하는 것이 매우 중요하다. 
  - 서버사이드 JavaScript의 경우에는 파일마다 독립적인 파일 스코프가 있기 때문에 파일 하나에 모듈 하나를 작성하면 간단히 해결된다.
```js
// math.js
exports function sum(a, b) { return a + b; }
```
```js
// app.js
const math = require("./math.js") 
math.sum(1, 2) // 3
```

## AMD
- 'Asynchronous Module Definition' - 비동기식 모듈 정의
- 모듈의 비동기 로딩을 지원하므로 브라우저용으로 더 많이 사용된다.
- CommonJS와 많은 부분이 닮아 있거나 호환할 수 있는 기능을 제공한다.
- require() 함수를 사용할 수 있으며, exports 형태로 모듈을 정의할 수도 있다.

## ES2015에서 표준 모듈 시스템 (import, export)
- ES2015에서 표준 모듈 시스템이 생겼다.
- 바벨과 웹팩을 이용해 모듈 시스템을 사용하는 것이 일반적이다.

ES2015 모듈 시스템
```js
// math.js
export function sum(a, b) { return a + b }
```
```js
// app.js
import * as math from "./math.js" 
math.sum(1, 2) // 3
```
- export 구문으로 모듈을 만들고 import 구문으로 가져올 수 있다.
- 모든 브라우져에서 모듈 시스템을 지원하지는 않는다.
- 인터넷 익스플로러를 포함한 몇 몇 브라우져에서는 여전히 모듈을 사용하지 못한다.

```html
<!-- index.html -->
<script type="module" src="app.js"></script>
```
- `<script>` 태그로 로딩할 때 type="text/javascript" 대신 type="module"을 사용한다.(app.js는 모듈을 사용할 수 있다.)