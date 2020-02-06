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
