## Microservices 에 대한 이해

- 비지니스 로직에 대한 기능들을 최소 단위로 나누어 개발한다.

## Serverless 에 대한 이해

- idc, cloud
- 최근 각광받는 Serverless 아키텍처
- Serverless 는 물리적인 server 가 없다는 뜻은 아니다.
- Cloud 환경은 로드밸런서, s3 bucket 의 흐름 등의 운용이 필요함
- Serverless 는 기존의 클라우드 서버운영 개념 없이
- Lamda, google cloud flatform 등
- 코드는 함수단위로 정의? 뭔소리야
- 클라우드 기반의 서비스에 대한 운영 없이 비지니스 로직에 집중하게 해준다.
- 왜케 설명을 못해여
- serverelss 환경이 적합한 서비스?
- 상시실행이 아닌 함수가 실행될때만 비용 발생
- 서버와 관련된 코드가 필요 없기 떄문에
- 주어 술어 목적어 순으로 얘기를 못하는듯 이사람은
- 너희들은 function 만 작성해라!

## Serverless Framework 기초

- 패키지만 설치
- 설명을 왜케 못하냐

## Websocket vs socket.io

- socket.io 는 nodejs 종속이 아님
- 브라우저간의 호환성을 해결하기 위한 솔루션이 socket.id
- 웹소켓이 런타임에서 작동하지 않는다면 polling 방식으로 이를 해결한다.

```js
const socketIo = websocket || polling;
```
