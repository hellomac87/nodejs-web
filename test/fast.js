"use strict";

class CacheManager {
  constructor() {
    if (!CacheManager.instance) {
      this._cache = [];
      CacheManager.instance = this;
    }

    return CacheManager.instance;
  }
}

const instance = new CacheManager();
Object.freeze(instance);

// 단일 최초에 한번만 적용되는 싱글톤 패턴의 캐시매니저
