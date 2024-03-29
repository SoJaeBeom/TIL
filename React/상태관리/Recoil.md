## Recoil

- 리엑트를 위한 상태 관리 라이브러리다.
- Recoil을 사용하면 atoms(공유 상태)에서 selectors(순수 함수)를 거쳐 React 컴포넌트로 내려가는 data-flow graph를 만들 수 있다.

> Redux, Mobx... vs Recoil
>
> - Redux나 Mobx를 사용하기 위해서는 store 구성을 위한 package.json에 있는 CRA 설정부터 action, reducer듣등의 기본적인 보일러 플레이트를 설계하고 그에 따른 코드를 적어주어야 환경 설정이 끝나게 된다.
> - Recoil은 RecoilRoot를 최상위로 감싸주는 것으로 환경 설정의 많은 부분이 끝난다.

### Atoms

- 컴포넌트가 구독할 수 있는 상태의 단위이다.
- 업데이트와 구독이 가능하다.
- atom이 업데이트되면 각각의 구독된 컴포넌트는 새로운 값을 반영하여 다시 렌더링된다.
- atoms는 런타임에서 생성될 수도 있다.
- 리엑트의 로컬 컴포넌트의 상태 대신 사용할 수 있다.
- 동일한 atom이 여러 컴포넌트에서 사용되는 경우 모든 컴포넌트는 상태를 공유한다.
- Atoms는 atom함수를 사용해 생성한다.

```js
const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14,
});
```

- 디버깅, 지속성 및 모든 atoms의 map을 볼 수 있는 특정 고급 API에 사용되는 고유한 키가 필요하다.
- 두개의 atom이 같은 키를 갖는 것은 오류이기 때문에 키값은 전역적으로 고유하도록 해야한다.
- React 컴포넌트의 상태처럼 기본값도 가진다.
- 컴포넌트에서 atom을 읽고 쓰려면 useRecoilState라는 훅을 사용한다.
- React의 useState와 비슷하지만 상태가 컴포넌트 간에 공유될 수 있다는 차이가 있다.

```js
function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return (
    <button
      onClick={() => setFontSize((size) => size + 1)}
      style={{ fontSize }}
    >
      Click to Enlarge
    </button>
  );
}
```

- 버튼을 클릭하면 버튼의 글꼴 크기가 1만큼 증가하며, fontSizeState atom을 사용하는 다른 컴포넌트의 글꼴 크기도 같이 변화한다.

```js
function Text() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return <p style={{ fontSize }}>This text will increase in size too</p>;
}
```

### Selectors

- atoms 상태값을 동기 또는 비동기 방식을 통해 변환한다.
- atoms나 다른 selectors를 입력으로 빋아들이는 순수 함수(pure function)다.
- 상위의 atoms 또는 selectors가 업데이트되면 하위의 selector 함수도 다시 실행된다.
- 컴포넌트들은 selectors를 atoms처럼 구독할 수 있으며 selectors가 변경되면 컴포넌트들도 다시 렌더링된다.
- 상태를 기반으로 하는 파싱 데이터를 계산하는 데 사용된다.
- 최소한의 상태 집합만 atoms에 저장하고 다른 모든 파생되는 데이터는 selectors에 명시한 함수를 통해 효율적으로 계산함으로써 쓸모없는 상태의 보존을 방지한다.
- 어떤 컴포넌트가 자신을 필요로하는지 또 자신은 어떤 상태에 의존하는지를 추적하기 때문에 이러한 함수적인 접근방식을 효율적으로 만든다.
- 컴포넌트의 관점에서 보면 selectors와 atoms는 동일한 인터페이스를 가지므로 서로 대체할 수 있다.
- selector함수를 사용해 정의한다.

```js
const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({ get }) => {
    const fontSize = get(fontSizeState);
    const unit = 'px';

    return `${fontSize}${unit}`;
  },
});
// 이 fontSizeLabelState예시에서 selector는 fontSizeState라는 하나의 atom에 의존성을 갖는다.
// fontSizeLabelState selector는 fontSizeState를 입력으로 사용하고 형식화된 글꼴 크기 레이블을 출력으로 반환하는 순수 함수처럼 동작한다.
```

- get 속성은 계산될 함수다.
- 전달되는 get 인자를 통해 atoms와 다른 selectors에 접근할 수 있다.
- 다른 atoms나 selectors에 접근하면 자동으로 종속 관계가 생성되므로 참조했던 다른 atoms나 selectors가 업데이트되면 이 함수도 다시 실행된다.
- Selectors는 useRecoilValue()를 사용해 읽을 수 있다.
- useRecoilValue()는 하나의 atom이나 selector를 인자로 받아 대응하는 값을 반환한다.
- fontSizeLabelState selector는 writable하지 않기 때문에 useRecoilState()를 이용하지 않는다.

```js
function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <>
      <div>Current font size: ${fontSizeLabel}</div>
      <button onClick={setFontSize(fontSize + 1)} style={{ fontSize }}>
        Click to Enlarge
      </button>
    </>
  );
}

// 버튼를 클릭하면 버튼의 글꼴 크기가 증가하는 동시에 현재 글꼴 크기를 반영하도록 글꼴 크기 레이블을 업데이트하는 두 가지 작업이 수행된다.
```
