const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
mongoose.set('debug', true);

module.exports.User = require('./user');
module.exports.Review = require('./review');
module.exports.Salary = require('./salary');
module.exports.Interview = require('./interview');