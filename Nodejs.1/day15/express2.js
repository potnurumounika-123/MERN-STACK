var express = require('express');
var app = express();


app.get('/home',function(req,res) {
	res.send("welcome to express js home page!");
});	

app.post('/contact',function(req,res) {
	res.send("welcome to expressn js you just call contact page!'/contact'!\n");
});
app.all('/test',function(req,res) {
	res.send("welcome to express js HTTP method dosen't have any effect on the route!");
});

app.listen(8000);