var fs = require('fs');

fs.open('apple.text','flying or not!',function(err){
	if(err)throw err;
	console.log('mounika!');
});