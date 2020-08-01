import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { Transaction } from './Transaction';

const TransactionList = () => {
	// Use our state from GlobalContext.
	// destructure so we don't have to use "context.transactions" everytime
	const { transactions, getTransactions } = useContext(GlobalContext);
	// console.log(transactions);

	useEffect(() => {
		getTransactions();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return(
		<div>
			<h3>History</h3>
			<ul className="list">
				{ transactions.map((transaction) => (
					<Transaction key={ transaction.id } transaction={transaction}/>
				) )}
			</ul>
		</div>
	);
}

export default TransactionList;