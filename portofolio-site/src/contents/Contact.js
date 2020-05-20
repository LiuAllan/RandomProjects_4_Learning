import React from 'react';
import Social from "../components/Social";

class Contact extends React.Component
{
	render()
	{
		return (
			<div className="condiv">
				<h1 className="subtopic">Contact Me</h1>
				<h3>Phone : (778)967-2371</h3>
				<h3>Email : allanliu@uvic.ca</h3>
				<Social />
			</div>
			)
	}
}

export default Contact