process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose'),
	express = require('./config/express');
var db = mongoose()
var app = express();
app.set('port', (process.env.PORT || 80));
app.listen(app.get('port'), function() {
	console.log('Server running on port ', app.get('port'));
});