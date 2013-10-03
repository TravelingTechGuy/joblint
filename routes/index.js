
/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', { title: 'JobLint' });
};

exports.lint = function(req, res) {
	var spec = req.body.spec,
		joblint = require('joblint', {verbose: true}),
		result = joblint(spec);

	res.set({'Content-Type': 'application/json'});
	res.send(result);
};