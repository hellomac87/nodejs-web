## Node 핵심과정

### 05. Event Loop 기초와 실습

자료구조에 대한 이해

stack (스택) : 가장 나중에 입력된 데이터를 먼저 반환하는 자료구조

queue (큐) : 가장 먼저 입력된 데이터를 먼저 반환하는 자료구조

```js
"use strict";

// stack 구현하기
// const 를 사용할 수 있는 경우에는 const 를 사용한다.
const arr = [];

for (const i = 0; i < 100; i++) {
  arr.push(i);
}

arr.pop(); // 99 return

// Queue 큐
arr.shift(); // 0 return
```

### 06. Event Loop 자료구조

[http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

callstack - 함수가 실행되는 순서를 기억하기 위한 자료구조

callback queue - callstack 이 비어있을때 실행

### 07. IO와 프로그래밍 패러다임

- I/O (Input/Output)

- 비동기 vs 동기

- Non-blocking vs blocking

### 08.Module.exports

```js
"use strict";

function edit() {}
function write() {}

class update {}

/*
module.exports = {
    edit,
    write
}
*/

// module.exports = update;

module.exports = {
  id: "",
  token: "",
  fn: () => {
    console.log("this is a function");
  }
};
```

### 09. REPL

REPL (Read Eval Print Loop) 읽고 평가하고 출력하는 반복.

### 10. nodemon

nodemon 은 pm2 같은 APM 은 아니다.

- APM (Application Process Monitoring)

### 11. npm 기초

### 12. every

```js
"use strict";

const arr = [2, 3, 4, 5, 6];

const isBiggerThenOne = arr.every(key => key > 2);

console.log(isBiggerThenOne);
// false
```

### 13. find, includes

```js
"use strict";

// find, includes

const arr = ["node.js", "올인원"];

// 해당 조건의 데이터 리턴
const ret = arr.find(key => key === "올인원");

// 해당 데이터가 포함되어있는지 여부
const res = arr.includes("node.js");

console.log(ret);
console.log(res);
```

### 14. forEach

forEach 내부에서 실행되는 코드들은 비동기적으로 실행되지 않기때문에 비동기 코드를 실행할때 주의하여야한다.

```js
"use strict";

// forEach
const arr = [1, 2, 3];
const newArr = [];
arr.forEach(item => {
  newArr.push(item);
});

console.log(newArr);
// [1,2,3]
```

### 15. map, filter

```js
"use strict";

const arr = ["node.js", "올인원"];

// filter

const newArr = arr.filter(data => data === "node.js");

console.log(newArr);

// map
// 기존의 배열이나 객체에서 새로운 데이터를 가공해야 하는 경우

const mapArr = arr.map(item => {
  title: item;
});

console.log(mapArr);
```

### 16. Object.assign vs spread

```js
"use strict";

// Object.assign vs spread

const obj = {
  title: "node.js 올인원 패키지"
};

const newObj = {
  name: "패스트캠퍼스"
};

// 객체를 하나로 합칠때
// Object.assign

const ret = Object.assign({}, obj, newObj);

// 가독성
const spreadRet = {
  ...obj,
  ...newObj
};

// 객체 뿐만 아니라 Array type 에서도 활용 가능

const arr = [1, 2, 3];
const newArr = [4, 5, 6];

const spreadArr = [...arr, ...newArr];

console.log(ret);
console.log(spreadRet);
console.log(spreadArr);
```

### 17. Set

```js
"use strict";

const test = new Set();

test.add(1);
test.add(1);
test.add(2);
test.add(3);
test.add(4);

console.log(test);
console.log(typeof test);

for (const item of test) {
  console.log(item);
}

const ret = test.has(2);

console.log(ret);
```

### 21. some

```js
"use strict";

const arr = [1, 2, 0, -1, -2];

const res = arr.some(key => key < 0);

console.log(res);
```

### 22. static method

```js
"use strict";

// static method
// class 를 생성하지 않고 class 내부에 바로 접근하여 함수를 실행할 수 있다.

class test {
  constructor() {
    this.config = {};
  }

  fn() {}

  static call() {
    // staic method 내에서는 constructor 에서 생성된 객체에 접근할 수 없다.
    console.log("static method");
  }
}

// class 에서 생성자 없이 바로 호출 가능하다.
test.call();
```

### 23. node vs browser

node 에서는 `window` 라는 객체는 존재하지 않는다.

node 에서는 별도 세팅이 없다면 require 문법을 사용해야한다.

`const, let, var` 의 스코프의 차이점을 잘 알아두도록 하자

`const, let`은 block scope, var 는 global scope

### 24. String

```js
"use strict";

let string = "node.js 올인원 패키지";

let isStartWith = string.startsWith("n");

let isIncludes = string.includes("ㅁㄴㅇ");

let isEndWith = string.endsWith("지");

// console.log({isStartWith,isIncludes,isEndWith});
const checkIfContains = () => {
  if ((isStartWith || isIncludes) && isEndWith) {
    return true;
  }
};

const ret = checkIfContains();

console.log(ret);
```

### 25. template string

```js
"use strict";

const details = `자세한 내용`;
let str = `node.js`;

str += ` 올인원 패키지 ${details}`;

const int = 1;

str += `${str}의 값은 ${int}`;

console.log(str);
```

### 26. Type checking

```js
"use strict";

const string = "node.js";
const array = [];
const obj = {};
const number = 1;

console.log(typeof number);
```

### 27. hoisting

```js
"use strict";

// hoisting
console.log(var1);

// let var1 = 'r';
var var1 = "r";

fn();

function fn() {
  console.log("fn");
}

// var 는 미리 선언하지 않아도 전역변수로 선언되기 때문에
// 나중에 선언되더라도 코드의 최상단에 선언된것 처럼 실행한다.
```

### 28. IIFE

Immediatle Invoked Fuction Express (즉시 실행되는 함수 표현)

- 해당하는 함수 실행이나 객체의 접근을 보호할때 사용된다.

```js
// IIFE
(function fn() {
  var confidential = "this is secret";
  console.log("IIFE");
})();
// 외부에서 해당 함수의 변수나 객체에 대한 접근 통제
// console.log(confidential);
```

### 29. setInterval

```js
"use strict";
// setInterval
setInterval(() => {
  console.log("this is repeated");
}, 1000);
```

### 30. event emitter

```js
"use strict";
// event emitter
const EventEmitter = require("events");

class ChatManager extends EventEmitter {}

const chatManager = new ChatManager();

chatManager.on("join", () => {
  console.log("new user joined");
});

chatManager.emit("join");
```

### 31. error handling

```js
"use strict";
// error handling

const CustomError = message => {
  this.message = message;
  this.type = "NotImageFileException";
};

try {
  const imgTypes = [".jpg", ".png", ".gif"];
  const filename = "fast.doc";

  const isImageFIle = imgTypes.find(ext => filename.endsWith(ext));

  if (!isImageFIle) {
    throw new CustomError("this is not an image file");
  }
} catch (e) {
  console.error(e);
}
```

```js
"use strict";

const CustomError = (message, type) => ({
  message: `Error: ${message}`,
  type: `API::${type}`
});

const whiteList = [".png", ".gif", ".jpg"];

const data = [];

const isValidImageFIles = (data, type) => {
  data.forEach(item => {
    // console.log(item);
    const ret = whiteList.find(_item => item.endsWith(_item));
    if (ret) return true;
    return false;
  });
};

if (!isValidImageFIles(["fast.pptx"])) {
  throw CustomError("isValidImageFiles", "invalidRequest");
}
```

### 32.arrow function

```js
"use strict";
// arrow fucntions

/*
function add (var1, var2) {
     return var1 + var2;
}
*/

const add = (var1, var2) => var1 + var2;
const ret = add(1, 2);
console.log(ret);

API.prototype.get = function(resource) {
  var self = this;
  return new Promise(function(resolve, reject) {
    http.get(self.uri + resource, function(data) {
      resolve(data);
    });
  });
};

API.prototype.get = resource =>
  new Promise((resolve, reject) => {
    http.get(self.uri + resource, data => {
      resolve(data);
    });
  });
```

### 33. Class

```js
"use strict";
// Class
// 싱글톤 패턴으로 개발할 수 있는 장점이 있다.
class cacheManager {
  constructor() {
    this.config = [];
  }

  addConfig(obj = {}) {
    this.config.push(obj);
  }

  getConfig() {
    return this.config;
  }
}

const CacheManager = new cacheManager();

CacheManager.addConfig({
  port: 8000
});
CacheManager.addConfig({
  cert: "../../test.crt"
});

const config = CacheManager.getConfig();
console.log(config);
```

### 34. Class Extends

```js
"use strict";
// Class Extends
// 싱글톤 패턴으로 개발할 수 있는 장점이 있다.
class cacheManager {
  constructor() {
    this.config = [];
  }

  addConfig(obj = {}) {
    this.config.push(obj);
  }

  getConfig() {
    return this.config;
  }
}

const CacheManager = new cacheManager();

module.exports = cacheManager;
```

```js
"use strict";

const cacheManager = require("./cache");

class sessionManager extends cacheManager {}

const SessionManager = new sessionManager();

// cacheManager 에서 상속받은 메소드를 사용할 수 있다
SessionManager.addConfig({
  token: "random"
});

const config = SessionManager.getConfig();

console.log(config);
```

### Destructuring

```js
"use strict";
// Destructuring
// 비구조화 대상에는 object, array 가 있음

// 구조화된 자료
const obj = {
  title: "node.js",
  value: "올인원 패키지"
};

const arr = [0, 1, 2, 3];

// 구조분해 할당
const { title, value } = obj;
const [, a, b] = arr;
console.log(title, value);
console.log(a, b);

// 예전 방식
// const title = obj.title;
// const value = obj.value;
```

### Generator

asunc await 의 등장으로 사용빈도가 줄었지만

Generator 만이 갖고있는 특이점, 장점 등이 많이 있다.

react 에서 사용하는 redux-saga 를 사용하는데 중요한 개념

```js
"use strict";
// Generator

// generator 에서는 arrow function을 사용할 수 없다
function* log() {
  console.log(0, yield);
  console.log(1, yield);
  console.log(2, yield);
}

const gen = log();

gen.next("zero");
gen.next("one");
gen.next("two");
```

```js
"use strict";
// Generator
// 순서에 의한 로직을 명시적으로 설정할 수 있다.

const genObj = {
  *gen() {
    // Lazy Loading
    let cnt = 0;
    yield ++cnt;
  }
};

const gen = genObj.gen();

console.log(gen.next());
console.log(gen.next());
```

### Timers

이벤트 루프의 기반이 되는 Timers

```js
"use strict";

// timeout?: number 는 최소 지연(보장)시간을 의미한다
// 정확한 시간을 의미하지 않음(외부 변수에 의해)

const timeoutObj = setTimeout(() => {
  console.log("first");
}, 0);

const immediateObj = setImmediate(() => {
  console.log("second");
});

const intervalObj = setInterval(() => {
  console.log("third");
}, 1000);

clearTimeout(timeoutObj);
clearInterval(immediateObj);
clearImmediate(intervalObj);
```

### DNS (Domain Name Server)

```js
"use strict";

const dns = require("dns");

dns.lookup("google.com", (err, address, family) => {
  console.log(`address: ${address}, ${family}`);
  // IPv4
});

dns.resolve4("archive.org", (err, addresses) => {
  if (err) throw err;

  const res = JSON.stringify(addresses);

  console.log(res);

  addresses.forEach(a => {
    dns.reverse(a, (err, hostnames) => {
      if (err) throw err;
      console.log(`reverse for ${a}; ${JSON.stringify(hostnames)}`);
    });
  });
});
```

### File System

```js
"use strict";

const fs = require("fs");

fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const content = "something to write";

fs.writeFile("fast.txt", content, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("success");
});
```

```js
"use strict";

const fs = require("fs");
const { promisify } = require("util");

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

const writeAndRead = async (data = "") => {
  try {
    await write("test.txt", data);
    return await read("test.txt");
  } catch (e) {
    console.error(e);
  }
};

writeAndRead("something to write");
```

### Promise.all

모든 promise 가 완료될 때 까지 기다림

```js
"use strict";

const promise1 = new Promise((resolve, reject) => resolve("즉시 호출"));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("3초 뒤에 호출"), 3000);
});

Promise.all([promise1, promise2]).then(values => console.log(values));
```

### Promise.race

먼저 반환되는 값을 반환

```js
"use strict";

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2000), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("즉시"), 0);
});

const res = Promise.race([promise1, promise2]).then(values =>
  console.log(values)
);

if (res === undefined) {
}
```

### http

```js
"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode();
  res.setHeader("Content-Type", "text/html");
  res.end("<div>Hello world<div>");
});

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
```

### https

```js
"use strict";

const https = require("https");

const options = {
  hostname: "google.com",
  port: 443,
  path: "/login",
  method: "GET" // POST GET PUT DELETE
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", d => {
    process.stdout.write(d);
  });

  req.on("error", e => {
    console.error(e);
  });
});

req.end();
```

### Prototype

hoisting

- 정해진 순서와 상관없이 runtime 환경에서 최상위로 재배치

closure

- 해당하는 함수가 함수 외부에 있는 변수에 대해서 접근 할 수 있다.

```js
"use strict";

function fullstack(backend, frontend) {
  this.backend = backend;
  this.frontend = frontend;

  // prototype 을 활용한 내부 closure 함수
  fullstack.prototype.getBackend = () => this.backend;
  fullstack.prototype.setBackend = () => (this.backend = backend);

  fullstack.prototype.getFrontend = () => this.frontend;
  fullstack.prototype.setFrontend = () => (this.frontend = frontend);
}

const Fullstack = new fullstack("nodejs", "react");

const be = Fullstack.getBackend();
const fe = Fullstack.getFrontend();

console.log(be, fe);
```

### Class

내부적으로 closure 를 갖는 방법보다

class 화 하는 것이 좀더 객체지향적 방법이다.

```js
"use strict";

class Fullstack {
  constructor(backend, frontend) {
    this.backend = backend;
    this.frontend = frontend;
  }

  getBackend() {
    return this.backend;
  }
  getFrontend() {
    return this.frontend;
  }

  setBackend(_backend) {
    return (this.backend = _backend);
  }
  setFrontend(_frontend) {
    return (this.frontend = _frontend);
  }
}

const fullstack = new Fullstack("javascript", "react");

fullstack.setBackend("java");
fullstack.setFrontend("vue");
const be = fullstack.getBackend();
const fe = fullstack.getFrontend();

console.log(be, fe);
```

### Node.js TDD 실무

TDD 종류

- Mochajs: Fullstack 개발자가 가장 많이 선택하는 framework
- Istanbul Js: code coverage, 내가 작성한 테스트들을 정량적으로 체크해주는 툴
- npm tape: Unit test
- jest: frontend 에서 많이 사용됨
- cypress: end to end test , ui test

### Functional Programming

- Nodejs는 멀티 패러다임을 갖고있음
- 함수형 프로그래밍의 장점은 무엇인가
- 단방향 흐름을 이해하는데 있어 중요함
- 좀더 간결하고 직관적으로 작성하여 유지보수 및 완성도 높은 코드를 만들어보자

- reduce

```js
"use strict";
// reduce
const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((total, value) => total + value);

const avg = numbers.reduce((total, value, index, arr) => {
  total += value;
  if (index === arr.length - 1) {
    return total / arr.length;
  } else {
    return total;
  }
});
console.log(sum);
console.log(avg);

// map과 filter 를 reduce 를 사용하게 되면 한줄의 코드로 사용가능
```

```js
"use strict";
// reduce

const numbers = [0, 1, 2, 3, 4, 5, 6];

const arr = ["pdf", "pdf", "html", "html", "gif", "gif", "gif"];

// 과제
// arr 배열 내에 file type 이 몇번 반복되었는지 객체를 반환하는 코드

const myAnswer = arr.reduce((acc, fileType) => {
  if (!acc[fileType]) {
    acc[fileType] = 1;
  } else {
    acc[fileType] += 1;
  }
  return acc;
}, {});

const answer = arr.reduce((acc, fileType) => {
  acc[fileType] = (acc[fileType] || 0) + 1;
  return acc;
}, {});

const res = numbers.reduce(
  (total, amount) => {
    if (amount > 0) total.push(amount);
    return total;
  },
  [] //초기값
);

console.log(answer);
```

### nodejs 디자인 패턴

- 싱글톤 패턴
- epress 서버 기준, 환경 변수를 가지고 있는 개체를 만든다고 가정할때
- 싱글톤 패턴을 사용하지 않게되면, 유저 요청이 있을 때마다 해당하는 환경설정을 읽거나 업데이트 하는 불필요한 오퍼레이션이 발생한다.

```js
"use strict";

class CacheManager {
  constructor() {
    if (!CacheManager.instance) {
      this._cache = [];
      CacheManager.instance = this;
    }

    return CacheManager.instance;
  }
}

const instance = new CacheManager();
Object.freeze(instance);

// 단일 최초에 한번만 적용되는 싱글톤 패턴의 캐시매니저
```

### Memory Leaks

```js
"use strict";

// 1) 불필요한 메모리 정보를 누적, 자원상의 문제
// 2( 메모리가 할당은 되었지만 비할당 과정을 거치지 않아서 메모리가 잔류하는 경우

// 불필요한 메모리의 할당
function study(value1, value2) {
  this.value1 = value1;
  this.value2 = value2;

  // 문제는 여기서 발생해요
  // 프로토타이핑 과정 없이 함수를 선언
  // this.prototype.func1 = () => {
  this.func1 = () => {
    console.log();
  };
}
// 프로토타이핑 없이 선언하면, 따로 비할당 하지 않는다면 함수가 메모리상에 계속 남아있다.
const problem = new study(undefined, undefined);

console.log(problem);
```

### 비동기 패턴

- callback hell 문제 해결 promise
- generator
- 실무에서 class 를 빈번하게 작성하게 되는데
- constructor 내부에서는 비동기 함수를 호출 할 수 없다.(?)
- 하... 진짜 설명 그지같이 못하네

```js
"use strict";

class Sample {
  *gen() {
    let cnt = 0;
    yield ++cnt;
  }

  // Computed Property
  *[Symbol.iterator]() {
    let cnt = 0;
    yield cnt++;
  }
}

const fn = new Sample();

const gn = fn.gen();

console.log(gn.next());
console.log(Array.from(Sample));
```

class 내부의 constructor 에서 비동기 사용하기

```js
"use strict";

class DatabaseManager {
  constructor(settings) {
    // 비동기 함수에 접근 할 수 있어야함
    // 데이터 베이스 요청, 쿼리등은 네크워크요청이 반드시 필요하다.
    this.settings = settings;
    this.init = init; // Promise cache
  }

  query() {
    // QUERY('') Agnostic
  }

  async init() {} // 최초 1회만 실행

  async newMember() {
    // primise 를 반환
    // pending 상태
    await this.init();
  }

  async deleteMember() {
    await this.init();
  }
}
```

### static factory method pattern

- static method 는 생성자로 생성하지 않아도 class 에 바로 접근하여 실행가는한 함수이다.

```js
"use strict";

class DatabaseManager {
  constructor() {}

  // constructor 역할을 static method 가 대신한다
  static async BUILD(settings) {
    const config = await this.init(settings);
    return new DatabaseManager(config);
  }

  query() {
    // QUERY('') Agnostic
  }

  async init(settings) {} // 최초 1회만 실행

  async newMember() {}

  async deleteMember() {}
}

const manager = DatabaseManager.BUILD({});
```
