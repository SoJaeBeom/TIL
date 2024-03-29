# IP 주소

## ARP

- 컴퓨터와 컴퓨터 간의 통신은 IP 주소에서 ARP를 통해 MAC 주소를 찾아 MAC 주소를 기반으로 통신한다.
- ARP(Address Resolution Protocol)란 IP 주소로부터 MAC 주소를 구하는 IP와 MAC 주소의 다리 역할을 하는 프로토콜이다.
- ARP를 통해 가상 주소인 IP 주소를 실제 주소인 MAC 주소로 변환한다.
- RARP를 통해 실제 주소인 MAC 주소를 가상 주소인 IP 주소로 변환하기도 한다.
- 장치가 ARP Request 브로드캐스트를 보내서 IP주소에 해당하는 MAC 주소를 찾는다.
- 해당 주소에 맞는 장치가 ARP reply 유니캐스트를 통해 MAC 주소를 반환하는 과정을 거쳐 IP 주소에 맞는 MAC 주소를 찾게된다.

> 브로드캐스트
>
> - 송신 호스트가 전송한 데이터가 네트워크에 연결된 모든 호스트에 전송되는 방식이다.

> 유니캐스트
>
> - 고유 주소로 식별된 하나의 네트워크 목적지에 1:1로 데이터를 전송하는 방식이다.

## 홉바이홉 통신

- IP 주소를 통해 통신하는 과정을 홉바이홉 통신이라고 한다.
- 통신망에서 각 패킷이 여러 개의 라우터를 건너가는 모습을 비유적으로 표현한 것이다.
- 통신 장치에 있는 라우팅 테이블의 IP를 통해 시작 주소부터 시작하여 다음 IP로 계속해서 이동하는 라우팅 과정을 거쳐 패킷이 최종 목적지까지 도달하는 통신을 말한다.

> 라우팅
>
> - IP 주소를 찾아가는 과정

### 라우팅 테이블

- 송신지에서 수신지까지 도달하기 위해 사용된다.
- 라우터에 들어가 있는 목적지 정보들과 그 목적지로 가기 위한 방법이 들어 있는 리스트를 뜻한다.
- 라우팅 테이블에는 게이트웨이와 모든 목적지에 대해 해당 목적지에 도달하기 위해 거쳐야 할 다음라우터의 정보를 가지고 있다.

### 게이트웨이

- 서로 다른 통신망, 프로토콜을 사용하는 네트워크 간의 통신을 가능하게 하는 관문 역할을 하는 컴퓨터나 소프트웨어를 말한다.
- 사용자는 인터넷에 접속하기 위해 수많은 톨게이트인 게이트웨이를 거쳐야 한다.
- 서로 다른 네트워크상의 통신 프로토콜을 변환해주는 역할을 한다.
- 게이트웨이를 확인하는 방법은 라우팅 테이블을 통해 볼수 있다.
- 라우팅 테이블은 윈도우의 명령 프롬프트에서 netstat -r 명령어를 실행하여 확인할 수 있다.

## IP 주소 체계

- IP 주소는 IPv4와 IPv6으로 나뉜다.
- IPv4는 32비트를 8비트 단위로 점을 찍어 표기하며 123.45.67.89 같은 방식으로 IP주소를 나타낸다.
- IPv6은 64비트를 16비트 단위로 점을 찍어 표기하며 2001:db8::ff00:42:8329같은 방식으로 IP주소를 나타낸다.

#### 클래스 기반 할당 방식

- IP주소 체계는 처음에는 5개의 클래스로 구분하는 클래스 기반 할당 방식(CIDR)을 썼다.
- 앞에 있는 부분을 네트워크 주소, 그 뒤에 있는 부분을 컴퓨터에 부여하는 주소인 호스트 주소로 놓아서 사용한다.
- 네트워크의 첫 번째 주소는 네트워크 주소로 사용되고 가장 마지막 주소는 브로드 캐스트용 주소로 네트워크에 속해 있는 모든 컴퓨터에 데이터를 보낼때 사용된다.
- 사용하는 주소보다 버리는 주소가 많은 단점이 있다.
- 이를 해소하기 위해 DHCP와 IPv6, NAT가 나왔다.

#### DHCP(Dynamic Host Configuration Protocol)

- IP 주소 및 기타 통신 매개변수를 자동으로 할당하기 위한 네트워크 관리 프로토콜이다.
- 네트워크 장치의 IP주소를 수동으로 설정할 필요 없이 인터넷에 접속할 때마다 자동으로 IP주소를 할당할 수 있다.

#### NAT(Network Address Translation)

- 패킷이 라우팅 장치를 통해 전송되는 동안 패킷의 IP주소 정보를 수정하여 IP주소를 다른 주소로 매핑하는 방법이다.
- IPv4 주소 체계만으로는 많은 주소들을 모두 감당하지 못하지만 NAT로 공인 IP와 사설 IP로 나눠서 많은 주소를 처리한다.

- NAT를 쓰는 이유는 주로 여러 대의 호스트가 하나의 공인 IP주소를 사용하여 인터넷에 접속하기 위함이다.
- 내부 네트워크에서 사용하는 IP주소와 외부에 드러나는 IP주소를 다르게 유지할 수 있기 때문에 내부 네트워크에 대한 어느 정도의 보안이 가능해진다.
- NAT는 여러 명이 동시에 인터넷을 접속하게 되므로 실제로 접속하는 호스트 숫자에 따라서 접속 속도가 느려질 수 있다.
