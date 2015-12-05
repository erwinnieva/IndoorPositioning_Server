var mongoose = require('mongoose'),
	Person = mongoose.model('Person');

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
	var person = new Person(req.body);
	person.save(function(err) {
		if(err) {
			return next(err);
		}
		else {
			res.json(person);
		}
	});
};

exports.list = function(req, res, next) {
	Person.find({}, function(err, person) {
		if(err) {
			return next(err);
		}
		else {
			res.json(person);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.person);
};

exports.personById = function(req, res, next, id) {
	Person.findOne({
		_id: id
	}, function(err, person) {
		if(err) {
			return next(err);
		}
		else {
			req.person = person;
			next();
		}
	});
};

exports.update = function(req, res, next) {
	Person.findByIdAndUpdate(req.person.id, req.body, function(err, person) {
		if(err) {
			return next(err);
		}
		else {
			res.json(person);
		}
	});
};

exports.delete = function(req, res, next) {
	req.person.remove(function(err) {
		if(err) {
			return next(err);
		}
		else {
			res.json(req.person);
		}
	});
};