## MongoDB의 CRUD

<img src="../../Img/MongoDB의CRUD.png" width="800px" height="500px">

## 컬렉션 명령어

1. 생성

```js
// db.createCollection( name [, options] )
// name 은 Collection 의 이름을 지정하는 인자이고, options 는 Collection 의 설정을 변경해주는 인자

db.createCollection('book')

db.createCollection('book', {
  capped: true,
  size: 6142800,
  max: 10000,
})
```

- options

| Field   |   Type   | 설명                                                                                                                                            |
| ------- | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| capped  | Boolean  | boolean타입, true로 설정 시 활성화, capped collection이란 고정된 크기(fixed size)를 가진 컬렉션, 사이즈가 초과시 가장 오래된 데이터를 덮어쓴다. |
| size    |  number  | capped가 true일 경우 필수로 설정 해야되는 값이며, 해당 컬렉션의 최대사이즈(단위:byte)                                                           |
| max     | number   | 해당 컬렉션에 추가 할 수 있는 최대 document 갯수                                                                                                |

2. 삭제

```js
db.book.drop()
// test데이터베이스의 book이라는 collection을 제거
// 제거전에는 필수로 use database를 이용하여 현재 데이터베이스를 설정 해야된다
```
