// Application state changes for each action
export default (state, action) => {
	switch(action.type) {
		case 'GET_TRANSACTIONS':
			return {
				...state,
				loading: false,
				transactions: action.payload
			}
		case 'DELETE_TRANSACTION':
			return {
				...state,
				transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
			}

		case 'ADD_TRANSACTION':
			return {
				// Make a copy of the state, then change what is needed
				...state,
				transactions: [...state.transactions, action.payload]
			}
		case 'TRANSACTION_ERROR':
			return {
				...state,
				error: action.payload
			}
		default:
			return state;
	}
}