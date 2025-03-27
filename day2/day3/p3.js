const http = require('http');
const fs = require('fs/promises');
const server = http.createServer (async (requestAnimationFrame,res) =>{
    const data = await fs.readfile("./index.html");
    res.writeHead(200,{'content-type':'text/html'});
    res.end(data);
});
server.listen(9000,(err)=>{


    if (err)
        console.log(err)
    else
    console.log('server is running at http://localhost:9000/');
});