# Storage

- 웹 스토리지에는 1. 로컬 스토리지와 2. 세션 스토리지가 있습니다.  
  - 데이터가 어떤 범위 내에서 얼마나 오래 보존되느냐에 있습니다.
  - key, value로 이루어진 데이터를 저장할 수 있습니다.

1. 세션 스토리지 (localStorage)
  - 웹페이지의 세션이 끝날 때 저장된 데이터가 지워진다.
  - 브라우저에서 같은 웹사이트를 여러 탭이나 창에 띄우면 여러 개의 세션 스토리지에 데이터가 서로 격리되어 저장되며, 각 탭이나 창이 닫힐 때 저장해 둔 데이터도 함께 소멸합니다.
2. 로컬 스토리지 (sessionStorage)
  - 웹페이지의 세션이 끝나더라도 데이터가 지워지지 않는다.
  - 여러 탭이나 창 간에 데이터가 서로 공유되며 탭이나 창을 닫아도 데이터는 브라우저에 그대로 남아 있습니다.

```JS
const user = {
  name: 'BEOM',
  age: 31,
  emails: [
    'thesecon@gmail.com,
    'neo@zillinks.com
  ]
}

localStorage.setItem('user', JSON.stringify(user));

console.log(JSON.parse(locatStorage.getItem('user)));

localStorage.removeItem('user');
```