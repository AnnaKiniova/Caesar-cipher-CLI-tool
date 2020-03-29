const http = require("http");
const path = require("path");
const port = 8080;

const server = http.createServer((req, resp) => {
  resp.write("Hello!");
  resp.end();
});

server.listen(port);
