var location = require('../controller/location.server.controller');

module.exports = function(app) {
	app.route('/location')
		.get(location.list)
		.post(location.create);

	app.route('/location/:locationId')
		.get(location.read)
		.put(location.update)
		.delete(location.delete);

	app.route('/locationByPersonId/:personId').get(location.read)
	app.route('/locationDeleteAll').delete(location.deleteAll);
	app.route('/locationTestData').post(location.dummyData);


	app.param('locationId', location.locationById);
	app.param('personId', location.locationByPersonId);
}