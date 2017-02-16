var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Waves!\n");
});

module.exports.start = function() {
    server.listen(20900);
};

module.exports.stop = function() {
    server.close();
};
