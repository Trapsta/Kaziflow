const router = require('express').Router(),
	async = require('async'),
	auth = require('../middleware/auth'),
	db = require('../models');


router
	.route('/')
	.post([auth], (req, res) => {
		const owner = req.decoded.user._id;
		const { company, jobTitle, employmentType, jobOffer, description, questions, rating } = req.body;
		const category = req.body.categoryId;
		//const image = req.file.location;

		let interview = new db.Interview({
			owner,
			company,
			jobTitle,
			employmentType,
			jobOffer,
			description,
			questions,
			rating
		});
		interview.save();
		res.json({
			success: true,
			message: 'Successfully added interview'
		});
	});

router.get('/', (req, res, next) => {
	const paginate = 10;
	const page = req.query.page;
	async.parallel(
		[
			callback => {
				db.Interview.count({}, (err, count) => {
					callback(err, count);
				});
			},
			callback => {
				db.Interview.find({})
					.skip(paginate * page)
					.limit(paginate)
					//.populate('category')
					.populate('owner')
					.exec((err, products) => {
						if (err) return next(err);
						callback(err, products);
					});
			}
		],
		(err, results) => {
			const totalInterviews = results[0];
			const interviews = results[1];

			res.json({
				success: true,
				message: 'category',
				interviews,
				totalInterviews,
				pages: Math.floor(totalInterviews / paginate)
			});
		}
	);
});

router.get('/:id', (req, res) => {
	db.Interview.findById(req.params.id)
		//.populate('category')
		.populate('owner')
		//.deepPopulate('reviews.owner')
		.exec((err, interview) => {
			if (err) {
				res.json({
					success: false,
					message: 'Interview not found'
				});
			} else {
				res.json({
					success: true,
					interview
				});
			}
		});
});

module.exports = router;
