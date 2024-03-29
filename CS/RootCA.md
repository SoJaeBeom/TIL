# RootCA

- 보안 인증서는 기본적으로 개인키와 공개키로 이루어져있다.
- 개인키는 비공개키로 암호화 또는 복호화하는데 사용이되고 공개키는 누구나 볼수 있는 정보지만 신뢰할 수 있어야하며 이것을 증명해주고 발급해주는 기관이 인증 기관이다.
- 인증 기관(Certificate Authority, CA)이란 SSL 보안 인증서를 발급하는 기관이다.
- 공개키 중 CA정보를 가지고 있는 인증서들을 루트 인증서라고 한다.

### SSL & TLS

- SSL(보안 소켓 계층)이란 Secure Sockets Layer의 약자다.
- 서버의 웹사이트와 클라이언트의 브라우저 간의 통신 시에 데이터를 암호화해주는 프로토콜이다.
- SSL 통신을 하게 되면 브라우저의 주소 창에 http 가 아닌 https로 표시된다.
- SSL의 버전이 올라가면서 TLS로 변경되었지만 기존의 SSL이라는 명칭을 계속 사용하고 있다.
- SSL, TLS 모두 서버, 애플리케이션, 사용자 및 시스템 간의 데이터를 암호화하는 통신 프로토콜이다.
- TLS는 암호화 및 인증을 지원하는 보안 통신 프로토콜이다.
- SSL, TLS 모두 핸드셰이크 프로세스를 용이하게 하고 브라우저와 웹 서버 간에 암호화된 통신을 설정하는 디지털 인증서를 사용한다.
