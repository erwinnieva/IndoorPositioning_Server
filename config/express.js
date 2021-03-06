var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

module.exports = function() {
	var app = express();

	if(process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	}
	else if(process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());
	app.use(methodOverride());

	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	require('../app/route/poi.server.route.js')(app);
	require('../app/route/index.server.route.js')(app);
	require('../app/route/person.server.route.js')(app);
	require('../app/route/company.server.route.js')(app);
	require('../app/route/location.server.route.js')(app);

	app.use(express.static('./public'));
	return app;
};