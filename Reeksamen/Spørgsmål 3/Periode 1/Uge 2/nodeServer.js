const http = require("http");

//DosDetector code here
const DosDetector = require("./dosDetector");
let instance = new DosDetector(2000);
instance.on("DosAttack", (arg) => {
  console.log("Possible DOS-Attack detected on URL:" + arg.url);
  console.log("Time between calls was: " + arg.totalTimeBetweenCalls);
});

const server = http.createServer((req, res) => {
  if (req.url === "/api/os-info") {
    //DosDetector code here
    instance.addUrl(req.url);

    res.setHeader("Content-Type", "application/json");

    //OS code here
    let os = require("./simpleOsInfo");
    res.write(JSON.stringify({ os }));

    return res.end();
  }
  if (req.url === "/") {
    //DosDetector code here
    instance.addUrl(req.url);

    res.setHeader("Content-Type", "text/html");
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on("connection", (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log("listening on 3000");
console.log("Dos timer set to " + instance.TIME_BETWEEN_CALLS + " miliseconds")
//Register for the "DosDetected" event and console.log the url and time info.
