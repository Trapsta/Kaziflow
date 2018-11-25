const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalarySchema = new Schema({
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	id: Number,
	company: String,
	jobTitle: String,
	currentEmployer: Boolean,
	employmentType: Number,
	jobOffer: Boolean,
	grossMonthlyPay: Number,
	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Salary', SalarySchema);