const mongoose = require('mongoose');

const Approval = mongoose.model(
	'Approval',
	new mongoose.Schema({
		Shift: String,
	})
);

module.exports = Approval;
