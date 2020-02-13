"use strict";

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const http = require("http");
const helmet = require("helmet");

class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
  }

  async start() {
    this.app.use(helmet());
    this.app.use(cookieParser());
    this.app.use(bodyParser());

    // custom middleware
    this.app.use((err, req, res, next) => {
      // 수행하고자 하는 로직을 작성
      console.error(`Internal error`, err);
      if (req) {
        // 모든 리퀘스트를 로깅
        console.log(req);
      }
      if (res) {
        // 모든 리퀘스트를 로깅
        console.log(res);
      }
      // 수행하고자 하는 로직이 완료되었다면.
      next();
    });
  }
}
