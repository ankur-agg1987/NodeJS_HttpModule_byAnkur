var http = require('http');

var server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('Hello Ji');
        res.end();
    }
    else if(req.url == '/first'){
        res.write('Hello hi ji');
        res.end();
    }
});

server.listen(3000);
console.log("Server running at 3000")