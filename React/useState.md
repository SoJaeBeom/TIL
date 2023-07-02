# useState

## 동작원리

- Closure의 특징을 이용한다.
- 비동기로 동작한다.
- 수많은 상태가 각각 바뀔 때마다 화면을 리랜더링 해야한다면 문제가 생길 것이다.
- setState를 연속 호출하면 setState를 모두 취합(batch)한 후에 한번에 렌더링하도록 한다.
  - 16ms 단위로 batch update를 진행하고 그 사이 변경된 상태값을 모아서(merge) 이전의 엘리먼트 트리와 변경된 state가 적용된 엘리먼트 트리를 비교하는 작업(reconciliation)을 거쳐 최종적으로 변경된 부분만 DOM에 적용시킨다.
- state는 결국 객체이기 때문에 merge단계에서 Object.assign()으로 객체를 합칠때처럼 merge된다.
