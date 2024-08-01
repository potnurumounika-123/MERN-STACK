var express = require('express');
var app = express();

app.get('/',function(req,res) {
	res.send("welcome to express js world tested by mounika");

});

app.listen(8000);