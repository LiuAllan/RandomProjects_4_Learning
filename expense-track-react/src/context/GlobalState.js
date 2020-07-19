import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State for GLOBAL STATES
const initialState = {
	transactions: []
}

// Create context ("Store")
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
	// Used to call an action
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions that make calls to the reducer
	const deleteTransaction = (id) => {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		});
	}

	const addTransaction = (transaction) => {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		});
	}

	// Pass in the state/functions so the childrens can access them
	return (
		<GlobalContext.Provider value={{
			transactions: state.transactions,
			deleteTransaction,
			addTransaction,
		}}>
			{ children }
		</GlobalContext.Provider>
	);
}