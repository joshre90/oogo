const mongoose = require('mongoose');

const Profile = mongoose.model(
	'Profile',
	new mongoose.Schema({
		id_user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},

		firstName: {
			type: String,
		},

		lastName: {
			type: String,
		},

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

		transport: {
			type: String,
		},

		minder_roles: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'minder_roles',
			},
		],

		approval: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'approval',
		},

		availability: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'availability',
		},

		//Photo missing
	})
);

module.exports = Profile;
