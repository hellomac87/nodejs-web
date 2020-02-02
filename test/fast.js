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

/*
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
*/

const fullstack = new Fullstack("javascript", "react");

fullstack.setBackend("java");
fullstack.setFrontend("vue");
const be = fullstack.getBackend();
const fe = fullstack.getFrontend();

console.log(be, fe);
