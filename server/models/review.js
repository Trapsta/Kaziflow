const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	id: Number,
	company: String,
	currentEmployer: Boolean,
	jobTitle: String,
	employmentType: Number,
	headline: String,
	review: String,
	perks: [
		{
			id: String,
			perk: String
		}
	],
	rating: {
		type: Number,
		default: 0
	},
	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Review', ReviewSchema);