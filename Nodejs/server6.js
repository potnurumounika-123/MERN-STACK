
var fs = require('fs');

fs.open('apple.text','could you understand or not!',function(err){
	if(err)throw err;
	console.log('mounika!');
});