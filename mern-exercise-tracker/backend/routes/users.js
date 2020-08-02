const router = require('express').Router();
const User = require('../models/user.model');

// Path /users/
// GET request - server sends a response
router
	.route('/')
	.get((req, res) => {
		// Controllers
		User.find()
			.then(users => res.json(users)) // return all users from db in json format
			.catch(err => res.status(400).json('Error: ' + err));
	});

// Path /users/add
// POST requst - server receiving a response from client
router
	.route('/add')
	.post((req, res) => {
		const username = req.body.username; // retrieve the username from json request body
		const newUser = new User({ 
			username // add username in User model
		});

		newUser.save()
			.then(() => res.json('User added'))
			.catch((err) => res.status(400).json('Error ' + err));
	});

module.exports = router;