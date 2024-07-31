
var balaji = require('https');

balaji.createServer(function(req,res) {
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('Hello Worlds!');
	res.end();
}).listen(5000);