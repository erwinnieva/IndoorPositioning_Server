var mongoose = require('mongoose'),
	POI = mongoose.model('POI');

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

exports.poiById = function(req, res, next, id) {
	POI.findOne({
		_id: id
	}, function(err, poi) {
		if(err) return next(err);
		else {
			req.poi = poi;
			next();
		}
	});
};

exports.create = function(req, res) {
	var poi = new POI(req.body);
	poi.save(function(err) {
		if(err) return next(err);
		else res.json(poi);
	});
};

exports.list = function(req, res, next) {
	POI.find({}, function(err, poi) {
		if(err) return next(err);
		else res.json(poi);
	});
};

exports.update = function(req, res, next) {
	POI.findByIdAndUpdate(req.poi.id, req.body, function(err, poi) {
		if(err) return next(err);
		else res.json(poi);
	});
};

exports.delete = function(req, res, next) {
	req.poi.remove(function(err) {
		if(err) return next(err);
		else res.json(req.poi);
	});
};