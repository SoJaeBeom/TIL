## BFC(Block Formatting Context)

- BFC(Block Formatting Context)는 블록 박스가 배치된 웹 페이지의 시각적 CSS 렌더링의 일부다.
- float, absolute로 배치된 요소, inline-blocks, table-cells, table-caption 그리고 visible(그 값이 viewport에 전파되었을 때는 제외)이 아닌 overflow가 있는 요소들이 새로운 Block Formatting Context를 만든다.

### BFC 활용

- BFC는 마진 겹침현상을 방지한다. 즉, 위 속성모두가 margin 겹침현상을 일어나지 않게 한다.
- float 된 요소들을 부모 컨테이너 안으로 들여 놓는다.
- float된 요소를 글자들이 감싸는 것을 분리 한다.
