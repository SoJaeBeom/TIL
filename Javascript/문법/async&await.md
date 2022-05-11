## async & await
- Promise 코드
```js
function p() {
	return new Promise((resolve, reject) => {
	   resolve('hello'); 
       // or reject(new Error('error');
	});
}

p().then((n) => console.log(n));
```
- 똑같은 기능을 하는 async 코드
```js
async function p2(){ // async을 지정해주면 Promise를 리턴하는 함수로 만들어준다.
    return 'hello2'; // 리턴값은 Promise{<resolved>: "hello2"} 자동 resolve해준다는걸 알 수있다.
    // reject는 throw 에러를 날리면 된다.
}

p2().then((n) => console.log(n));
```
- 함수에 async만 붙이면 자동 Promise객체로 인식되고 return값은 resolve()값과 똑같다.
- return을 문자열로 했다고해서 일반 함수처럼 정말 문자열이 리턴되는 것은 아니다.
- 앞서 Promise를 리턴하게 해주는 지정자가 async라고 했다.
- 그래서 리턴값은 Promise{`<resolved>`: "hello2"}

```js
async function p2(){ // async을 지정해주면 Promise를 리턴하는 함수로 만들어준다.
    //return 'hello2';
    return Promise.resolve('hello2'); // 똑같다
    // return Promise.reject('hello2');
}
```
### 사용 방법
- function 키워드 앞에 async만 붙여주면 되고 비동기로 처리되는 부분 앞에 await만 붙여주면 된다.
- async가 붙은 함수는 프라미스를 반환하고, 프라미스가 아닌 것은 프라미스로 감싸 반환한다.
- await 키워드를 만나면 프라미스가 처리(settled)될 때까지 기다린다.
- 프라미스가 처리가 완료되어 resolve(값) 되면 값만 따로 추출해서 리턴한다.
- await는 promise.then보다 좀 더 세련되게 프라미스의 result 값을 얻을 수 있다.
- promise.then보다 가독성 좋고 쓰기도 쉽다.

> 비동기는 Promise객체로 처리하고 async/await는 비동기를 동기식으로 처리하는 기법이다. </br>
> 기존에는 Promise에 직접 .then()을 통해 동기처리를 했지만, await를 사용하면 바로 동기처리가 되기 때문이다.

```js
async function f() {
    let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
    });

    let result = await promise; // 원래라면, promise.then(()=>{})을 통해 비동기를 받아야하지만
                                // await 키워드로 직관적 이어졌다.
    alert(result); // "완료!"
}

f();
```

```js
async function p2(){ // async을 지정해주면 Promise를 리턴하는 함수로 만들어준다.
    let result = await Promise.resolve("hello"); // 프라미스 객체의 then결과를 바로 받는다.
    return result;
}

p2(); // hello
```

### async/await 와 promise.then
- async/await을 사용하면 await가 대기를 처리해주기 때문에 .then이 거의 필요하지 않다.
- promise.catch 대신 일반 try..catch를 사용할 수 있다.
- promise.then을 사용하는 것보다 async/await를 사용하는 것이 대개는 더 편리하다.

- ​문법 제약 때문에 async함수 바깥의 최상위 레벨 코드에선 await를 사용할 수 없다.
- .then/catch를 추가해 최종 결과나 처리되지 못한 에러를 다룬다.