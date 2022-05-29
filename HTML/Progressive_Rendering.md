## Progressive Rendering(점진적 렌더링)

- Server에서 중요한 콘텐츠를 렌더링한 후 중요하지 않은 콘테츠를 기다리지 않고 Client로 Streaming하고 이후에 Server에서 나머지 중요하지 않은 콘텐츠들이 렌더링되면 다시 Client의 웹페이지로 Streaming하는 기술이다.
- 브라우저는 중요한 콘텐츠에 대한 chunk가 수신되는 즉시 페이지에서 HTML을 점진적으로 렌더링하기 시작하고 브라우저가 Server에서 수신할 때 중요하지 않은 콘텐츠는 나중에 페이지 렌더링 처리된다.

### PSSR 동작 방식

1. Client에서 Server로 HTML을 요청한다.
2. Server에서 API Request 생성 후, 중요한 콘텐츠를 우선 렌더링 후 Client로 Streaming한다.
3. Client는 Server에서 내려준 HTML을 chunk 로드 후 렌더링 한다.
4. Server에서 중요하지 않았던 나머지 콘텐츠를 렌더링하고 다시 Client로 Streaming한다.
5. Client는 Server에서 중요치 않았던 나머지 콘텐츠를 받아 렌더링한다.
6. 전체 페이지 로드 완료 후, Client는 일반적으로 이벤트 핸들러 및 기타 상호작용 동작을 연결하는 DOM Element에 대한 상호작용을 수행한다.

- PSSR은 SSR과 CSR의 이점을 모두 가지고 있다.
- API는 Server에 함께 있기 때문에 초기 콘텐츠를 빠르게 렌더링할 수 있고, 동시에 덜 중요한 콘텐츠를 기다리지 않고 브라우저로 Streaming하여 콘텐츠를 제공해준다.
- PSSR을 사용하면 Javascript를 사용하여 콘텐츠를 로드하지 않고도 비동기식으로 사이트를 더 빠르게 로드할 수 있다.

### 장점

- Server에서 중요한 콘텐츠를 먼저 Client로 Streaming할 수 있다.
- Javascript bundle을 로드하는 시간동안 콘텐츠 렌더링을 차단하지 않는다.
- CSR과 SSR의 장점을 모두 가지고 있어 페이지 로드 시간이 빠르다.

### 단점

- 콘텐츠가 빠르게 표시 되더라도 마지막 중요하지 않은 콘텐츠가 모두 로드된 후, Javascript 관련 상호 작용이 활성화 된다.
- PSSR이 확립된 프레임워크가 아직 없으며, 웹 어플리케이션에 한계에 대한 의존도가 높다.
