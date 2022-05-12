## Callback함수
### 동기와 비동기
- 동기 
  - 하나의 요청이 오면 완료가 된 후 다음 요청을 실행하는 방식이다.
  - 순차적으로 로직이 수행되므로 흐름을 쉽게 예측할 수 있다.
- 비동기
  - 어떤 요청이 오면 완료가 되기 전에 다음 요청을 실행하는 방식이다.
  - 여러 작업을 동시에 효율적으로 처리할 수 있는 반면에 즉시 응답을 못받기 때문에 적절히 처리가 되지 않으면 예상 밖의 결과가 나올 수 있다.

### 콜백 함수 사용 목적
- 비동기 방식으로 작성된 함수를 동기 처리 하기 위해 사용한다.
- 비동기 처리를 기본으로 하면서도 일부 구간에서 순차적인 처리가 필요할 수도 있기 때문이다.
- 독립적으로 수행되는 작업도 있는 반면 응답을 받은 이후 처리되어야 하는 종속적인 작업도 있을 수 있으므로 그에 대한 대응 방법이다.

### 콜백 함수 형태
```js
function func(param1, param2, callbackFunc) {
  // ... 처리 내용 작성
  callbackFunc(result);
}
```
- 보통 함수를 선언한 뒤에 함수 타입 파라미터를 맨 마지막에 하나 더 선언해 주는 방식으로 정의한다.
- 처리가 끝나면 파라미터로 전달 받은 함수를 실행한다.
- 필요한 경우 결과 값을 인자로 넘겨줄 수도 있다.

### 사용 원칙
1. 익명의 함수 사용
```js
let number = [1, 2, 3, 4, 5];
number.forEach(function(x) {
    console.log(x * 2);
});

```
- 콜백함수는 이름이 없는 '익명의 함수'를 사용한다.
- 함수의 내부에서 실행되기 때문에 이름을 붙이지 않아도 된다.

2. 함수의 이름(만) 넘기기
```js
function whatYourName(name, callback) {
    console.log('name: ', name);
    callback();
}
function finishFunc() {
    console.log('finish function');
}
whatYourName('miniddo', finishFunc);
/*
name: miniddo
finish function
*/
```
- 자바스크립트는 null과 undefined 타입을 제외하고 모든 것을 객체로 다룬다.
- 함수를 변수 or 다른 함수의 변수처럼 사용할 수 있다.
- 함수를 콜백함수로 사용할 경우, 함수의 이름만 넘겨주면 된다.
- 함수를 인자로 사용할 때 callback, finishFunc 처럼 () 를 붙일 필요가 없다는 것이다.

3. 전역변수, 지역변수 콜백함수의 파라미터로 전달 가능
```js
let fruit = 'apple'; // Global Variable
function callbackFunc(callback) {
    let vegetable = 'tomato'; // Local Variable
    callback(vegetable);
}
function eat(vegetable) {
    console.log(`fruit: ${fruit} / vegetable: ${vegetable}`);
}
callbackFunc(eat);
// fruit: apple / vegetable: tomato
```

### 주의 할 점
1. this를 사용한 콜백함수
```js
let userData = {
    signUp: '2020-10-06 15:00:00',
    id: 'minidoo',
    name: 'Not Set',
    setName: function(firstName, lastName) {
        this.name = firstName + ' ' + lastName;
    }
}
 
function getUserName(firstName, lastName, callback) {
    callback(firstName, lastName);
}
 
getUserName('PARK', 'MINIDDO', userData.setName);
 
console.log('1: ', userData.name); // Not Set
console.log('2: ', window.name); // PARK MINIDDO
```
- 첫 번째 콘솔의 값이 PAKR MINIDDO 이기를 기대했지만, Not Set이 출력된다.
- setName()에서 사용된 this 객체가 window라는 글로벌 객체를 가리키기 때문이다. (콜백은 기본적으로 call by value)
- 따라서 this를 보호할 수 있도록 콜백함수를 만들어야 한다.

해결 방안 : call()과 apply()를 사용하여 this를 보호할 수 있다.
```js
function getUserName(firstName, lastName, callback, obj) {
   callback.call(obj, firstName, lastName); // - (1)
}

getUserName('PARK', 'MINIDDO', userData.setName, userData); //	- (2)

console.log(userData.name);

<output>
PARK MINIDDO
```
( 2 ) 에서 마지막 인자에 담긴 userData 는 ( 1 )에서 call 함수의 첫번째 인자로 전달된다.
즉, call() 에 의해서 userData에 this 객체가 매핑된다.

apply() 도 인자를 배열로 전달한다는 점만 다르고 동일하게 작동한다.
```js
function getUserName(firstName, lastName, callback, obj) {
   callback.apply(obj, [firstName, lastName]); // 인자가 배열
}

getUserName('PARK', 'MINIDDO', userData.setName, userData);

console.log(userData.name);

<output>
PARK MINIDDO
```