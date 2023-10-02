# Memoization

- 메모이제이션은 **기존에 수행한 연산의 결과값을 어딘가에 저장해두고 동일한 입력이 들어오면 재활용**하는 프로그래밍 기법이다.
- 적절하게 활용하면 **중복 연산**을 피할 수 있기 때문에 메모리를 조금 더 쓰더라도 애플리케이션의 성능을 최적화 할 수 있다.

## useMemo

- 메모이제이션된 **값을 반환**하는 함수다.

```ts
useMemo(() => fn, [deps]);
```

- deps로 지정한 값이 변하게 된다면 () => fn 함수를 실행하고, 그 함수의 **반환 값을 반환**해준다.
- 리렌더링이 발생할 경우, 특정 변수가 변할 때에만 useMemo에 등록한 함수가 실행되도록 처리하면 불필요한 연산을 하지 않게 된다.
- deps값이 변하면 이 함수를 실행해야될 때 사용한다.

## useCallback

- **메모이제이션된 함수를 반환**한다.

```ts
useCallback(fn, [deps]);
```

- 의존성이 있는 값이 변하면 fn에 등록한 함수를 반환하는 기능이다.
- useCallback이 함수를 반환하기 때문에 그 함수를 가지는 **const 변수에 초기화**하는 것이 일반적인 모양이다.
- 자식 컴포넌트에 props로 함수를 전달할 경우 사용한다.

```ts
// 함수는 값이 아닌 참조로 비교된다.
const functionOne = function () {
  return 5;
};

const functionTwo = function () {
  return 5;
};

// 서로의 참조가 다르기 때문에 false
console.log(functionOne === functionTwo);

/*
컴포넌트에서 특정 함수를 정의할 경우 각각의 함수들은 모두 고유한 함수가 된다.

이런 고유한 함수가 생성될 경우, 부모를 통해 props에 함수를 전달받는 자식 컴포넌트에서는 props가 변경되었다고 판단해 리렌더링이 발생하게 된다.
*/
```

```ts
function App() {
  const [name, setName] = useState('');
  const onSave = () => {};

  return (
    <div className='App'>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Profile onSave={onSave} />
    </div>
  );
}

/*
useCallback을 사용하지 않을 경우, 
name이 변경되어 리렌더링이 발생하면 onSave함수가 새로 만들어지고, 
Profile 컴포넌트의 props로 onSave함수가 새로 전달되게 됩니다.

이때 Profile 컴포넌트에서 useMemo를 사용해도 
이전 onSave와 이후 onSave가 같은 값을 반환하지만 
참조가 다른 함수가 되어버리기 때문에 리렌더링이 일어나게 됩니다.

부모 컴포넌트만 수정하려고 했지만 연쇄적으로 하위 컴포넌트들 모두 렌더링이 일어나게 되어버리지요.
*/

function App() {
  const [name, setName] = useState('');
  const onSave = useCallback(() => {
    console.log(name);
  }, [name]);

  return (
    <div className='App'>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Profile onSave={onSave} />
    </div>
  );
}
```

- 외부에서 값을 가져오는 api를 호출하는 경우 사용한다.
