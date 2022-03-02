## Export
- export하길 원하는 함수나 변수 앞에 export를 붙여주면 된다.
```js
export const countries = ["한국", "일본", "중국"];

export const midtermTest = () => console.log("Oh My God");

export function helloWorld() {
    console.log("helloWorld");
}
```
- 변수와 함수에 하나씩 export를 붙여주는게 귀찮다면 다음과 같이 한번에 export 해줄 수 있다.

```js
const countries = ["한국", "일본", "중국"];

const midtermTest = () => console.log("Oh My God");

function helloWorld() {

console.log("helloWorld");

}

export { countries, midtermTest, helloWorld };
```

## Export default
- 해당 모듈(현재 파일)에서 함수나 변수를 기본으로 내보내겠다는 뜻이다.
```js
export default const countries = ["한국", "일본", "중국"];

import countries from "./Test";
```
- default로 내보내기를 하게 되면 import할 때 {} 없이 import가 가능합니다.
- 한개의 파일에서 export default 되는것은 하나이기 때문에 아무 이름으로나 import 가능하다.

