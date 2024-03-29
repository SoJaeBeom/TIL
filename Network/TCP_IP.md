## TCP/IP 4계층 모델

- 인터넷 프로토콜 스위트는 인터넷에서 컴퓨터들이 서로 정보를 주고 받는데 쓰이는 프로토콜의 집합이다.
- OSI계층은 애플리케이션 계층을 세 개로 쪼개고 링크 계층을 데이터 링크 계층, 물리 계층으로 나눠서 표현하는 것이 다르다.
- OSI계층은 인터넷 걔층을 네트워크 계층으로 부른다.

### 애플리케이션 계층

- 애플리케이션 계층은 FTP, HTTP, SSH, SMTP, DNS등 응용 프로그램이 사용되는 프로토콜 계층이다.
- 웹 서비스, 이메일 등 서비스를 실질적으로 사람들에게 제공하는 계층이다.

### 전송 계층

- 전송 계층은 송신자와 수신자를 연결하는 통신 서비스를 제공하며 연결 지향 데이터 스트림 지원, 신뢰성, 흐름 제어를 제공한다.
- 애플리케이션과 인터넷 계층 사이의 데이터가 전달될 때의 중계 역할을 한다.(TCP, UDP가 있다.)

  > TCP는 패킷 사이의 순서를 보장한다.</br>
  > TCP는 연결지향 프로토콜을 사용해서 연결을 한다.</br>
  > TCP는 신뢰성을 구축하고 수신 여부를 확인한다.</br>
  > 가상회선 패킷 교환 방식을 사용한다.</br>

  > UDP는 순서를 보장하지 않는다.</br>
  > UDP는 수신 여부를 확인하지 않으며 단순히 데이터만 준다.</br>
  > 데이터그램 패킷 교환 방식을 사용한다.</br>

#### 가상회선 패킷 교환 방식

- 각 패킷에는 가상회선 식별자가 포함되며 모든 패킷을 전송하면 가상회선이 해제되고 패킷들은 전송된 순서대로 도착하는 방식이다.

#### 데이터그램 패킷 교환 방식

- 패킷이 독립적으로 이동하며 최적의 경로를 선택하여 간다.
- 하나의 메시지에서 분할된 여러 패킷은 서로 다른 경로로 전송될 수 있으며 도착한 순서가 다를 수 있는 방식이다.

#### TCP 연결 성립 과정

- TCP는 신뢰성을 확보할 때 3-웨이 핸드셰이크라는 작업을 진행한다.
- 3-웨이 핸드셰이크 과정 이후 신뢰성이 구축되고 데이터 전송을 시작한다.
- TCP는 이 과정이 있기 때문에 신뢰성이 있는 계층이라고 한다.
- UDP는 이 과정이 없기 때문에 신뢰성이 없는 계층이라고 한다.

#### TCP 연결 해제 과정

- TCP가 연결을 해제할 때는 4-웨이 핸드셰이크 과정이 발생한다.
- TIME_WAIT 과정은 지연 패킷이 발생할 경우를 대비하기 위한 과정이다.
- TIME_WAIT 과정은 두 장치가 연결이 닫혔는지 확인하기 위한 과정이다.

### 인터넷 계층

- 장치로부터 받은 네트워크 패킷을 IP주소로 지정된 목적지로 전송하기 위해 사용되는 계층이다.
- IP, ARP, ICMP등이 있으며 패킷을 수신해야 할 상대의 주소를 지정하여 데이터를 전달한다.
- 상대방이 제대로 받았는지에 대해 보장하지 않는 비연결형적인 특징을 가지고 있다.

### 링크 계층

- 전선, 광섬유, 무선 등으로 실질적으로 데이터를 전달하며 장치 간에 신호를 주고받는 규칙을 정하는 계층이다.
- 네트워크 접근 계층이라고도 한다.
- 물리 계층과 데이터 링크 계층으로 나누기도 한다.
- 물리 계층은 무선 LAN과 유선 LAN을 통해 0과 1로 이루어진 데이터를 보내는 계층이다.
- 데이터 링크 계층은 이더넷 프레임을 통해 에러 확인, 흐름 제어, 접근 제어를 담당하는 계층을 말한다.

#### 유선 LAN(IEEE802.3)

- 유선 LAN을 이루는 이더넷은 IEEE802.3이라는 프로토콜을 따르며 전이중화 통신을 쓴다.
  > 전이중화 통신</br>
  > 양쪽 장치가 동시에 송수신할 수 있는 방식을 말한다.</br>
  > 송신로와 수신로로 나눠서 데이터를 주고받으며 현대의 고속 이더넷은 이 방식을 기반으로 통신하고 있다.</br>

#### 유선 LAN을 이루는 케이블

- 트웨스트 페어 케이블
  - 하나의 케이블처럼 보이지만 실제로는 여덟개의 구리선을 두 개씩 꼬아서 묶은 케이블을 지칭한다.
  - 케이블을 구리선을 실드 처리하지 않고 덮은 UTP케이블과 실드 처리하고 덮은 STP로 나눠진다.
  - 우리가 많이 볼 수 있는 케이블은 UTP케이블로 LAN케이블이라고 한다.
  - LAN케이블을 꽂을 수 있는 커넥터를 RJ-45커넥터라고 한다.
- 광섬유 케이블
  - 광섬유로 만든 케이블이다.
  - 레이저를 이용해서 통신하기 때문에 구리선과는 비교할 수 없을 만큼의 장거리 및 고속 통신이 가능하다.

#### 무선 LAN(IEEE802.11)

- 수신과 송신에 같은 채널을 사용하기 때문에 반이중화 통신을 사용한다.
  > 반이중화 통신</br>
  > 양쪽 장치는 서로 통신할 수 있지만 동시에는 통신할 수 없으며 한 번에 한 방향만 통신할 수 있는 방식이다.</br>
  > 장치가 신호를 수신하기 시작하면 응답하기 전에 전송이 완료될 때까지 기다려야 한다.</br>
  > 둘 이상의 장치가 동시에 전송하면 충돌이 발생하여 메시지가 손실되거나 왜곡될 수 있기 때문에 충돌 방지 시스템이 필요하다.</br>

#### 무선 LAN을 이루는 주파수

- 무선 신호 전달 방식을 이용하여 2대 이상의 장치를 연결하는 기술이다.
- 비유도 매체인 공기에 주파수를 쏘아무선 통신망을 구축하는데 주파수 대역은 2.4GHz대역 또는 5GHz대역 중 하나를 써서 구축한다.
- 2.4GHz는 장애물에 강한 특성을 가지고 있지만 전자레인지, 무선 등 전파 간섭이 일어나는 경우가 많다.
- 5GHz 대역은 사용할 수 있는 채널 수도 많고 동시에 사용할 수 있기 때문에 상대적으로 깨끗한 전파 환경을 구축할 수 있다.

### 와이파이

- 전자기기들이 무선 LAN 신호에 연결할 수 있게 하는 기술이다.
- 무선 접속 장치(AP, Access Point)가 있어야 한다.
- 공유기라고 하며 이를 통해 유선 LAN에 흐르는 신호를 무선 LAN신호로 바꿔주어 신호가 닿는 범위 내에서 무선 인터넷을 사용할 수 있게 된다.
- 무선 LAN을 이용한 기술로는 지그비, 블루투스 등이 있다.

> BSS(Basic Service Set)</br>
>
> - 기본 서비스 집합을 의미한다.</br>
> - 단순 공유기를 통해 네트워크에 접속하는 것이 아닌 동일 BSS내에 있는 AP들과 장치들이 서로 통신이 가능한 구조를 말한다.</br>
> - 근거리 무선 통신을 제공한다.</br>
> - 하나의 AP만을 기반으로 구축이 되어 있어 사용자가 한 곳에서 다른 곳으로 자유롭게 이동하며 네트워크에 접속하는 것은 불가능하다.</br>

> ESS(Extended Service Set)</br>
>
> - 하나 이상의 연결된 BSS그룹이다.
> - 장거리 무선 통신을 제공하며 BSS보다 더 많은 가용성과 이동성을 지원한다.
> - 사용자는 한 장소에서 다른 장소로 이동하며 중단 없이 네트워크에 계속 연결할 수 있다.

### 계층 간 데이터 송수신 과정

애플리케이션 계층에서 전송 계층으로 보내는 요청 값들이 캡슐화 과정을 거쳐 전달되고 다시 링크 계층을 통해 해당 서버와 통신을 하고 해당 서버의 링크 계층으로부터 애플리케이션까지 배캡슐화 과정을 거쳐 데이터가 전송된다.

- 캡슐화 과정
  - 상위 계층의 헤더와 데이터를 하위 계층의 데이터 부분에 포함시키고 해당 계층의 헤더를 삽입하는 과정이다.
  - 애플리케이션 계층의 데이터가 전송 계층으로 전달되면서 세그먼트 또는 데이터그램화 되며 TCP헤더가 붙여지게 된다.
  - 이후 인터넷 계층으로 가면서 IP헤더가 붙여지게 되며 패킷화가 된다.
  - 이후 링크 계층으로 전달되면서 프레임 헤더와 프레임 트레일러가 붙어 프레임화 된다.
- 비캡슐화 과정
  - 하위 계층에서 상위 계층으로 가며 각 계층의 헤더 부분을 제거하는 과정을 말한다.
  - 캡슐화된 데이터를 받게 되면 링크 계층에서부터 타고 올라오면서 프레임화된 데이터는 다시 패킷화를 거쳐 세그먼트, 데이터그램화를 거쳐 메시지화가 된다.
  - 최종적으로 사용자에게 애플리케이션의 PDU인 메시지로 전달된다.

### PDU

- 네트워크의 어떠한 계층에서 계층으로 데이터가 전달될 때 한 덩어리의 단위를 PDU(Protocol Data Unit)라고 한다.
- 제어 관련 정보들이 포함된 헤더, 데이터를 의미하는 페이로드로 구성되어 있다.
- PDU 중 아래 계층인 비트로 송수신하는 것이 모든 PDU 중 가장 빠르고 효율성이 높다.
- 하지만 애플리케이션 계층에서는 문자열을 기반으로 송수신을 하는데 그 이유는 헤더에 authorization값 등 다른 값들을 넣는 확장이 쉽기 때문이다.
