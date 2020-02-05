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
