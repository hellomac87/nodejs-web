'use strict';

const cacheManager =require('./cache');

class sessionManager extends cacheManager {}

const SessionManager = new sessionManager();

// cacheManager 에서 상속받은 메소드를 사용할 수 있다
SessionManager.addConfig({
    token: 'random'
})

const config = SessionManager.getConfig();

console.log(config);