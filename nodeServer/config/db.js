const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); //mongo Atlas url

//Connection to DB
const connectDB = async () => {
	try {
		await mongoose.connect(db, { useNewUrlParser: true });
		console.log('MongoDB connected...');
	} catch (err) {
		//Exit process with faliure
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
