"use strict";

class DatabaseManager {
  constructor() {}

  // constructor 역할을 static method 가 대신한다
  static async BUILD(settings) {
    const config = await this.init(settings);
    // 수행하고자 하는 모든 비동기 작업
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
