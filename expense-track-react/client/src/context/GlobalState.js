import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial State for GLOBAL STATES
const initialState = {
	transactions: [],
	err: null,
	loading: true
}

// Create context ("Store")
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
	// Used to call an action
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions that make calls to the reducer
	const deleteTransaction = async(id) => {
		try {
			await axios.delete(`/api/v1/transactions/${id}`);
			dispatch({
				type: 'DELETE_TRANSACTION',
				payload: id
			});
		}
		catch(err) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: err.response.data.error
			});
		}

	
	}

	const addTransaction = async(transaction) => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		try {
			const res = await axios.post('/api/v1/transactions', transaction, config);
				dispatch({
					type: 'ADD_TRANSACTION',
					payload: res.data.data
				});
		}
		catch(err) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: err.response.data.error
			});
		}
	}

	// fetch from the backend database
	const getTransactions = async() => {
		try {
			const res = await axios.get('/api/v1/transactions');
			dispatch({
				type: 'GET_TRANSACTIONS',
				payload: res.data.data
			});
		}
		catch(err) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: err.response.data.error
			});
		}
	}


	// Pass in the state/functions so the childrens can access them
	return (
		<GlobalContext.Provider value={{
			transactions: state.transactions,
			deleteTransaction,
			addTransaction,
			getTransactions,
			error: state.error,
			loading: state.loading
		}}>
			{ children }
		</GlobalContext.Provider>
	);
}