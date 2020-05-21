import React from 'react';
import dataviz from '../images/dataviz.jpg';
import architecture from '../images/architecture.png';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

class Projects extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
			'myskills':['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Java', 'C', 'C#', 'Python', 'PostgreSQL']
		};
	}

	render()
	{
		return (
			<div className="condiv projects" id="page-wrap">
			
				<h1 className="subtopic">My Projects</h1>
				<h2>Data Visualization</h2>
				<div className="dataviz">
					<img src={dataviz} alt="" />
					<br />
					<AwesomeButton type="primary" href="https://liuallan.github.io/Data-Visualization-VancouverHousingMarket/" target="_blank">
				    	Check out the project on Github
				    </AwesomeButton>
					<br /><br />
				</div>

				<h2>Day Trading Scalability</h2>
				<div className="architecture">
					<img src={architecture} alt="" />
					<br />
					<AwesomeButton type="primary" href="https://github.com/LiuAllan/SENG468_ScalabilityDayTradeInc" target="_blank">
				    	Check out the project on Github
				    </AwesomeButton>
					<br /><br />
				</div>

				<h1 className="subtopic">My Programming Languages</h1>
				<ul>
					{this.state.myskills.map(
						(x) => {return <li>{x}</li>}
						)}
				</ul>
			</div>
			)
	}
}

export default Projects