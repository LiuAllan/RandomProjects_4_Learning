const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, deleteTransactions } = require('../controllers/transactionController');

// router.get('/', (req, res) => {
// 	res.send('Hello');
// })

// When server receives a GET request, route and call controller
router
	.route('/')
	.get(getTransactions)
	.post(addTransactions);

router
	.route('/:id')
	.delete(deleteTransactions);

module.exports = router;