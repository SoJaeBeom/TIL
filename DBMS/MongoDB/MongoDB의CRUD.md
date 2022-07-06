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

## 다큐먼트 명령어

1. 삽입 (insert)

- insert
  - 단일 또는 다수의 Document를 입력할 때 사용한다.
  - 만일 컬렉션이 존재하지 않는다면 자동으로 생성재주고 insert해준다.
- insertOne
  - 단일 Document를 입력할 때 사용한다.
- insertMany
  - 다수의 Document를 입력할 때 사용한다.

```js
db.book.insert({ name: 'abc' }) // 여러개를 넣을때는 배열로 묶는다.db.book.insert([     {"name":"abc"},     {"name":"def"} ])

db.book.insert({
  name: 'A',
  hits: 100,
  auther: [{ name: 'park' }, { name: 'lee' }],
})

db.book.insert({ name: 'B', hits: 50, auther: [{ name: 'kim' }] })

db.book.insert({
  name: 'C',
  hits: 30,
  auther: [{ name: 'kim' }, { name: 'choi' }],
})
```

2. 조회 (find)

```js
// Document 리스트를 확인
db.books.find()

// 다큐먼트를 좀더 깔끔하게 보여준다.
db.book.find().pretty()

// name이 A인 document을 조회한다.
db.book.find({ name: 'A' }).pretty()

// 단 하나만 찾고 싶을 때 사용. find(...)[0]과도 같다.
// find 메소드로 찾은 것 중에 첫 번째 것을 선택
db.monsters.findOne({ name: 'Slime' })
```

- 논리 연산자

```js
{ 필드: { $gt: 값 } } // 필드 > 값
{ 필드: { $lt: 값 } } // 필드 < 값
{ 필드: { $gte: 값 } } // 필드 >= 값
{ 필드: { $lte: 값 } } // 필드 <= 값

{ 필드: { $eq: 값 } } // 필드 == 값
{ 필드: { $ne: 값 } } // 필드 != 값

{ 필드: { $in: [ 값1, 값2, 값3, ... ] } // 필드 == (값1 or 값2 or 값3)
{ 필드: { $nin: [ 값1, 값2, 값3, ... ] } // 필드 != (값1 and 값2 and 값3)
```

```js
// 조건1 or 조건2
{ $or: [ { 조건1 }, { 조건2 }, ... ] }

// 조건이 간단하면 그냥 { 필드: 값, 필드: 값 } 이렇게 $and가 없어도 되지만, 여러 논리연산자를 겹쳐 쓸 경우 $and가 필요하다.
// (조건1 or 조건2) and (조건3 or 조건4)
{ $and: [
  { $or: [{ 조건1 }, { 조건2 }] },
  { $or: [{ 조건3 }, { 조건4 }] }
] }


// 조건1, 조건2 ... 모두 만족하지 않는 다큐먼트
{ $nor: [{ 조건1 }, { 조건2 }, ...] }

// 조건이 아닌값.  $nor의 단일 버전
{ $not: { 조건 } }
```

```js
// name이 Slime 그리고 hp가 25인 다큐먼트. 둘다 일치
db.monsters.find({
  name: 'Slime',
  hp: 25,
}) // 하나의 객체에 두개의 키

// name이 Slime 또는 hp가 50.
db.monsters.find({
  $or: [{ name: 'Slime' }, { hp: 50 }],
}) // 배열에 두개의 객체
```

```js
db.book.find({
  hits: { $gte: 50 },
})
// hits >= 50인 document를 조회한다.

db.book.find({
  hits: { $gt: 40, $lt: 70 },
})
// hits가 40 초과 70 미만. 40 < hits < 70
```

```js
db.book.find({
  name: {
    $in: ['A', 'B'],
  },
}) // name이 A or B인 Document

db.book.find({
  $or: [{ name: 'A' }, { hits: 50 }],
}) // name이 A 혹은 hits가 50인 Document

db.book.find({
  $and: [{ hits: { $lte: 50 } }, { name: 'B' }],
}) // (hits < 50) and (name == B)인 Document
```

- 정규식 \$regex

```js
db.book.find({ name: { $regex: /a|b/, $options: 'i' } })
db.book.find({ name: /a|b/i }).pretty() // a또는 b 를 정규식으로 검색 option: i는 대소문자 무시
```
