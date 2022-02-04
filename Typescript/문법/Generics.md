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

// 사용
helloBasic<string, number>("Mark", 39); // <>에 넣고 사용하면 뒤에가 제한, 안넣으면 T가 추론됨.
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