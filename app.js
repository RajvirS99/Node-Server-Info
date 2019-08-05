const http = require ('http');
const nodeinfo = require('nodejs-info');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(nodeinfo(req));
});

server.listen(8080);
console.log("Listening to Port 8080");
