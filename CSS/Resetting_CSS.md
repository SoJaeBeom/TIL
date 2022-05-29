
## Resetting & Normalizing CSS
- 웹 브라우저마다 각자의 HTML요소의 기본 스타일을 가지고 있다.
- CSS 스타일링을 적용할때 이러한 기본 스타일링들이 방해를 할 뿐더러, 브라우저마다 다른 HTML 요소에 대한 기본 값 때문에 일어나는 크로스 브라우징을 막기 위함이다.

### Reset CSS
- 완전히 CSS 를 아무것도 없는 백지처럼 초기화한다.
    - 장점
        - 다른 부분에 신경을 쓰지 않아도 되는 장점이 있다. 
        - 모든 것을 reset하고 시작하기 때문에 고려해야할 변수가 적다.
    - 단점
        - 적용되는 스타일이 하나도 없기 때문에 오히려 코드의 길이가 길어질 수도 있다.
        - 브라우저는 계속 해서 업데이트되고 있는 반면, 리셋 CSS의 최근 업데이트는 2011년 이다.
        - 그만큼 오래된 자료이고, 유용한 스타일도 제거하기 때문에 비효율적이라는 비판도 존재 한다.

### Normalize CSS
- 기존의 모든 스타일을 제거하는 Reset과 달리 Normalize는 이를 유지하고 어느 정도 유용한 스타일들은 이용하려는 스타일링 방법이다.
    - 장점
        - Reset과 다르게 github을 통해 지속적인 업데이트가 이루어지고 있기 때문에 업데이트가 없는 Reset에 비해서 안정성이 높다.

### 정리
- Resetting은 요소의 모든 기본 브라우저 스타일을 제거 하기 위한 CSS다.
- Normalizing은 모든 스타일을 제거하는 것이 아니라 유용한 기본 스타일을 보존한다.