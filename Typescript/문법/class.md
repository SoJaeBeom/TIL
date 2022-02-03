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
7. Index Signatures in class
- property가 고정된 것이 아닌 동적으로 바뀌는 상황에서 고려해볼 만한 부분.
```ts
// class => object를 만들어내는 청사진
// {mark: 'male', jade: 'male'}
// {chloe: 'female', alex: 'male', anna: 'female'}

class Students {
    // mark: string = 'male';
    [index: string]: 'male' | 'female'; // string, 항상 male or female로 설정.

    mark: "male" = "male";
}

const a = new Students();
a.mark = "male";
a.jade = "male";

console.log(a);

const b = new Students();
b.chloe = "female";
b.alex = "male"
b.anna = "female";

console.log(b)
```

8. Static Properites & Methods
```ts
class Person {
    public static CITY = "Seoul";
    public hello() {
        console.log("안녕하세요!", Person.CITY);
    }
    public change() {
        Person.CITY = "LA";
    }
}

const p1 = new Person();
p1.hello(); // 안녕하세요 Seoul

const p2 = new Person();
p2.hello(); // 안녕하세요 Seoul
p1.change(); // 'LA로 변경'
p2.hello(); // 안녕하세요 LA

// static : 공통적으로 사용할 부분들.
// Person.hello();
// Person.CITY;
```
9. Singletons
- 어플리케이션이 실행되는 중간에 클래스로부터 단 하나의 오브젝트만 생성해서 실행하는 패턴이다.
```ts
class ClassName {
    private static instance: ClassName | null = null;
    // private로 new로 직접 생성할 수 없도록 막음.
    public static getInstance(): ClassName {
        // ClassName 으로부터 만든 Object가 있으면 그걸 리턴
        // 없으면, 만들어서 리턴.
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }

        return ClassName.instance;
    }
    private constructor() {} 
}

const a = ClassName.getInstance();
const b = ClassName.getInstance();

console.log(a === b); // true (같은 object)
```
10. 상속
- 클래스가 다른 클래스를 가져다가 자신만의 기능을 추가해서 사용하는 것이다.
```ts
class Parent {
    // protected : 외부에서는 사용 불가하지만 상속하면 사용 가능.
    constructor(protected _name: string, private _age: number) {}

    public print(): void {
        console.log(`이름은 ${this._name}이고, 나이는 ${this._age} 입니다.`)
    }

    protected printName(): void {
        console.log(this._name, this._age)
    }
}

// const p = new Parent("Mark", 39);
// p.print(); // 이름은 Mark이고, 나이는 39입니다.

class Child extends Parent {
    // Parnet의 생성자를 그대로 가져옴.
    public gender = 'male';
    // override (접근제어자 까지도 됨.)
    // public _name = "Mark Jr.";
    // 생성자 ovveride
    constructor(age:number) {
        // parent의 생성자를 꼭 호출해야함 (중요!)
        super('Mark Jr.', age)
        // 자식의 생성자에서는 무조건 super 먼저 호출
        this.printName();
    }
}

// 부모 생성자대로 호출해야함.
const c = new Child(1);
c.print()
// Mark Jr. 1
// 이름은 Mark Jr.이고, 나이는 1 입니다.

// 애플리케이션이 복잡해지면 부모와 자식의 영역에서 각각 할 수 있는 것을 계획하고 구분하는 것이 중요.
```
11. Abstract Classes
- 완전하지 않은 객체를 상속을 통해서 완전하게 하여 사용한다.
```ts
abstract class AbstractPerson {
    protected _name: string = 'Mark';

    abstract setName(name: string): void;
}

// new AbstractPerson() (x)

class Person extends AbstractPerson {
    setName(name: string): void {
        this._name = name;
    }
}

const p = new Person();
// p.setName();
```