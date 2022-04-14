## Computed property
- 객체의 key값을 표현식(변수, 함수 등)을 통해 지정하는 문법이다.
- 기존의 대괄호 표기법은 객체가 선언된 후 나중에 프로퍼티를 추가할 때 사용했다.
- ES6에서는 computed property를 사용하여 객체를 선언하는 순간에도 변수를 활용하여 프로퍼티를 할당할 수 있다.
```js
var kk = "id";
 
var a = {
    name : "super",
    [kk] : 123
}
 
var mm = "rank";
a[mm] = '#1'; 
// {name: "super", id: 123, rank: "#1"}

/*
객체 프로퍼티에 접근할때 두가지 방법이 있다.
a.name -> "super"
a['name'] -> "super"
*/

/*
변수로 Key값을 지정해 주었을 때 접근하는 방법은 3가지 가능하다.
a[kk] -> 123
a['id'] -> 123
a.id -> 123
*/

/*
객체에 새로운 프로퍼티를 추가할때 변수 Key값으로 지정해서 줄때 배열처럼 주면 된다.
var mm = "rank";
a[mm] = '#1';
a[mm] -> '#1'
a.rank -> '#1'
*/
```
- 함수도 올 수 있다.
```js
function func1(a, b) {
  return a + b;
}
 
function func2() {
  return 'hello';
}
 
let obj = {
  [`key${func1(5,8)}`] : 'result is 13',
  [func2()] : 'hi'
}
 
// obj = {
//   key13 : 'value is 13',
//   hello: 'hi'
// }

// 당연히 객체 value에는 문자열이 오든 넘버가 오든 배열이 오든 객체가 오든 변수가 오든 모두 올 수 있다.
```