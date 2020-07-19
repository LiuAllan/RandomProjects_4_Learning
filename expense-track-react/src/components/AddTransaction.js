import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
	// Hooks state. [state, function to manipulate state = useState('default value')]
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	const { addTransaction } = useContext(GlobalContext);
	// console.log(addTransaction);

	const onSubmit = e => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 1000000000),
			text,
			amount: +amount,
		}

		addTransaction(newTransaction);
	}

	return(
		<>
			<h3>Add new transaction</h3>
			<form onSubmit={onSubmit}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
				</div>
				<div className="form-control">
					<label htmlFor="amount"
					>
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value) }/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	);
}

export default AddTransaction;