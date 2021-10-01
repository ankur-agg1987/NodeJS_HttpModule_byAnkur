var http = require('http');
var url = require('url');
var fs = require('fs');

const myServer = http.createServer(function (req, res) {

  if(req.url == '/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname+'/login.html','utf-8');
    myReadStream.pipe(res);
  }

  if(req.url == '/login'){
  res.writeHead(200, {'Content-Type': 'text/html'});
  var userdata = url.parse(req.url, true).query;
  var username = userdata.Uname;
  var password = userdata.Pwd;
    res.write(`Your user name is: ${username}
                and your password is: ${password}`);
  res.end();
}

});

myServer.listen(12345);
console.log("Server listeining at 12345 port number");