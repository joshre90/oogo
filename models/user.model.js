const mongoose = require('mongoose');

const User = mongoose.model(
	'User',
	new mongoose.Schema({
		email: {
			type: String,
			//required: true,
			unique: true,
		},

		password: {
			type: String,
			//required: true,
		},
		date: {
			type: Date,
			default: Date.now,
		},

		roles: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Role',
			},
		],

		/*
    transport:{

    }
    photo:{}*/
	})
);

module.exports = User;
