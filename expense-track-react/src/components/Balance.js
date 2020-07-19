import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
	// use our "store"
	const context = useContext(GlobalContext);

	const amounts = context.transactions.map(transaction => transaction.amount);
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

	return (
		<div>
			<h4>Your Balance</h4>
			<h1>${total}</h1>
		</div>
	);
}

export default Balance;