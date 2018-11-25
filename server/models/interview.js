const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InterviewSchema = new Schema({
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	id: Number,
	company: String,
	jobTitle: String,
	employmentType: Number,
	jobOffer: Boolean,
	description: String,
	questions: [
		{
			id: String,
			question: String
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

module.exports = mongoose.model('Interview', InterviewSchema);