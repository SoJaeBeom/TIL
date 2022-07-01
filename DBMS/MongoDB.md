# MongoDB

## Embedded Documents 검색

- Document 안 배열 형태로 있는 Document를 말한다.

```js
{
  "num": 1,
  "name": "A",
  "auther": [
    {
      "name": "park"
    },
    {
      "name": "lee"
    }
  ]
}
// "auther" Field -> Embedded Documents이다.
```

- \$elemMatch
  - 조건이 배열 안의 요소와 일치하는 필드를 선택합니다.

```js
db.book.find({
  auther: {
    $elemMatch: { name: 'park' }, // auther배열객체 들 중에서 {"name":"park"} 검색.
  },
})
```

## 일반 배열 검색

```js
{
  "num": "1",
  "name": "D",
  "auther": [],
  "language": [
    "eng",
    "kor",
    "jpn"
  ]
}
// db.book.find({"language": "eng"})
// Embedded Document가 아니고 일반 배열일 경우 바로 접근하면 된다.
```

- \$all
  - \$all 쿼리 안에 있는 모든 값을 포함하는 배열을 값으로 가진 태그를 선택한다.

```js
db.book.find({ language: { $all: ['eng', 'kor'] } })
// language배열이 'eng', 'kor' 원소 모두 가지고 있을 경우
```

- \$size
  - 배열의 length가 값과 읽치하는 필드를 선택한다.

```js
db.book.find({ language: { $size: 3 } })
```

## 일반 객체 검색

```js
{
  "num": "1",
  "name": "D",
  "auther": [],
  "language": [
    "eng",
    "kor",
    "jpn"
  ],
  "seller": {
    "name": "saramin"
  }
}
db.book.find("seller.name":"saramin")
// Embedded Document가 아니고 Key/Field일 경우도 .형태로 접근 가능
```

- 객체의 내부에 접근하듯이 .으로 내부 속성을 지목하면 된다.
- 따옴표로 묶어줘야 에러가 발생하지 않는다.

## 배열 안의 object의 field를 업데이트 하는 방법

- 배열은 구분자를 통해서 가능하다.

```js
db.collection.update(
  { _id: ObjectId('5308595e3256e758757b4d2f') },
  {
    $set: {
      'Employees.0.name ': 'abc',
      'Employees.1.name ': 'abc',
      'Employees.2.name ': 'abc',
    },
  },
)
```

- \$ 를 사용하면 배열 전체에 update가 가능하다.

```js
db.collection.update(
  {
    _id: ObjectId('5308595e3256e758757b4d2f'),
    'Employees.name': { $ne: 'abc' },
  },
  {
    $set: {
      'Employees.$.name ': 'abc',
    },
  },
)
```
