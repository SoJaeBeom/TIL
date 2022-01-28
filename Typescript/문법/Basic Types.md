## Basic Types
1. TypeScript  
Static Types -> set during development  

2. JavaScript  
Dynamic Types -> resolved at runtime 

### Primitive Type
- 오브젝트와 레퍼런스 형태가 아닌 실제 값을저장하는 자료형이다.
- literal 값으로 primitive 타입의 서브타입을 나타낼 수 있다.
- 또는 래퍼 객체로 만들 수 있다.  
(new Boolean(false), new String('world'), new Number(42))

### Type Casing
- TypeScript의 핵심 Primitive types은 모두 소문자이다.
- Number, String, Boolean, Symbol 또는 Object 유형은 Primitive types를 나타내지 않는다.

1. boolean
2. number
3. string
4. template string
  - 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
  - backtick(=backquote) 기호에 둘러쌓여 있다.
  - 포함된 표현식은 ${expr} 와 같은 형태로 사용한다.
5. symbol
  - new Symbol로 사용할 수 없다.
  - Symbol을 함수로 사용해서 symbol 타입을 만들어 낼 수 있다.
  - primitive type의 값을 담아서 사용한다.
  - 고유하고 수정 불가능한 값으로 만들어 준다.
  - 접근을 제어하는데 쓰는 경우가 많다.
6. null & undefined

### Non-Primitive Type
1. object
2. array
3. tuple
  - 배열인데 타입이 한가지가 아닌 경우
    ```ts
    let x: [string, number];
    x = ["hello", 10];
    ```
4. any
  - 어떤 타입이어도 상관없는 타입이다.
  - 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문이다.
  - 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션이 있다. -> nolmplicitAny
5. unknown
  - any와 짝으로 any보다 Type-safe한 타입이다.
  - any와 같이 아무거나 할당할 수 있다.
  - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
6. never
  - 리턴에 사용된다.
  - 잘몬된 타입을 넣는 실수를 막고자 할 때 사용한다.
    ```ts
    type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
    ```
7. void
  - 어떤 타입도 가지지 않는 빈 상태를 의미한다.
  - 값은 겂고 타입만 있다.
  - 할당이 가능한 값은 undefined이다.
  
