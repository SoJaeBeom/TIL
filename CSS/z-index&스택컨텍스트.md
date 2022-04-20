## z-index와 스택 컨텍스트(stacking context)
### z-index
- CSS의 z-index속성은 겹치는 요소의 쌓임 순서를 제어한다. 
- z-index는 position에 static이 아닌 값을 갖는 요소에만 영향을 준다.

- z-index 값이 없으면 DOM에 나타나는 순서대로 요소가 쌓이게 된다.(동일한 계층에서 가장 아래의 것이 맨 위에 보여진다)
- 정적이지 않은(non-static) 위치지정 요소(및 해당 하위 요소)는 HTML 레이어 구조와 상관없이 기본 정적 위치로 항상 요소 위에 나타난다.

- z-index는 같은 형제 요소에 선언된 z-index끼리 비교를 한다.
- 만약 같은 형제 요소끼리에서 z-index가 선언된 내용이 없으면 자식 요소의 z-index값을 가지고 확인한다.

### 스택 컨텍스트
- 스택 컨텍스트(stacking context)는 레이어들을 포함하는 요소이다.
- 지역 스택 컨텍스트 내에서, 자식의 z-index 값은 문서 루트가 아닌 해당 요소를 기준으로 설정된다.
- 해당 컨텍스트 외부 레이어(예: 지역 스택 컨텍스트의 형제 요소)는 그 사이의 레이어에 올 수 없다.
- 요소 B가 요소 A의 상단에 위치하는 경우, 요소 A의 하위 요소 C는, 요소 C가 요소 B보다 z-index가 더 높은 경우에도 요소 B 보다 위에 올 수 없다.

- 각각의 스택 컨텍스트는 자체적으로 포함되어 있다.
- 요소의 내용이 쌓인 후에는 전체 요소를 스택 컨텍스트의 쌓인 순서로 고려한다. 
- 다음 몇몇 CSS 속성, opacity가 1보다 작거나, filter가 none이 이거나, transform이 none이 아닌 것들이 새로운 스택 컨텍스트를 트리거 한다.

### 쌓임 순서 (Staking Order)란?
- z-index가 높으면 위로 오고, z-index가 낮으면 아래로 가는 것이다.

### 쌓임 맥락 (Stacking Context)란?
- 같은 부모 밑에 쌓임 순서에 따라 앞뒤로 한꺼번에 움직일 수 있는 요소를 말한다.

### 쌓임 맥락이 만들어지는 조건
- html요소
- 요소가 position: static이 아니고 z-index: auto가 아닐 때
- 요소의 opacity 값이 1보다 작을 때(opacity를 줄 경우 새로운 쌓임 맥락이 생긴다.)

### 특정 쌓임 맥락에서의 쌓임 순서
1. 쌓임 맥락의 뿌리 요소(즉 html요소)
2. position값이 있고, z-index가 음수인 요소
3. position값이 없는 요소
4. position값이 있고 z-index가 auto인 요소
5. position값이 있고 z-index가 양수인 요소
- 2와 같이 position값이 있고 z-index값이 음수인 경우 부모보다 아래로 갈 수 있다.

