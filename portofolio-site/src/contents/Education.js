import React from 'react';
import Widecard from "../components/Widecard";

class Education extends React.Component
{
	render()
	{
		return(
			<div className="condiv education" id="page-wrap">
				<h1 className="subtopic">My Education</h1>
				<Widecard 
					title="Bachelors of Computer Science | Software Systems Option"
					school="University of Victoria"
					from="2013"
					end="2020"
				/>
				<Widecard 
					title="British Columbia Certificate of Graduation"
					school="Lambrick Park Secondary School"
					from="2010"
					end="2013"
				/>
			</div>
			)
	}
}

export default Education