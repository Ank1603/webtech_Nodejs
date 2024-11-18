var fs = require('fs');
var http = require('http');

const server = http.createServer(function (req, res) {
    fs.readFile("3.html", "UTF-8", function (err, data) {
        res.end(data);
    });
});

server.listen(9065);