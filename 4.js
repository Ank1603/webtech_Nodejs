var fs = require("fs");
console.log("Start");
//asynchronous
fs.readFile("3.html", "UTF-8", function (err, data) {
  console.log(data);
});
console.log("End");
