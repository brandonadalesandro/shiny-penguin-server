var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("request for " + pathname + " recieved.");
        
        route(handle, pathname);
        
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(7777);
    console.log("server has started...");
}

exports.start = start
