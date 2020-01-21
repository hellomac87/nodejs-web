'use strict';
// Class Extends
// 싱글톤 패턴으로 개발할 수 있는 장점이 있다.
class cacheManager {
    constructor(){
        this.config = [];
    }

    addConfig (obj = {}) {
        this.config.push(obj);
    }

    getConfig () {
        return this.config;
    }
}

const CacheManager = new cacheManager();

module.exports = cacheManager;