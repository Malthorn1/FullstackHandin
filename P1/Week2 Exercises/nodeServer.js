const http = require('http');
var os = require('./osInfo');
const EventEmitter = require ('events');
const  dos  = require ('./dosDetector'); 
let  DOS = new dos(2000); 

const server = http.createServer((req, res) => {
  if (req.url === '/api/os-info') {
      DOS.addUrl(req.url)


    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ os }));
 
    
    //Return a response with OS-info, using the code implemented in part-a
    return res.end();
  }
  if (req.url === '/') {
    DOS.addUrl(req.url)
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
    
  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log('listening on 3000');

//Register for the "DosDetected" event and console.log the url and time info.
DOS.on("dos", (arg) => {
    console.log("Possible DOS-Attack detected on URL:" + arg.url);
    console.log("Time between calls was: " + arg.timeBetweenCalls);
  });