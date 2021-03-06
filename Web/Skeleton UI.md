## Skeleton UI
- 데이터가 로드되기 전에 콘텐츠의 placeholder를 표시해서 유저가 기다리는 시간을 덜 지루하게 느끼게끔 하는 UI이다.

### 장점
- 사용자의 이탈을 막고, ‘어떤 것들이 보여질 것이다’라고 미리 알려주는 효과를 준다.
- 기존 Spinner에 비해 훨씬 사용자 친화적이고, 사용자 이탈율도 실제로 적다고 한다.

### 단점
- 화면마다 표시해야 되기 때문에 상대적으로 시간, 비용이 많이 든다.

### 더 나은 경험을 위한 Skeleton UI 규칙
- 콘텐츠의 로드를 방해하면 안된다.
- 실제 콘텐츠는 데이터를 사용할 수 있는 시점이 되면 즉시 스켈레톤을 대체해야 한다.
- 스켈레톤을 디자인할 때 애니메이션을 사용하는 것이 좋다.
- 느리고 안정적인 애니메이션을 사용하는 것이 로딩 시간을 더 짧게 느끼게끔 한다.
