var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var LocationSchema = new Schema({
	LocX: Number,
	LocY: Number,
	created: {
		type: Date,
		index: true,
		default: Date.now
	},
	_person: {
		type: Schema.ObjectId,
		ref: 'Person'
	}
});

var PersonSchema = new Schema({
	Firstname: 			String,
	Lastname: 			String,
	MobileNumber: 		String,
	MobileUniqueID: 	String,
	ReferenceNumber: 	String
});

var CompanySchema = new Schema({
	Name: 			String,
	Description: 	String,
	PhoneNumber: 	String
});

var POISchema = new Schema({
	Name: String,
	Category: String,
	LocX: Number,
	LocY: Number,
	_company: {
		type: Schema.ObjectId,
		ref: 'Company'
	}
});

mongoose.model('POI', POISchema);
mongoose.model('Person', PersonSchema);
mongoose.model('Company', CompanySchema);
mongoose.model('Location', LocationSchema);