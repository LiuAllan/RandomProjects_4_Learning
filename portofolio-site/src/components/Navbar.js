//import React, {Component} from 'react';
import React from 'react';
import Navitem from './Navitem';
import { push as Menu } from 'react-burger-menu';

//Styling controlled by App.css
class Navbar extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={'NavItemActive' : ''}

		this.state ={menuOpen: false}
	}

	handleStateChange(state)
	{
		this.setState({menuOpen: state.isOpen});
		console.log('opened');
	}

	closeMenu()
	{
		this.setState({menuOpen: false});
		console.log('closed');
	}


	// x is the Navitem id that is clicked. We pass the activeitem function to Navitem so that it will run the function when item is clicked.
	// Checks if there is anything stored in NavItemActive. If there is then remove the .active CSS
	activeitem=(x) => {
		if(this.state.NavItemActive.length > 0)
		{
			document.getElementById(this.state.NavItemActive).classList.remove('active');
		}
		this.setState({'NavItemActive':x}, ()=> {
			document.getElementById(this.state.NavItemActive).classList.add('active');
		});
	};

	render()
	{
		return (
			<div id="outer-container">
				<Menu 
					pageWrapId={ "page-wrap" }
					isOpen={this.state.menuOpen}
					onStateChange={(state) => this.handleStateChange(state)}
				>
						<Navitem item="Home" tolink="/" clicked={() => this.closeMenu()} />
						<Navitem item="About" tolink="/about" clicked={() => this.closeMenu()} />
						<Navitem item="Education" tolink="education" clicked={() => this.closeMenu()} />
						<Navitem item="Skills" tolink="skills" clicked={() => this.closeMenu()} />
						<Navitem item="Contact" tolink="contact" clicked={() => this.closeMenu()} />
						{/*
						<Navitem item="Home" tolink="/" activec={this.activeitem} />
						<Navitem item="About" tolink="/about" activec={this.activeitem} />
						<Navitem item="Education" tolink="education" activec={this.activeitem} />
						<Navitem item="Skills" tolink="skills" activec={this.activeitem} />
						<Navitem item="Contact" tolink="contact" activec={this.activeitem} />
					*/}
	        	</Menu>
	        </div>
			);
	}
}

//ES6 module system
//exports Navitem component to Navitem module. Use import to use.
export default Navbar