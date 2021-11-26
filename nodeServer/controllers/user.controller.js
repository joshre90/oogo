const db = require('../models');
const mongoose = require('mongoose');
const approval = db.approval;
const availability = db.availability;
const minder_roles = db.mider_roles;
const profile = db.profile;

exports.allAccess = (req, res) => {
	res.status(200).send('Public Content.');
};

exports.userBoard = (req, res) => {
	res.status(200).send('User Content.');
};

exports.adminBoard = (req, res) => {
	res.status(200).send('Welcome Admin');
};

//POST request
//Updating profile
exports.newProfile = async (req, res) => {
	const Profile = new profile({
		id_user: req.body.id_user,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		address: req.body.address,
		rate: req.body.rate,
		exp_description: req.body.experience,
		about_you: req.body.about_you,
		transport: req.body.transport,
		minder_roles: req.body.minder_roles,
		availability: req.body.availability,
		approval: '61a0e2f4a4adde8276eb50ab',
	});
	await Profile.save(function (error) {
		if (!error) {
			res.status(201).send('Your profile has been updated :)');
		} else {
			console.log('Something went wrong');
			console.log(error);
			res.status(500).send('Something went wrong');
		}
	});
};

//Updating a profile

//Listing minders
//Function to get the lsit of type services
exports.mindersList = async (req, res) => {
	query = profile.find().select({ firstName: 1, lastName: 1, _id: 1 });
	await query.exec(function (error, result) {
		if (!error) {
			if (!result) {
				return res.status(500).send('No Data');
			}
			console.log(result);
			return res.json(result);
		}
	});
};
