## express

### expres 기본

- singleton pattern 으로 express 시작하기
- 분산처리된 마이크로 아키텍쳐 환경에서, 유일성을 보장할 수 있는 방법

```js
"use strict";

const express = require("express");
const http = require("http");

// singleton pattern 으로 express 구성하기
// *** 분산처리된 환경에서, 유일성 보장
class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
    this.config = config;
    this.app = app;
    this.currentConns = new Set();
    // 무중단 배포환경 CI/CD 환경에서 상태들을 관리하기 위해
    this.busy = new WeakSet();
    this.stopping = false;
  }

  async start() {}
}

const init = async (config = {}) => {
  const server = new ApiServer(config);
  return server.start();
};

// 기존 express 사용 방식
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => res.send("Hello World!"));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```
