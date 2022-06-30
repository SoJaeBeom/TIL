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
