const mongoose = require('mongoose');

const Availability = mongoose.model(
	'Availability',
	new mongoose.Schema({
		Shift: String,
	})
);

module.exports = Availability;
