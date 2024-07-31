var fs = require('fs');

fs.open('apple.text','banana.text' ,function(err){
	if(err)throw err;
	console.log('file was renamed!');
});