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

```js
'use strict';

// find, includes

const arr = ['node.js','올인원'];

// 해당 조건의 데이터 리턴
const ret = arr.find(key => key === '올인원');

// 해당 데이터가 포함되어있는지 여부
const res = arr.includes('node.js');

console.log(ret);
console.log(res);
```

### 14. forEach

forEach 내부에서 실행되는 코드들은 비동기적으로 실행되지 않기때문에 비동기 코드를 실행할때 주의하여야한다.

```js
'use strict';

// forEach
const arr = [1,2,3];
const newArr = [];
arr.forEach((item) => {
    newArr.push(item);
});

console.log(newArr);
// [1,2,3]
```

### 15. map, filter

```js
'use strict';

const arr = ['node.js','올인원'];

// filter

const newArr = arr.filter(data => data==='node.js');

console.log(newArr);

// map
// 기존의 배열이나 객체에서 새로운 데이터를 가공해야 하는 경우

const mapArr = arr.map(item => {
    title: item
})

console.log(mapArr);

```

### 16. Object.assign vs spread

```js
'use strict';

// Object.assign vs spread

const obj = {
    title: 'node.js 올인원 패키지'
}

const newObj = {
    name: '패스트캠퍼스'
}

// 객체를 하나로 합칠때
// Object.assign

const ret = Object.assign({}, obj, newObj);

// 가독성 
const spreadRet = {
    ...obj,
    ...newObj
}

// 객체 뿐만 아니라 Array type 에서도 활용 가능

const arr = [1,2,3]; 
const newArr = [4,5,6]; 

const spreadArr = [
    ...arr,
    ...newArr
]

console.log(ret);
console.log(spreadRet);
console.log(spreadArr);

```

### 17. Set

```js
'use strict';

const test = new Set();

test.add(1);
test.add(1);
test.add(2);
test.add(3);
test.add(4);

console.log(test);
console.log(typeof test);

for(const item of test){
    console.log(item);
}

const ret = test.has(2);

console.log(ret);

```

### 21. some

```js
'use strict';

const arr = [1, 2, 0, -1, -2];

const res = arr.some(key => key < 0);

console.log(res);
```

### 22. static method 
```js
'use strict';

// static method
// class 를 생성하지 않고 class 내부에 바로 접근하여 함수를 실행할 수 있다.

class test {
    constructor(){
        this.config = {};
    }

    fn(){}

    static call(){
        // staic method 내에서는 constructor 에서 생성된 객체에 접근할 수 없다.
        console.log('static method');
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
'use strict';

let string = 'node.js 올인원 패키지';

let isStartWith = string.startsWith('n');

let isIncludes = string.includes('ㅁㄴㅇ');

let isEndWith = string.endsWith('지');

// console.log({isStartWith,isIncludes,isEndWith});
const checkIfContains = () => {
    if((isStartWith || isIncludes) && isEndWith){
        return true;
    }
}

const ret = checkIfContains();

console.log(ret);

```

### 25. template string
```js
'use strict';

const details = `자세한 내용`;
let str = `node.js`;

str += ` 올인원 패키지 ${details}`;

const int = 1;

str += `${str}의 값은 ${int}`;

console.log(str);

```

### 26. Type checking

```js
'use strict';

const string ='node.js';
const array = [];
const obj = {};
const number = 1;

console.log(typeof number);

```

### 27. hoisting
```js
'use strict';

// hoisting
console.log(var1);

// let var1 = 'r';
var var1 = 'r';


fn();

function fn(){
    console.log('fn');
}

// var 는 미리 선언하지 않아도 전역변수로 선언되기 때문에
// 나중에 선언되더라도 코드의 최상단에 선언된것 처럼 실행한다.
```

### 28. IIFE

Immediatle Invoked Fuction Express (즉시 실행되는 함수 표현)

- 해당하는 함수 실행이나 객체의 접근을 보호할때 사용된다.

```js
// IIFE
(function fn(){
    var confidential = 'this is secret';
    console.log('IIFE');
})();
// 외부에서 해당 함수의 변수나 객체에 대한 접근 통제
// console.log(confidential);
```

### 29. setInterval

```js
'use strict';
// setInterval
setInterval(() => {
    console.log('this is repeated');
}, 1000)

```

### 30. event emitter
```js
'use strict';
// event emitter
const EventEmitter = require('events');

class ChatManager extends EventEmitter{}

const chatManager = new ChatManager();

chatManager.on("join", () => {
    console.log('new user joined');
});

chatManager.emit("join");
```

### 31. error handling
```js
'use strict';
// error handling

const CustomError = (message) => {
    this.message = message;
    this.type = 'NotImageFileException';
}

try {
    const  imgTypes = ['.jpg', '.png', '.gif'];
    const filename = 'fast.doc';

    const isImageFIle = imgTypes.find(ext => filename.endsWith(ext));

    if(!isImageFIle){
        throw new CustomError('this is not an image file');
    }

} catch (e) {
    console.error(e);
}
```