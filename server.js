var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("request for " + pathname + " recieved.");
        
        request.setEncoding("utf8");
         
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("recieved POST data chunk '" + postDataChunk + "' .");
        });
        
        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
    }

    http.createServer(onRequest).listen(7777);
    console.log("server has started...");
}

exports.start = start
