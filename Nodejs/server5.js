var fs = require('fs');

fs.open('apple.text','w',function(err,file){
	if(err)throw err;
	console.log('mounika!');
});