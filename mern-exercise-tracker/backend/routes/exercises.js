const router = require('express').Router();
const Exercise = require('../models/exercise.model');

// return all exercises
router
	.route('/')
	.get((req, res) => {
		Exercise.find()
			.then(exercises => res.json(exercises))
			.catch(err => res.status(400).json('Error ' + err));
	});

//retreive the data from client
router
	.route('/add')
	.post((req, res) => {
		const username = req.body.username;
		const description = req.body.description;
		const duration = Number(req.body.duration);
		const date = Date.parse(req.body.date);

		// Add exercise to model
		const newExercise = new Exercise({
			username,
			description,
			duration,
			date,
		});

		newExercise.save()
			.then(() => res.json('Exercise added!'))
			.catch(err => res.status(400).json('Error: '+ err));
	});

router
	.route('/:id')
	.get((req, res) => {
		Exercise.findById(req.params.id) // Get the _id from URL
			.then(exercise => res.json(exercise)) // exercise == the exercise returned from id
			.catch(err => res.status(400).json(`Error: ${err}`));
	});

router
	.route('/:id')
	.delete((req, res) => {
		Exercise.findByIdAndDelete(req.params.id)
			.then(() => res.json('Exercise deleted'))
			.catch(err => res.status(400).json(`Error: ${err}`));
	});

router
	.route('/update/:id')
	.post((req, res) => {
		Exercise.findById(req.params.id)
			.then(exercise => {
				exercise.username = req.params.username;
				exercise.description = req.params.description;
				exercise.duration = Number(req.params.description);
				exercise.date = Date.parse(req.body.date);

				Exercise.save()
					.then(() => res.json('Exercise updated'))
					.catch(err => res.status(400).json(`Error: ${err}`));
			})
			.catch(err => res.status(400).json(`Error: ${err}`));
	});


module.exports = router;