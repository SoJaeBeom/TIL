## Recoil

- 리엑트를 위한 상태 관리 라이브러리다.
- Recoil을 사용하면 atoms(공유 상태)에서 selectors(순수 함수)를 거쳐 React 컴포넌트로 내려가는 data-flow graph를 만들 수 있다.

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
