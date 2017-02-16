var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Waves!\n");
});

server.listen(20900);

console.log("Server running at http://127.0.0.1:20900/");
