const http = require('http');
const b = require ("./exercises1")



const server = http.createServer(async (req, res) => {
    if (req.url === '/api/securerandoms') {
        let result  = await b([4,6,8])
        console.log(result)
 
  
  
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify( result  ));
   
      
      //Return a response with OS-info, using the code implemented in part-a
      return res.end();
    }
  });
  server.on('connection', (sock) => {
      
    // You can get the client-IP in here, using sock.remoteAddress)
  });
  server.listen(3000);
  console.log('listening on 3000');
  
  //Register for the "DosDetected" event and console.log the url and time info.
