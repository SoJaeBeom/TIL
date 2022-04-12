## position & display & float 속성
## 1. position
- static
    - 기본적인 위치 지정 방식, 문서의 기본적인 흐름을 따른다.
    - 모든 태그들은 처음에 position: static 상태이다.
    - left, top, right, bottom 값이 적용되지 않는다.
    - 차례대로 왼쪽에서 오른쪽, 위에서 아래로 쌓인다.
- relative
    - static과 유사하나 원래 위치에서 주어진 값만큼 이동된다.
    - top(위), right(오른쪽), bottom(아래), left(왼쪽) 속성을 사용해 위치 조절이 가능하다.
    - Relative 속성에서 #top 태그에 top: 5px를 주면 위로 이동할 것 같지만 아래로 이동한다.
    - relative는 각각의 방향을 기준으로 태그 안쪽 방향으로 이동한다.(바깥쪽으로 이동하게 하고 싶으면 5px 대신 음수 -5px를 주면 된다.)
- absolute
    - 기본 흐름을 따르지 않고 부모 엘리먼트의 상대적으로 지정된다.
    - 부모 요소 포지션이 relative, absolute, fixed인 태그가 있다면 부모의 요소를 기준으로 움직인다.
    - 부모요소 포지션이 static 이라면 body 태그를 기준으로 배치된다.
    - 부모요소가 없다면 포지션 문서의 body를 기준으로 배치된다.
- fixed
    - Fixed 포지션은 화면의 스크롤이나 움직임에 관계없이 화면의 특정 부분에 고정되는 포지션이다.

## 2. display
- block
    - block은 한 영역을 차지 하는 박스형태을 가지는 성질이다.(그렇기 때문에 기본적으로 block은 width값이 100%가 된다.)
    - block은 height와 width 값을 지정 할 수 있다.
    - block은 margin과 padding을 지정 할 수 있다.
- inline
    - inline은 주로 텍스트를 주입 할 때 사용 되는 형태이다.(그렇기 때문에 기본적으로 block처럼 width값이 100%가 아닌 컨텐츠 영역 만큼 자동으로 잡히게 되며 라인이 새로 추가 되지 않는다.)
    - width와 height를 명시 할 수 없다.
    - margin은 위아래엔 적용 되지 않는다.
    - padding은 좌우는 공간과 시각적인 부분이 모두 적용 되지만 위아래는 시각적으로는 추가되지만 공간을 차지 하지는 않는다.
- inline-block
    - inline-block 은 말그대로 inline의 특징과 block의 특징을 모두 가진 요소이다.
    - 줄바꿈이 이루어지지 않는다.
    - block처럼 width와 height를 지정 할 수 있다.
    - 만약 width와 height를 지정하지 않을 경우, inline과 같이 컨텐츠만큼 영역이 잡힌다.

## 3. float
- 복잡한 형태의 레이아웃을 구성하는데 필요한 핵심 속성으로 특정 요소를 떠있게, 흐르도록, 부유하게 하도록 하는 속성이다.
- float 속성을 사용해 박스를 왼쪽(left) 또는 오른쪽(right)으로 "부유"시키는 레이아웃 기법이다.
- 기본적인 문서 배치의 흐름에서 벗어나 요소의 모서리가 페이지의 왼쪽이나 오른쪽으로 이동하는 것을 말한다.
- float의 속성값은 left, right, none이다.
  - left : 요소를 왼쪽 방향으로 부유하게 설정
  - right : 요소를 오른쪽 방향으로 부유하게 설정
  - none : 기본값, 요소를 띄우지 않는다.
- 플롯 속성을 사용할 요소는 position 속성의 absolute 값과 양립할 수 없다.
- 이미지에 텍스트를 둘러싸게 만들려는 목표로 나온 기법이 floating 이라는 기법이다.