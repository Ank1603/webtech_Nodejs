var fs = require("fs");
//fs is built in module
console.log("start");
var ans = fs.readFileSync("3.html",'UTF-8');
console.log(ans);
console.log("end");
