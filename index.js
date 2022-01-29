const http = require("http");
const fs = require("fs");
const port = 5000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  const handleRouterViews = (filePath, statusCode) => {
    fs.readFile(filePath, (error, data) => {
      res.writeHead(statusCode, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handleRouterViews("./views/home.html", 200);
  } else if (req.url === "/about") {
    handleRouterViews("./views/about.html", 200);
  } else if (req.url === "/contact") {
    handleRouterViews("./views/contact.html", 200);
  } else {
    handleRouterViews("./views/error.html", 400);
  }
});

myServer.listen(port, hostname, () => {
  console.log(`server running port http://${hostname}:${port}`);
});
