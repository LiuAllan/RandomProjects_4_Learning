import React, {Component} from 'react';
import PDF from '../images/allanliu_resume.pdf';
import Social from "../components/Social";
import ReactTypingEffect from 'react-typing-effect';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Banner from '../components/Banner';

class Home extends Component
{
	render()
	{
		return (
			<div className="condiv home" id="page-wrap">
				<Banner />
				<ReactTypingEffect className="typingeffect"
					text={["Hey, I'm Allan Liu!"]} speed={100} eraseDelay={700} 
				/>
			    <AwesomeButton type="primary" href={PDF} target="_blank">
			    	Check out my resume
			    </AwesomeButton>		
				<Social />
			</div>
		);
	}
}

export default Home