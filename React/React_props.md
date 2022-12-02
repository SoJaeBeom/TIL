## props

- Props 는 HTML 태그 속성과 유사한 규칙을 사용하여 React component 에 전달되는 값을 포함하는 단일 값 또는 객체다.
- 부모 component 에서 자식 component 로 전달되는 데이터이다.

### props의 목적

- 사용자 정의 데이터를 React component 로 전달할 수 있다.
- State 변경을 Trigger 할 수 있다.
- Component 의 render 메서드 안에서 this.props.reactProp 로 접근하여 사용할 수 있다.

### props.children

- 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, props.children 을 조회하면 된다.

```js
// Wrapper.js
import React from 'react'

function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  }
  return <div style={style}>{children}</div>
}

export default Wrapper

// App.js
import React from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  )
}

export default App
```
