"use strict";

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const http = require("http");
const helmet = require("helmet");
const static = require("serve-static");

class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
    this.app.static = static;
  }

  async start() {
    this.app.use(helmet());
    this.app.use(cookieParser());
    this.app.use(bodyParser());

    this.app.use(
      this.app.static(path.join(__dirname, "dist"), {
        setHeaders: (res, path) => {
          // 특정한 서버에서 접속핤수 있느냐
          res.setHeaders("Access-Control-Allow-Origin", "*");
          // 특정한 리퀘스트에 대한 헤더를 판별하느냐
          res.setHeaders("Access-Control-Allow-Headers", "*");
          res.setHeaders("Access-Control-Allow-Method", "GET");
        }
      })
    );
  }
}
