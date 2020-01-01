## Node 핵심과정

### 05. Event Loop 기초와 실습

자료구조에 대한 이해

stack (스택) : 가장 나중에 입력된 데이터를 먼저 반환하는 자료구조

queue (큐) : 가장 먼저 입력된 데이터를 먼저 반환하는 자료구조

```js
'use strict';

// stack 구현하기
// const 를 사용할 수 있는 경우에는 const 를 사용한다.
const arr = [];

for( const i = 0; i < 100; i++){
    arr.push(i)
};

arr.pop(); // 99 return 

// Queue 큐
arr.shift() // 0 return 
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
'use strict';

function edit () {}
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
    id: '',
    token: '',
    fn: () => {
        console.log('this is a function')
    }
}
```

### 09. REPL

REPL (Read Eval Print Loop) 읽고 평가하고 출력하는 반복.

### 10. nodemon

nodemon 은 pm2 같은 APM 은 아니다.

- APM (Application Process Monitoring)


### 11. npm 기초

### 12. every

```js
'use strict';

const arr = [2,3,4,5,6];

const isBiggerThenOne = arr.every(key => key > 2);

console.log(isBiggerThenOne);
// false
```

### 13. find, includes