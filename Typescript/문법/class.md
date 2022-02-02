## Class

1. class란
- object를 만드는 blueprint다.
- 클래스 이전에 object를 만드는 기본적인 방법은 function 이다.
- JavaScript에도 class는 es6부터 사용 가능하다.
- OOP을 위한 초석이다.
- TypeScript에서는 클래스도 사용자가 만드는 타입의 하나다.

2. 생성자와 초기화
- 생성자 함수가 없으면, 디폴트 생성자가 불린다.
- 프로그래머가 만든 생성자가 하나라도 있으면 , 디폴트 생성자는 사라진다.
- strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 한다.
- 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 !를 붙여서 위험을 표현한다.
- 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined 이다.
- 생성자에는 async를 설정할 수 없다.
```ts
// class 이름은 대문자로 시작.
class Person {
    // tsconfig.json : "strict" = true.
    // "strictNullChecks": true, 
    // "strictPropertyInitialization": true, => age:number에 값이 할당된 게 없음(undefined)
    // 초기값을 설정해주지 않으면 오류발생.
    name: string = "Mark";
    age: number;
    // age!: number => 초기값을 지금 설정안하고 나중에 설정할 때 사용(주의)

    // async constructor (x)
    constructor(age?:number) {
        if (age === undefined) {
            this.age = 20;
        } else {
            this.age = age;
        }
    }

    // JS에서는 오버로딩이 안됨. TS에서는 가능.
}

const p1: Person = new Person(39);
// Perons이 async(비동기)라면 await p1.init();
const p2: Person = new Person(); // 이런 형태 두개 다 지원하려고 한다면 각각의 생성자 생성(오버로딩)
console.log(p1);
// p1.age = 39;
console.log(p1.age);
```

3. 접근 제어자
- 클래스 내 프로퍼티의 접근 가능성 설정.
- 접근 제어자에는 public, private, protected가 있다. (설정하지 않으면 public 이다.)
- 클래스 내부의 모든 곳에 (생성자, 프로퍼티, 메서드) 설정 가능하다.
- private 으로 설정하면 클래스 외부에서 접근할 수 없다.
- 자바스크립트에서 private 지원하지 않아 오랫동안 프로퍼티나 메서드 이름 앞에 _를 붙여서 표현했다.
```ts
// 접근제어자 public, private
class Person {
    public name: string = "Mark";
    // 과거에는 private가 없어서 _age 이런 식으로 이름에 표기를 해둠
    // 아직도 관행이 남아서 private는 _를 붙여줌.
    private age: number;

    public constructor(age?:number) {
        if (age === undefined) {
            this.age = 20;
        } else {
            this.age = age;
        }
    }

    public async init() {

    }
}

const p1: Person = new Person(39);
console.log(p1);
```

4. 생성자 매개변수의 초기화
```ts
// 생성자의 파라미터를 받아서 그 클래스의 프로퍼티로 초기화 하는 방법.
// 파라미터에 public을 붙여줌.
class Person {
    public constructor(public name: string, private age: number) {  // age는 외부에서 접근 불가.
    }
}

const p1: Person = new Person("Mark", 39);
console.log(p1);
```

5. Getters & Setters
```ts
class Person {
    public constructor(private _name: string, private age: number) {
    }
    // 얻어오기.
    get name() {
        // return 필수.
        // console.log('get');
        return this._name + "Lee";
    }
    // 변경하기.
    set name(n:string) {
        // 인자 필수
        // console.log('set');
        // count해서 몇번 set 되었는지 활용할 수 도 있음.
        this._name = n;
    }
}

const p1: Person = new Person("Mark", 39);
console.log(p1.name); // Get, get을 하는 함수 : getter
p1.name = 'Woongjae'; // Set, set을 하는 함수 : setter
console.log(p1.name);
```

6. readonly properties
- set은 할 수 없고 get만 할 수 있는 method다.
- readonly : 수정불가능하게 막아 놓을 때 사용한다.
```ts
class Person {
    public readonly name: string = 'Mark';
    private readonly country: string;
    public constructor(private _name: string, private age: number) {
        // constructor 안에서만 this로 값 세팅 가능.
        this.country = "Korea";
    }

    hello() {
        // readonly이고 private이므로 수정 불가.
        // this.country = "China";
    }
}

const p1: Person = new Person("Mark", 39);
console.log(p1.name); // Get, get을 하는 함수 : getter
// p1.name = 'Woongjae'; // Set, set을 하는 함수 : setter
console.log(p1.name);

```
