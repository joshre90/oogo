const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.approval = require('./approval.model');
db.availability = require('./availability.model');
db.mider_roles = require('./minder_roles.model');
db.profile = require('./profile.model');
db.role = require('./role.model');
db.user = require('./user.model');

db.ROLES = ['user', 'admin'];

module.exports = db;
