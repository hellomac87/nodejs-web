"use strict";

const arr = [some Promise, some Promise, some Promise];

arr.map(item => {
  // 비동기 코드, 비동기적으로 실행
  // 어떤 Promise 가 먼저 실행되는지 알 수 없고
  // map function 안에서 async await 를 사용하면 안된다.
  // item간 실행 완료 순서를 보장하지 않는다.
});

arr.forEach(item => {
  // 비동기코드 불가능(작동은 하나 순서를 보장하지 않음)
})

for(const item of arr){
  // 비동기 코드 가능
}


