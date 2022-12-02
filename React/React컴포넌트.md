## React 컴포넌트
1. 함수형 컴포넌트
2. 클래스형 컴포넌트

과거에는 클래스형 컴포넌트를 주로 사용했지만, 2019년 v16.8 부터 함수형 컴포넌트에 React Hook을 지원해 주어서 현재 공식 문서에는 함수형 컴포넌트와 훅을 함께 사용할 것을 권장하고 있다.

### 컴포넌트의 기능
- 데이터가 주어졌을 때 이에 맞추어 UI를 만들어 주는 기능을 한다.
- 라이프 사이클 API를 통해 컴포넌트가 화면에 나타날 때, 사라질 때, 변할 때 작업들을 수행할 수도 있다.
- 컴포넌트의 목적에 따라 프리젠테이셔널(presentational)컴포넌트와 컨테이너(container)컴포넌트로 나누기도 한다.

> #### 프레젠테이셔널 컴포넌트
> - View 만을 담당하는 컴포넌트이다.(UI를 작성한다)
> - 이 컴포넌트 안에서는 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트 둘 다 사용할 수 있다.
> - 리덕스 스토어에 직접적으로 접근하지 않고 props로만 데이터, 함수를 가져온다.
> - 순수한 컴포넌트로 state를 사용하지 않으며 state가 있을 경우 데이터가 아닌 UI에 대한 state여야 한다.
> - 주로 함수형 컴포넌트로 작성된다.

> #### 컨테이너 컴포넌트
> - 다른 프레젠테이션 컴포넌트나 컨테이너 컴포넌트를 관리한다.
> - 내부에 DOM 엘레멘트를 (UI) 작성하지 않는다 (사용하는 경우 감싸는 용도) 스타일을 가지고 있지 않는다.
> - 스타일은 모두 프레젠테이셔널 컴포넌트 내부에 정의되어야 한다.
> - 상태를 가지고 있고 리덕스에 직접 접근하여 데이터를 가져온다.
> - dispatch를 하는 함수를 여기서 구현한다.

### 함수형 컴포넌트
```js
import React from 'react';

function App() {
  const name = '리액트';
  return <div>{name}</div>;
}

export default App;
```
- 클래스형 컴포넌트보다 선언하기가 좀 더 편하고 메모리 자원을 덜 사용한다는 장점이 있다.
- 선언 방식에는 기존의 일반적인 함수 선언 방식이 있고 ES6의 화살표 함수 방식도 있다. (화살표 함수의 경우 함수를 파라미터로 전달할 때 유용하다.)
- state를 사용하지 않고 단순하게 데이터를 받아서(props) UI에 뿌려준다.
- Hook들을 필요한 곳에 사용하며 Logic의 재사용이 가능하다는 장점이 있어 함수형 컴포넌트 + Hook을 주로 사용한다고 한다.

### 클래스형 컴포넌트
```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    const name = '리액트';
    return <div>{name}</div>;
  }
}

export default App;
```
- state기능 및 라이프 사이클 기능을 사용할 수 있다.
- 임의 메서드를 정의할 수 있다.
- render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 한다.
- 과거의 prototype을 이용해서 구현하던 클래스 문법을 ES6 문법부터는 class문법을 사용하여 구현할 수 있다.
- 로직과 상태를 컴포넌트 내에서 구현하기 때문에 상대적으로 복잡한 UI 로직을 갖고 있다.

### 차이점 1 : 선언 방식
#### 클래스형 컴포넌트
1. class 키워드 필요
2. Component로 상속을 받아야한다.
3. render() 메소드가 반드시 필요하다.
4. state, lifeCycle 관련 기능사용이 가능하다.
5. 함수형보다 메모리 자원을 더 사용한다.
6. 임의 메소드를 정의할 수 있다.
```js
import React, { Component } from 'react'
class App extends Component {
  render() {
    const name = '클래스 컴포넌트'
    return <div>{name}</div>
  }
}

export default App
```
#### 함수형 컴포넌트
1. state, lifeCycle 관련 기능사용 불가능하다. -> Hook을 통해 해결
2. 클래스형보다 메모지 자원을 덜 사용한다.
3. 컴포넌트 선언이 편하다.
```js
import React from 'react'
const App = () => {
  const name = '함수형 컴포넌트'
  return <div>{name}</div>
}

export default App
```

### 차이점 2 : state
> ### state 란?  
> - 컴포넌트 내부에서 바뀔 수 있는 값

#### 클래스형 컴포넌트
1. constructor 안에서 this.state 초기 값 설정 가능하다.
2. counstructor 없이도 바로 state 초기값을 설정 가능하다.
3. this.setState() 를 통해 state값을 변경한다.
4. 클래스형의 state는 객체형식이다.
```js
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test1: [],
      test: '',
      number: 1
    }
  }
  testFunction = () => {
    this.setState({ number: number + 1 })
  }
  render() {
    const name = '클래스형 컴포넌트'
    return <div>{name}</div>
  }
}

export default App
```

#### 함수형 컴포넌트
1. useState 함수로 state를 사용한다.
2. useState 함수를 호출하면 배열이 반환되는데 첫 번째 원소는 현재 상태, 두번째 원소는 상태를 바꿔주는 함수이다.
```js
import React, { useState } from 'react'

const App = () => {
  const [test1, setTest1] = useState([])
  const [test2, setTest2] = useState('')
  const [number, setNumber] = useState(1)

  const testFunction = () => {
    setNumber(number + 1)
  }
  const name = '함수형 컴포넌트'
  return <div>{name}</div>
}

export default App
```

### 차이점 3 : props
> ### props 란?  
> - 컴포넌트의 속성을 설정
> - 읽기 전용(컴포넌트 자체 pros를 수정하면 안된다.)
> - 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 한다.
> - 수정되는 값은 state 이다.

#### 클래스형 컴포넌트
1. this.props로 통해 값을 불러올 수 있다.
```js
import React, { Component } from 'react'
class App extends Component {
  render() {
    const {number, testNumber} = this.props
    const title = '클래스형 컴포넌트'
    return <div>{testName}의 나이는 {number}살 입니다.</div>
  }
}

export default App
```

#### 함수형 컴포넌트
1. props를 불러올 필요 없이 바로 호출 할 수 있다.
```js
import React, { useState } from 'react'
const App = ({ number, testName }) => {
  const title = '함수형 컴포넌트'
  return (
    <div>
      {testName}의 나이는 {number}살 이다.
    </div>
  )
}

export default App
```

### 차이점 4 : 이벤트 핸들링
#### 클래스형 컴포넌트
1. 함수 선언시 화살표 함수로 바로 선언 가능하다.
2. 요소에 적용할때 this.를 붙여줘야한다.
```js
import React, { Component } from 'react'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1
    }
  }
  onClikcFunc = () => {
    this.setState({number: number + 1})
  }
  render() {
    const title = '클래스형 컴포넌트'
    return (
      <div>
        <button onClick={this.onClickFunc}>버튼</button>
      </div>
    )
  }
}

export default App
```

#### 함수형 컴포넌트
1. const + 함수 형태로 선언해야 한다.
2. 요소에 적용할때 this가 필요없다.
```js
import React, { useState } from 'react'
const App = () => {
  const [number, setNumber] = useState('')

  const onClickFunc = () => {
    setNumber(number + 1)
  }
  const title = '함수형 컴포넌트'
  return (
    <div>
      <button onClick={onClickFunc}>버튼</button>
    </div>
  )
}

export default App
```

### 차이점 5 : Life Cycle
> ### Life Cycle 이란?
> - React에서 컴포넌트는 여러 종류의 "생명주기 메소드" 를 가지며 이 메소드를 오버라이딩(상속하여 재정의) 하여 특정 시점에 코드가 실행되도록 설정 한다.
> - 클래스 컴포넌트에만 해당되는 내용이며, 함수형 컴포넌트는 Hook를 사용하여 생명주기에 원하는 동작을 한다.

#### 클래스형 컴포넌트
1. Mounting (생성 될 때) : 컴포넌트가 인스턴스로 생성되고 DOM 트리에 삽입되어 브라우저상에 나타는 과정이다.
- constructor
  - 시점 : 브라우저상에 나타날 때 가장 처음 실행되는 함수다.

  - 사용 이유 : 생성자 메서드로 this.state의 초기값 설정, 인스턴스에 이벤트 처리 메서드를 바인딩하기 위해 사용하고 super(props)를 첫 줄에 필수로 사용한다.
  ```js
  constructor(props) {
    super(props)
    this.state = {
      number: 1
    }
  }
  ```
- static getDerivedStateFromProps
  - 시점 : 컴포넌트가 처음 렌더링 되기 전에도 호출 되고 그 이후 리렌더링 되기 전에도 매번 실행된다.

  - 사용이유 : props로 받은 값을 state에다가 넣고 싶을때 사용한다.(거의 쓰지 않는 함수이다.)
  ```js
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value
      }
    }
  }
  ```
- render()
  - 컴포넌트를 렌더링하는 메서드이다.
```js
render() {
  const title = '클래스형 컴포넌트'
  return (
    <div>
      <button onClick={this.onClickFunc}>버튼</button>
    </div>
  )
}
```
- componentDidMount
  - 시점 : 컴포넌트가 생성된 직후, 트리에 삽입된 직후에 호출되고, 이 메서드가 호출되는 시점에는 우리가 만든 컴포넌트가 화면에 나타난 상태이다.

  - 사용이유 : 외부 라이브러리를 사용하여 특정 DOM에다가 차트를 그릴때, 컴포넌트에서 필요로하는 데이터 요청, DOM의 속성을 읽거나 직접 변경하는 작업을 할 때 사용한다.

2. Updating (업데이트 할 때) : 컴포넌트 props 또는 state가 바뀌었을 때
- static getDerivedStateFromProps
  - Mounting 에서 등장한 메서드로 업데이트에서도 호출된다.

- shouldComponentUpdate
  - 시점 : props 또는 state가 새로운 값으로 갱신되어 렌더링이 발생하기 직전에 호출한다.

  - 사용이유 : 
    - 성능최적화를 위해 사용한다. 
    - 컴포넌트가 리렌더링을 할지 말지 결정하는 메소드이다. (함수형 컴포넌트에선 useMemo()가 같은 역할을 한다.)
    - 리액트 공식 홈페이지에서는 이 메소드 대신 PureComponent를 사용하는 것이 좋다고 한다.
```js
shouldComponentUpdate(nextProps, nextState) {
  return this.props.value !== nextProps.value
}
```
- render
  - Mounting 에서 등장한 메서드로 업데이트에서도 호출된다.

- getSnapshotBeforeUpdate
  - 시점 : render 메서드 호출 후 브라우저에 나타나기 바로 직전에 호출되는 메서드이다. (render() -> getSnapshotBeforeUpdate -> DOM에 변화 반영 -> componentDidUpdate)

  - 사용이유 : 브라우저에 그리기 전에 스크롤의 위치, DOM의 크기를 사전에 알고 싶을 때, 업데이트 되기 직전에 DOM 함수를 return 시켜서 그 return된 값을 componentDidUpdate에서 받을 수 있다.
- componentDidUpdate
  - 시점
    - 리렌더링을 완료한 후 실행되는 메서드이다.
    - 화면에 우리가 원하는 변화가 모두 반영되고 난 뒤 호출한다.

  - 사용이유 : 컴포넌트가 업데이트 되었을 시에 DOM을 조작하기 위해 사용하거나 이전과 현재의 props를 비교하여 네트워크 요청을 보내는 작업을 할 때 유용하다.
3. Unmounting (제거 할 때) : 컴포넌트가 브라우저상에서 사라질 때

- componentWillUnmount
  - 시점 : 컴포넌트가 브라우저상에서 사라질 때
  - 사용이유 : 주로 DOM에 직접 등록했었던 이벤트를 제거하거나 setTimeout이 있다면 타이머를 제거, 외부 라이브러리 인스턴스를 제거하기 위해 사용한다.
