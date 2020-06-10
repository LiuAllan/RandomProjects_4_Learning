import React from 'react';
import Social from "../components/Social";
import profilepic from '../images/headshot.jpg';

class Contact extends React.Component
{
	render()
	{
		return (
			<div className="condiv contact" id="page-wrap">
				<h1 className="subtopic">Contact Me</h1>
				<img src={profilepic} className="profilepic" alt="" />
				<h3>Phone : (778)967-2371</h3>
				<h3>Email : allan.sf.liu@gmail.com</h3>
				<Social />
			</div>
			)
	}
}

export default Contact