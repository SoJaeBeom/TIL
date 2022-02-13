## JavaScript 동작 원리
1. 자바스크립트 동작 구조
- 자바스크립트를 실행하기 위해서는 자바스크립트 엔진이 필요하다.
- 대표적인 자바스크립트 엔진에는 구글에서 만든 V8엔진이다.

<img width="949" alt="자바스크립트 동작 구조" src="https://user-images.githubusercontent.com/54342317/153754671-347d9afe-3c3b-44ab-8da5-c36930fb026a.png">

- 엔진은 Memory Heap, Call Stack으로 구성되어 있다.
  - Memory Heap(메모리 힘) : 메모리 할당이 발생한다.
  - Call Stack(호출 스택) : 코드 실행에 따라 스택이 하나씩 쌓이는 곳이다.
  > Web API : 웹 브라우저 혹은 node js 같은 자바스크립트 런타임에서 지원해주는 API
- 자바스크립트는 스택을 사용하기 때문에 후입 선출(LIFO)의 구조이다.
- 자바스크립트는 하나의 Call Stack을 가지고 코드를 순차적으로 처리하기 때문에 한 번에 하나의 명령어만 실행될 수 밖에 없다.
  - 단일(싱글) 스레드이며 동기식 언어라고 할 수 있다.
- 자바스크립트를 비동기로 수행하기 위해 Event Loop, Callback Queue가 필요하다.
- Event Loop는 Callback Queue에 있는 콜백 함수를 Call Stack으로 보내서 처리하기 위해 Call Stack이 비어있는지를 검사한다.
  - Call Stack이 비어있을 때 보내준다.
- 이벤트 루프가 반드시 Call Stack이 비어져있는 상태에서만 Call Stack으로 Push하는 이유는 자바스크립트라는 언어가 동기화 문제를 안는 것을 피하고 단일 스레드 언어라는 것을 보장해주기 위함이다.