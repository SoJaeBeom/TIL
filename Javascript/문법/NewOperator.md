# New Operator

### The Four Rules

- when you use 'new'
  - create empty object
  - It binds `this` to our newly created object.
  - It adds a property onto our newly created object called "**proto**" which points to the constructor function’s prototype object.
  - It adds a `return this` to the end of the function, so that the object that is created is returned from the function.

### Wait, What?

```js
function Student(name, age) {
  this.name = name;
  this.age = age;
}

let first = new Student('John', 26);
```

- A new object is created -> first object
- this는 first object에 바인딩된다.
- "**proto**"가 추가되고 first.proto는 Student.prototype을 가리킨다.

### Prototypes

- 모든 JS 객체는 프로토타입이 있다.
- 모든 객체는 프로토타입에서 메소드와 속성을 상속받는다.

```js
i)
second.__proto__ === Student.prototype;

ii)
Student.prototype.constructor;

//  function Student(name, age) {
//    this.name = name;
//    this.age = age;
//  }
```

- Student 생성자 함수에는 .prototype이라는 속성이 있다.
- 프로토타입에는 생성자 함수를 다시 가리키는 .constructor라는 객체가 있다.
- new 연산자를 사용하여 새 객체를 만들면 객체에는 Student.prototype에 다시 연결하는 "**proto**" 속성이 있다.
  ![[스크린샷 2023-11-25 20.34.31.png]]
- 프로토타입 객체는 생성자 함수로 생성된 모든 객체에서 공유된다.
- 모든 객체가 사용할 수 있는 함수와 속성을 프로토타입에 추가할 수 있다.

```js
Student.prototype.sayInfo = function () {
  console.log(this.name + ' is ' + this.age + ' years old');
};

var third = new Student('Tracy', 15);
// Now if we log third out, we see the object only has two
// properties, age and name. Yet, we still have access to the
// sayInfo function:

third;
// Student {name: "Tracy", age: 15}

third.sayInfo();
// Tracy is 15 years old
```

- 상속 때문에 동작한다.
- 객체를 생성하고 속성이 있는지 확인 후 없으면 상위 객체의 프로토타입으로 이동하여 속성을 찾는다.
  - 프로토타입 체인
- Object.prototype에 JS 내장 메소드가 있다.

### Conclusion

- 프로토타입을 사용하면 여러 객체에 동일한 코드 조각을 공유할 수 있다.
