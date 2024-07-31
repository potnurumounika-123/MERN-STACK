svar fs = require('fs');

fs.unlink('banana.text' ,function(err){
	if(err)throw err;
	console.log('file was renamed!');
});