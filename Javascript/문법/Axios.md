## Axios

- 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리다.
- 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 사용한다.

### axios vs fetch

- axios는 별도의 설치가 필요하다는 단점이 있다.
- axios는 fetch보다 많은 기능을 지원한다.
- axios는 fetch보다 문법이 조금이나마 간소화된다.
- 간단하게 사용할때는 fetch, 확장성을 염두해봤을 땐 axios를 쓰면 좋다.

### axios 문법 구성

```js
axios({
  url: "https://test/api/cafe/list/today", // 통신할 웹문서
  method: "GET", // 통신할 방식
  data: {
    // 인자로 보낼 데이터
    foo: "diary",
  },
});
```

1. axios 요청(request) 파라미터 옵션

- method : 요청방식. (get이 디폴트)
- url : 서버 주소
- headers : 요청 헤더
- data : 요청 방식이 'PUT', 'POST', 'PATCH' 해당하는 경우 body에 보내는 데이터
- params : URL 파라미터 ( ?key=value 로 요청하는 url get방식을 객체로 표현한 것)
- responseType : 서버가 응답해주는 데이터의 타입 지정 (arraybuffer, documetn, json, text, stream, blob)
- withCredentials : cross-site access-control 요청을 허용 유무. 이를 true로 하면 cross-origin으로 쿠키값을 전달 할 수 있다.

```js
/* axios 파라미터 문법 예시 */

axios({
    method: "get", // 통신 방식
    url: "www.naver.com", // 서버
    headers: {'X-Requested-With': 'XMLHttpRequest'} // 요청 헤더 설정
    params: { api_key: "1234", langualge: "en" }, // ?파라미터를 전달
    responseType: 'json', // default

    maxContentLength: 2000, // http 응답 내용의 max 사이즈
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    }, // HTTP응답 상태 코드에 대해 promise의 반환 값이 resolve 또는 reject 할지 지정
    proxy: {
      host: '127.0.0.1',
      port: 9000,
      auth: {
        username: 'hahahoho',
        password: 'haha1234'
      }
    }, // proxy서버의 hostname과 port를 정의
    maxRedirects: 5, // node.js에서 사용되는 리다이렉트 최대치를 지정
    httpsAgent: new https.Agent({ keepAlive: true }), // node.js에서 https를 요청을 할때 사용자 정의 agent를 정의
})
.then(function (response) {
    // response Action
});

```

2. axios 응답(response) 데이터

- axios를 통해 요청을 서버에게 보내면, 서버에서 처리를하고 다시 데이터를 클라이언트에 응답 하게 된다.
- .then으로 함수인자로(response)로 받아 객체에 담진 데이터가 바로 응답 데이터이다.

```js
axios({
    method: "get", // 통신 방식
    url: "www.naver.com", // 서버
})
.then(function(response) {
  console.log(response.data)
  console.log(response.status)
  console.log(response.statusText)
  console.log(response.headers)
  console.log(response.config)
})
//

response.data: {}, // 서버가 제공한 응답(데이터)

response.status: 200, // `status`는 서버 응답의 HTTP 상태 코드

response.statusText: 'OK',  // `statusText`는 서버 응답으로 부터의 HTTP 상태 메시지

response.headers: {},  // `headers` 서버가 응답 한 헤더는 모든 헤더 이름이 소문자로 제공

response.config: {}, // `config`는 요청에 대해 `axios`에 설정된 구성(config)

response.request: {}
// `request`는 응답을 생성한 요청
// 브라우저: XMLHttpRequest 인스턴스
// Node.js: ClientRequest 인스턴스(리디렉션)
```

3. axios 단축 메소드

- axios를 편리하게 사용하기 위해 모든 요청 메소드는 aliases가 제공된다. (함수형으로 재구성하여 나눠논 것으로 이해하면 된다.)

```js
axios.request(config)

axios.get(url[, config]) // GET

axios.delete(url[, config]) // DELETE

axios.head(url[, config])

axios.options(url[, config])

axios.post(url[, data[, config]]) // POST

axios.put(url[, data[, config]]) // PUT

axios.patch(url[, data[, config]])
```

### axios GET

- 단순 데이터(페이지 요청, 지정된 요청) 요청을 수행할 경우
- 파라미터 데이터를 포함시키는 경우(사용자 번호에 따른 조회)

```js
// Case1 : user에게 할당된 id 값과 함께 요청을 한다.
axios
  .get("/user?ID=12345")
  .then(function (response) {
    // 성공했을 때
    console.log(response);
  })
  .catch(function (error) {
    // 에러가 났을 때
    console.log(error);
  })
  .finally(function () {
    // 항상 실행되는 함수
  });

// Case2 : 옵션을 주고자 할 때는 이렇게 요청을 한다.
axios
  .get("/user", {
    params: {
      ID: 12345,
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Case3 : async/await 를 쓰고 싶다면 async 함수/메소드를 만든다.
async function getUser() {
  try {
    const response = await axios.get("/user?ID=12345");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

### axios POST

- 데이터를 Message Body에 포함시켜 보낸다.
- get 메서드에서 params를 사용한 경우와 비슷하게 수행된다.

```js
axios
  .post("url", {
    firstName: "ho",
    lastName: "hoho",
  })
  .then(function (response) {
    // response
  })
  .catch(function (error) {
    // 오류발생시 실행
  });
```

### axios DELETE

- delete 메서드에는 일반적으로 body가 비어있다.
- REST 기반 API 프로그램에서 데이터베이스에 저장되어 있는 내용을 삭제하는 목적으로 사용한다.
- query나 params가 많아져서 헤더에 많은 정보를 담을 수 없을 때는 두번째 인자에 data를 추가해줄 수 있다.

```js
// Case1
axios
  .delete("/user?ID=12345")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

// Case2
axios
  .delete("/user?ID=12345", {
    data: {
      post_id: 1,
      comment_id: 13,
      username: "foo",
    },
  })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
```

### axios PUT

- REST 기반 API 프로그램에서 데이터베이스에 저장되어 있는 내용을 갱신(수정)하는 목적으로 사용된다.
- 서버에 있는 데이터베이스의 내용을 변경하는 것을 주 목적으로 하고 있다.
- 서버 내부적으로 GET -> POST 과정을 거치기 때문에 POST 메서드와 비슷한 형태이다.

```js
axios
  .put("url", {
    username: "",
    password: "",
  })
  .then(function (response) {
    // response
  })
  .catch(function (error) {
    // 오류발생시 실행
  });
```
