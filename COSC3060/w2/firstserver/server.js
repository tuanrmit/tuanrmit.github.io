const http = require('http');
const url = require('url');

http.createServer(function(request, response) {
    var q = url.parse(request.url, true);
    console.log(`New request is coming...from ${q.pathname}`);

    response.writeHead(200, {'Content-Type': 'my-string'});
    
    if (q.pathname == "/about") {
        response.write("<h1>This is the about page</h1>");
    }
    else if (q.pathname == "/signin") {
        response.write("<h1>This is the sign in page</h1>");
    }
    else {
        response.write("<h1>Hello, welcome to Nodejs Server</h1>");
    }
    response.end();
}).listen(1234);

console.log("Server is listening at http://127.0.0.1:1234");