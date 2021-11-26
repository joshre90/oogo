const mongoose = require('mongoose');

const Profile = mongoose.model(
	'Profile',
	new mongoose.Schema({
		address: {
			type: String,
		},

		rate: {
			type: Number,
		},

		exp_description: {
			type: String,
		},

		about_you: {
			type: String,
		},

		Transport: {
			type: String,
		},

		minder_roles: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'minder_roles',
			},
		],

		approval: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'approval',
			},
		],

		availability: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'availability',
			},
		],

		//Photo missing
	})
);

module.exports = Profile;
