var mongoose = require('mongoose'),
	Company = mongoose.model('Company');

var getErrorMessage = function(err) {
	if(err.errors) {
		for(var errName in err.errors) {
			if(err.errors[errName].message) return err.errors[errName].message;
		}
	}
	else {
		return 'Unknown server error';
	}
};

exports.create = function(req, res) {
	var company = new Company(req.body);
	company.save(function(err) {
		if(err) {
			return next(err);
		}
		else {
			res.json(company);
		}
	});
};

exports.list = function(req, res, next) {
	Company.find({}, function(err, company) {
		if(err) {
			return next(err);
		}
		else {
			res.json(company);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.company);
};

exports.companyById = function(req, res, next, id) {
	Company.findOne({
		_id: id
	}, function(err, company) {
		if(err) {
			return next(err);
		}
		else {
			req.company = company;
			next();
		}
	});
};

exports.update = function(req, res, next) {
	Company.findByIdAndUpdate(req.company.id, req.body, function(err, company) {
		if(err) {
			return next(err);
		}
		else {
			res.json(company);
		}
	});
};

exports.delete = function(req, res, next) {
	req.company.remove(function(err) {
		if(err) {
			return next(err);
		}
		else {
			res.json(req.company);
		}
	});
};