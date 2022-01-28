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
