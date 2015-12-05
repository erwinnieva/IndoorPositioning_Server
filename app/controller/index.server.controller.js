exports.render = function(req, res) {
	res.render('index', {
		title: 'Indoor Positioning',
		subject: 'CS595(A) Capstone Course'
	})
};