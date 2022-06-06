## DOCTYPE 이란

- DOCTYPE은 document type의 약어다.
- DOCTYPE은 항상 DTD (Document Type Definition)와 관련된다.
- DTD는 특정 문서가 어떻게 구성되어야 하는지 정의한다. (예시: button은 span을 포함할 수 있지만, div는 그럴 수 없다.)
- DOCTYPE은 문서가 대략 존중할만한 DTD를 선언한다. (예시: 이 문서는 HTML DTD를 존중한다.)
- 웹 페이지는 DOCTYPE 선언이 필요하다.
- 유저 에이전트에게 문서가 존중하는 HTML 사양의 버전을 알리는데 사용된다.
- 유저 에이전트가 올바른 DOCTYPE을 인식하면, 문서를 읽는데에 DOCTYPE과 일치하는 no-quirks mode를 트리거한다.
  > no-quirks mode : 표준모드
- 유저 에이전트가 올바른 DOCTYPE을 인식하지 못하면, quirks mode를 트리거한다.
  > quirks mode : 호환모드
- HTML5 표준에 대한 DOCTYPE 선언은 `<!DOCTYPE html>`
