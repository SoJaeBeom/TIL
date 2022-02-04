## Generics
1. Generics, Any와 다른점
- any : 모든 것을 받아서 모든 것을 주는 것이다.
(들어오는 input에 의해서 달라지는 타입핑을 할 수 없다.)

- Generics : 타입으로 된 로직, 연산이 함수 내에서 가능해 진다.
```ts
function helloString(message: string): string {
    return message;
}

function helloNumber(message: number): number {
    return message;
}

// 더 많은 반복된 함수들...
// 모든 타입으로 받거나 리턴할 수 있도록 하려면?

function hello(message: any): any {
    return message;
}

// 어떤 것도 들어올 수 있으므로 any로 인식함.
console.log(hello('Mark').length);
console.log(hello(39).length); // 컴파일 타임에는 문제가 없지만 런타임에서 문제 발생.

// generic
function helloGeneric<T>(message: T): T {
    return message;
}

console.log(helloGeneric('Mark')); // string > length 하면 타입을 추론함.
console.log(helloGeneric(39));
console.log(helloGeneric(true));
```

2. Generics Basic
```ts
function helloBasic<T, U>(message: T, comment: U): T {
    return message;
}

직접 지정할때 -> 지정된 타입으로 체크
지정하지 않으면 -> 

// 사용
helloBasic<string, number>("Mark", 39); // <>에 직접 넣어 지정하면 지정된 타입으로 체크.
helloBasic(36, 39); // 지정하지 않으면 각각 추론.
```

3. Generics Array & Tuple
```ts
function helloArray<T>(message: T[]): T {
    return message[0];
}

// 사용
helloArray(['Hello', "World"]);
helloArray(["Hello", 5]);

// 배열은 배열, 튜플은 튜플로 지정해야 함.
function helloTuple<T, K>(message: [T, K]): T {
    return message[0];
}

helloTuple(['Hello', 'world']);
helloTuple(['Hello', 5]);
```

4. Generics Function
```ts
// 함수의 타입 설정

type HelloFunctionGeneric1 = <T>(message: T) => T;

const HelloFunctionGeneric1: HelloFunctionGeneric1 = <T>(message: T) => {
    return message;
};


interface HelloFunctionGeneric2 {
    <T>(message: T): T;
}

const helloFunction2 : HelloFunctionGeneric2 = <T>(message: T) => {
    return message;
};

// 기본 함수 선언에 generic 부분 추가해주는 형식.
```

5. Generics Class
```ts
class Person<T, K> {
    private _name: T; // T의 유효범위는 클래스 전체 범위 안.
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}

new Person("Mark", 39);
// new Person<string>(39); // string이 아니라서 오류 발생.
// new Person<string, number>("Mark", "age"); // number 자리에 문자열이라서 오류

// 컴파일 타임의 에러를 미리 체크해서 처리하는 역할을 수행하여 유용.
```

6. Generics with extends
- extends ⇒ generic에서는 기존 상속의 의미와 조금 다르다.
```ts
class PersonExtends<T extends string | number> { // T는 string과 number만 가능하도록 제한.
    private _name: T;

    constructor(name: T) {
        this._name = name;
    }
}

new PersonExtends("Mark");
new PersonExtends(39);
// new PersonExtends(true); // 타입은 항상 가장 작은 범위로 제한 해주기.
// 제한을 통해 이 코드의 제 3자에게 올바른 가이드라인 제공.
```

7. keyof & type lookup system
- type을 적절히 찾아내고 활용하는 시스템.(컴파일 타임의 타입을 정확하게 찾아낼 수 있는 방법)
```ts
interface IPerson {
    name: string;
    age: number;
}

const person: IPerson = {
    name: 'Mark',
    age: 39,
};

type Keys = keyof IPerson;

const keys: Keys = "name";

// 프로퍼티의 값을 가져오거나 활용할 수 있는 함수

// IPerson[keyof IPerson] 
// => IPerson["name" | "age"] 
// => IPerson["name"] | IPerson["age"] 
// => string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

getProp(person, 'age');

function setProp<T, K extends keyof T>(
    obj: T, 
    key: keyof T,
    value: T[keyof T],
): void {
    obj[key] = value;
}

setProp(person, "name", "Anna");
```