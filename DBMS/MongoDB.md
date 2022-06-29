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
