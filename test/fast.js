"use strict";

// hoisting
// 정해진 순서와 상관없이 runtime 환경에서 최상위로 재배치

function fullstack(backend, frontend) {
  this.backend = backend;
  this.frontend = frontend;

  // prototype 을 활용한 내부 closer 함수
  // closer : 해당하는 함수가 함수 외부에 있는 변수에 대해서 접근 할 수 있다.
  fullstack.prototype.getBackend = () => this.backend;
  fullstack.prototype.setBackend = () => (this.backend = backend);

  fullstack.prototype.getFrontend = () => this.frontend;
  fullstack.prototype.setFrontend = () => (this.frontend = frontend);
}

const Fullstack = new fullstack("nodejs", "react");

const be = Fullstack.getBackend();
const fe = Fullstack.getFrontend();

console.log(be, fe);
