const mongoose = require('mongoose');

const Minder_Roles = mongoose.model(
	'Minder_Roles',
	new mongoose.Schema({
		Role: String,
	})
);

module.exports = Minder_Roles;
