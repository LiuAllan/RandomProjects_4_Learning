import React, {Component} from 'react';
import profilepic from '../images/headshot.png';
import ReactTypingEffect from 'react-typing-effect';
import Social from "../components/Social";

class Home extends Component
{
	render()
	{
		return (
			<div className="condiv home">
				<img src={profilepic} className="profilepic" alt="" />
				<br />
				<ReactTypingEffect className="typingeffect"
					text={["Hey! My name is Allan Liu, I am a Junior Developer"]} speed={100} eraseDelay={700} />
				<Social />
			</div>
			);
	}
}

export default Home