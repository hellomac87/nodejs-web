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

### middlewares

```js
"use strict";

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const http = require("http");
const helmet = require("helmet");

class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
  }

  async start() {
    this.app.use(helmet());
    this.app.use(cookieParser());
    this.app.use(bodyParser());
  }
}
```

### custom middleware

```js
"use strict";

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const http = require("http");
const helmet = require("helmet");

class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
  }

  async start() {
    this.app.use(helmet());
    this.app.use(cookieParser());
    this.app.use(bodyParser());

    // custom middleware
    this.app.use((err, req, res, next) => {
      // 수행하고자 하는 로직을 작성
      console.error(`Internal error`, err);
      if (req) {
        // 모든 리퀘스트를 로깅
        console.log(req);
      }
      if (res) {
        // 모든 리퀘스트를 로깅
        console.log(res);
      }
      // 수행하고자 하는 로직이 완료되었다면.
      next();
    });
  }
}
```

### 정적 파일 처리

- image, sound, video 등과 같은 파일들
- nodejs 에서 static file 을 저장하는 것은 바람직하지 않다.
- static file 은 reverse proxy를 통해 서비스 하는 것이 좋다.

```js
"use strict";

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const http = require("http");
const helmet = require("helmet");
const static = require("serve-static");

class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
    this.app.static = static;
  }

  async start() {
    this.app.use(helmet());
    this.app.use(cookieParser());
    this.app.use(bodyParser());

    this.app.use(
      this.app.static(path.join(__dirname, "dist"), {
        setHeaders: (res, path) => {
          // 특정한 서버에서 접속핤수 있느냐
          res.setHeaders("Access-Control-Allow-Origin", "*");
          // 특정한 리퀘스트에 대한 헤더를 판별하느냐
          res.setHeaders("Access-Control-Allow-Headers", "*");
          res.setHeaders("Access-Control-Allow-Method", "GET");
        }
      })
    );
  }
}
```

### REST API

- 구체적인 action은 메소드로 정의되어있기 떄문에
- user의 end-point 를 나눠서 작성 할 필요는 없다.

```
// test.com/user [POST]
// test.com/user [PUT]
// test.com/user [DELETE]
// test.com/user [PATCH]
```
