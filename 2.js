//create own server /custom server/live server
//const { constants } = require("buffer");
var http = require("http");
//console.log(http);
//req incoming data from server
//res outgoing data from server
const server = http.createServer(function (req, res) {
  console.log(typeof req, typeof res);
  res.end("hello,World");
});
server.listen("9000");
