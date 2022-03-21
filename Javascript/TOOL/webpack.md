## WebPack이란?
- 모듈 번들러이다.
    > 모듈 번들러란 웹 애플리케이션을 구성하는 자원(html, css, js, image)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물(static한 자원)을 만드는 도구이다.

### 모듈이란?
- 프로그래밍 관점에서 특정 기능을 갖는 코드 단위를 의미한다.
```js
// math.js
function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

const pi = 3.14;

export { sum, sub, pi}

// math.js : 3가지 기능을 갖고 있는 모듈이다.
// 1. 두 숫자의 합을 구하는 sum() 함수
// 2. 두 숫자의 차를 구하는 sub() 함수
// 3. 원주율 값을 갖는 pi 상수
```
- 성격이 비슷한 기능들을 하나의 의미 있는 파일로 관리하면 모듈이다.

### WebPack에서의 모듈
- 웹팩에서 지칭하는 모듈이라는 개념은 위와 같이 자바스크립트 모듈에만 국한되지 않고 웹 애플리케이션을 구성하는 모든 자원을 의미한다. 
- 웹 애플리케이션을 제작하려면 HTML, CSS, Javascript, Images, Font 등 많은 파일들을 필요로 한다. (이 파일 하나하나가 모두 모듈입니다.)

### 모듈 번들링이란?
- 웹 애플리케이션을 구성하는 몇십, 몇백개의 자원들을 하나의 파일로 병합 및 압축 해주는 동작을 모듈 번들링이라고 한다.

    > 빌드, 번들링, 변환 이 세 단어 모두 같은 의미이다.

### WebPack이 필요한 이유?
1. 파일 단위의 자바스크립트 모듈 관리의 필요성
2. 웹 개발 작업 자동화 도구 (Web Task Manager)
3. 웹 애플리케이션의 빠른 로딩 속도와 높은 성능

### WebPack으로 해결하려는 문제?
1. 자바스크립트 변수 유효 범위
2. 브라우저별 HTTP 요청 숫자의 제약
3. 사용하지 않는 코드의 관리
4. Dynamic Loading & Lazy Loading 미지원

### WebPack 주요 속성 4가지
1. entry
- WebPack에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로이다.
```js
// webpack.config.js
module.exports = {
  entry: './src/index.js'
}
// WebPack을 실행했을 때 src 폴더 밑의 index.js 을 대상으로 웹팩이 빌드를 수행하는 코드입니다.
```
2. output
- WebPack을 돌리고 난 결과물의 파일 경로를 의미한다.
```js
// webpack.config.js
module.exports = {
  output: {
    filename: 'bundle.js'
  }
}
```
3. loader
- WebPack이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성이다.
```js
// webpack.config.js
module.exports = {
  module: {
    rules: []
  }
}
// 엔트리나 아웃풋 속성과는 다르게 module라는 이름을 사용한다. 
```
- 로더를 여러 개 사용하는 경우에는 아래와 같이 rules 배열에 로더 옵션을 추가해주면 된다.
- 로더는 기본적으로 오른쪽에서 왼쪽 순으로 적용된다.
```js
module: {
  rules: [
    {
      test: /\.scss$/,
      use: ['css-loader', 'sass-loader']
    }
  ]
}
// scss 파일에 대해 먼저 Sass 로더로 전처리(scss 파일을 css 파일로 변환)를 한 다음 웹팩에서 CSS 파일을 인식할 수 있게 CSS 로더를 적용하는 코드이다.
```
4. plugin
- WebPack의 기본적인 동작에 추가적인 기능을 제공하는 속성이다.
- 로더랑 비교하면 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 플러그인은 해당 결과물의 형태를 바꾸는 역할이다.
- 플러그인의 배열에는 생성자 함수로 생성한 객체 인스턴스만 추가될 수 있다.
    - HtmlWebpackPlugin : 웹팩으로 빌드한 결과물로 HTML 파일을 생성해주는 플러그인
    - ProgressPlugin : 웹팩의 빌드 진행율을 표시해주는 플러그인
```js
// webpack.config.js
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProgressPlugin()
  ]
}
```
