var express = require('express');
var app = express();

app.get('/:name',function(req,res) {
	res.send('The name you specified is ' + req.params.name);

});

app.listen(8000);