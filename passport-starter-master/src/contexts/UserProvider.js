import React, {createContext, useState, useEffect } from 'react';
const Context = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});

	useEffect(() => {
		fetch('/user')
			.then(res => res.json())
			.then(res => setUser(res))
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<Context.Provider value={user}>
			{children}
		</Context.Provider>
	)
}

UserProvider.Context = Context;

export default UserProvider;