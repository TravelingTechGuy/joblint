var joblint = require('joblint'),
	fs = require('fs'),
	spec = fs.readFileSync('./spec2.txt', 'utf-8'),
	result = joblint(spec, {verbose:true});

console.log(result);
