const express = require("express");
const path = require("path");
const fs = require("fs");
const http = require("http");
const https = require("https");
const sio = require("socket.io");
const favicon = require("serve-favicon");
const compression = require("compression");

const app = express(),
  optuions = {
    key: fs.readFileSync(__dirname + "/rtc-video-room-key.pem"),
    cert: fs.readFileSync(__dirname + "/rtc-video-room-cert.pem")
  },
  port = process.env.PORT || 3000,
  server =
    process.env.NODE_ENV === "production"
      ? https.createServer(app).listen(port)
      : http.createServer(option, app).listen(port),
  io = sio(server);

app.use(compression());
app.use(express.static(path.join(__dirname, "dist")));
app.use((req, res) => res.sendFile(__dirname + "/dist/index.html"));
app.use(favicon("./dist/favicon.ico"));
// Switch off the default 'X-Powered-By: Express' header
app.disable("x-powerd-by");
io.sockets.on("connection", socket => {
  let room = "";
  // sending to all client in the room (channel) except sender
  socket.on("message", message =>
    socket.broadcast.to(room).emit("message", message)
  );
  socket.on("find", () => {
    const url = socket.request.headers.referer.split("/");
    room = url[url.length - 1];
    const sr = io.sockets.adapter.rooms[room];
    if (sr === undefined) {
      // no room with such name is found so create it
      socket.join(room);
      socket.emit("create");
    } else if (sr.length === 1) {
      socket.emit("join");
    } else {
      // max two clients
      socket.emit("full", room);
    }
  });
});
