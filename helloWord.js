var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("Hello World");
	res.end();
}).listen(3000);
console.log('Server started on localhost:3000;press Ctrl-c to terminate......');