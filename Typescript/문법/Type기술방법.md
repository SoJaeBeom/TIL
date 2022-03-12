## Type 기술 방법
1. 인터페이스 
  - 항상 public 이다.
2. 타입 별칭(Type Alias)
  > 유니언 타입  
  > - 자바스크립트의 OR 연산자(||)와 같이 'A' 이거나 'B'이다 라는 의미의 타입이다.
  > ```js
  > function logText(text: string | number) {
  >   // ...
  > }
  > ```
  > - 위 함수의 파라미터 text에는 문자열 타입이나 숫자 타입이 모두 올 수 있다.
  > - | 연산자를 이용하여 타입을 여러 개 연결하는 방식을 유니온 타입 정의 방식이라고 부른다.

### type VS enum
- type 
  - 컴파일 타임에 이 값이 들어가는지 안 들어가는지, 그런 코드가 있는지를 확인하는 용도이다.
  - 함수도 타입을 명시할 수있다.
- enum 
  - 실제 데이터, 컴파일 타임이 아니라 런타임에 확인한다.

### Type Alias의 Intersection Type
- 여러 타입을 모두 만족하는 하나의 타입을 말한다.
- & 연산자로 '열거된 여러 타입을 모두 만족하는(모든 속성을 가진) 새로운 타입'이라고 할 수 있다.
```ts
type Day = {
  month: string;
  date: number;
  dayOfWeek: string;
};

type Weather = {
  sunny: boolean;
  rainny: boolean;
};

--->

type Today = Day & Weather;

const now: Today = {
  month: 'June',
  date: 18,
  dayOfWeek: 'Fri',
  sunny: false,
  rainny: true,
};
// Today는 Day와 Weather이 지닌 모든 프로퍼티가 포함된 타입이 된다.
```

### 함수를 규격 정의 할 때
- Type Alias로 함수를 규격 정의할 때 함수 인자와 리턴 값 사이에 애로우 마크를 표시한다.
```ts
export type FooFunction = () => string
```
- 브레이스로 함수를 규격 정의 할 때는 애로우를 쓰지 않고 콜론을 쓴다.
```ts
export type TGetApi = {
 (ur:string, search?: string): Promise<string>
}
```
- 함수 규격을 함수에 적용할 때는 항상 함수 정의문이 아니라 함수 표현식을 써야된다.

### 차이점
- 인터페이스
  - 구체적인 행위까지 포함된 객체를 디자인 할 때 사용한다.
  - 데이터를 포괄하는 객체를 묘사하는 경우 사용한다.
  - 클래스를 묘사할 때는 클래스 자체가 데이터와 행위를 포괗하기 때문에 인터페이스를 쓰는게 더 자연스럽다.
- Type Alias
  - 구체적인 어떤 타입을 명시하는 것이 가능하다.
  - 데이터를 표현할 때 사용한다.
