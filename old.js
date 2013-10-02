var joblint = require('joblint'),
	fs = require('fs'),
	spec = fs.readFileSync('./spec.txt', 'utf-8'),
	result = joblint(spec);

console.log(result);
