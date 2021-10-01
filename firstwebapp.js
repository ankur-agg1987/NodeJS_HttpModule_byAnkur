var myhttp = require('http');

const server = myhttp.createServer((req, res) => {
    if (req.url === '/'){
        res.write ('Welcome to NODE JS period');
        res.end();
    }
	if (req.url === '/getdata'){
		var a=10;
        res.write ('Data requested is:'+a);
        res.end();
    }
});

server.listen(30000);
console.log("Server started listening at 30000");