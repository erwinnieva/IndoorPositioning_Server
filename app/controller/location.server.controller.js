var mongoose = require('mongoose'),
	Location = mongoose.model('Location');

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
	var location = new Location(req.body);
	location.save(function(err) {
		if(err) {
			return next(err);
		}
		else {
			res.json(location);
		}
	});
};

exports.list = function(req, res, next) {
	Location.find({}, function(err, location) {
		if(err) {
			return next(err);
		}
		else {
			res.json(location);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.location);
};

exports.locationById = function(req, res, next, id) {
	Location.findOne({
		_id: id
	}, function(err, location) {
		if(err) {
			return next(err);
		}
		else {
			req.location = location;
			next();
		}
	});
};

exports.locationByPersonId = function(req, res, next, personId) {
	Location.findOne({
		_person: personId
	}).sort({created: -1}).populate('_person', 'Firstname Lastname').exec(function(err, location) {
		if(err) return next(err);
		else {
			req.location = location;
			next();
		}
	});
};

exports.update = function(req, res, next) {
	Location.findByIdAndUpdate(req.location.id, req.body, function(err, location) {
		if(err) {
			return next(err);
		}
		else {
			res.json(location);
		}
	});
};

exports.delete = function(req, res, next) {
	req.location.remove(function(err) {
		if(err) {
			return next(err);
		}
		else {
			res.json(req.location);
		}
	});
};

exports.deleteAll = function(req, res, next) {
	Location.remove({}, function(err) {
		if(err) return next(err);
		else res.json(200);
	});
};