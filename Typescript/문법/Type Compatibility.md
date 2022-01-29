## 서브타입 / 슈퍼타입  
- 공변성 : 같거나 서브타입인 경우, 할당이 가능함을 뜻한다.
```ts
// primitive type
let sub1: string = '';
let sup1: string | number = sub1;

// object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서프타입이어야 한다.
let sub2: { a: string; b: number } = { a: '', b: 1 };
let sup2: { a: string | number; b: number } = sub2;

// array - object 와 마찬가지
let sub3: Array<{ a: string; b: number}> = [{ a: '', b: 1 }];
let sup3: Array<{ a: string | number; b: number }> = sub3;
```

- 반병성 : 함수의 매개변수의 타입이 같거나 슈퍼타입인 경우, 할당이 가능함을 뜻한다.
```ts
class Person {}
class Developer extends Person {
  coding() {}
}
class StartupDeveloper extends Developer {
  burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

// Developer => Developer 에다가 Developer => Developer 를 할당하는 경우
tellme(function dToD(d: Developer): Developer {
  return new Developer();
});

// Developer => Developer 에다가 Person => Developer 를 할당하는 경우
tellme(function pToD(d: Person): Developer {
  return new Developer();
});

// 특수한 케이스
// Developer => Developer 에다가 StartipDeveloper => Developer 를 할당하는 경우
tellme(function sToD(d: StartupDeveloper): Developer {
  return new Developer();
});
```
- strictFunctionTypes 옵션을 켜면 함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우가 아닌 경우, 에러를 통해 경고한다.

