var mocha = require("mocha");
var assert = require("assert");
var http = require("http");
var server = require("../src/server");

mocha.describe("server", function() {

    mocha.before(function () {
        server.start();
    });

    mocha.after(function () {
        server.stop();
    });

    mocha.it("should return status code 200", function(done) {
        http.get('http://localhost:20900', function (result) {
            assert.equal(200, result.statusCode);
            done();
        });
    });

    mocha.it("should should say Waves!", function(done) {
        http.get('http://localhost:20900', function (result) {
            var data = "";
            result.on("data", function (chunk) {
                data += chunk;
            });
            result.on("end", function () {
                assert.equal("Waves!\n", data);
                done();
            });
        });
    });

});
