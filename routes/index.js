
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

	if(isClean(result)) {
		result.clean = true;
	}
	res.set({'Content-Type': 'application/json'});
	res.send(result);
};

function isClean(result) {
	return (result.errors.length === 0 && 
			result.warnings.length === 0 &&
			result.notices.length === 0 &&
			result.failPoints.culture === 0 &&
			result.failPoints.realism === 0 &&
			result.failPoints.recruiter === 0 &&
			result.failPoints.tech === 0);
}