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
  }
}
