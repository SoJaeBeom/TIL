## Web Storage
- HTML5부터 제공하는 기능으로, 해당 도메인과 관련된 특정 데이터를 서버가 아니라 클라이언트 웹브라우저에 저장할 수 있도록 제공하는 기능이다.
- 쿠키(cookie)와 비슷한 기능이다. 
- 키/값 쌍으로 데이터를 저장하고, 키를 기반으로 데이터를 조회하는 패턴이다. 
- 영구저장소(LocalStorage)와 임시저장소(SessionStorage)를 따로 두어 데이터의 지속성을 구분할 수 있다.
> 쿠키(cookie)  
서버와 클라이언트 간의 지속적인 데이터 교환을 위해 만들어진 key - value 형식의 저장소

### 영구저장소(LocalStorage)
- 브라우저를 종료해도 데이터를 보관한다.
- 도메인만 같으면 전역적으로 데이터가 공유된다.

### 임시저장소(SessionStorage)
- 브라우저가 종료되면 데이터가 삭제된다.
- 도메인이 같더라도 브라우저가 다르면(탭 브라우저, 다른 브라우저) 브라우저 컨택스트가 다르기 때문에 각각의 세션 스토리지가 형성되어 데이터 공유가 되지 않는다.

### 쿠키를 이용한 데이터 저장 방식과의 차이
- 웹 스토리지 객체는 네트워크 요청 시 서버로 전송되지 않아 쿠키보다 더 많은 자료를 보관할 수 있어 대부분의 브라우저가 최소 2MB 혹은 그 이상의 웹 스토리지 객체를 저장할 수 있도록 해준다. 
- 개발자가 브라우저 내 웹 스토리지 구성 방식을 설정할 수 있다.
- 쿠키와 또 다른 점은 서버가 HTTP 헤더를 통해 스토리지 객체를 조작할 수 없다는 것이다.
- 웹 스토리지 객체 조작은 모두 자바스크립트 내에서만 수행 된다.
- 웹 스토리지 객체는 도메인·프로토콜·포트로 정의되는 오리진(origin)에 묶여있어 프로토콜과 서브 도메인이 다르면 데이터에 접근할 수 없다.

### 사용 방법
- 각각 localStorage / sessionStorage 프로퍼티로 접근이 가능합니다. 
- 두 메소드의 프로퍼티만 다르고 호출 메소드의 조작방법은 동일하다.

1. 데이터 저장
```js
window.localStorage.colorSetting = '#a4509b';
window.localStorage['colorSetting'] = '#a4509b';
window.localStorage.setItem('colorSetting', '#a4509b');
```
2. 데이터 가져오기
```js
var color = window.localStorage.colorSetting;
var color = window.localStorage['colorSetting'];
var color = window.localStorage.getItem('colorSetting');
```
3. 데이터 삭제하기
```js
//특정 데이터만 삭제
window.localStorage.removeItem('colorSetting');

//전체 삭제
window.localStorage.clear();

```