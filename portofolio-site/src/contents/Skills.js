import React from 'react';

class Skills extends React.Component
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
			<div className="condiv skills" id="page-wrap">
				<h1 className="subtopic">My Skills</h1>
				<ul>
					{this.state.myskills.map(
						(x) => {return <li>{x}</li>}
						)}
				</ul>
			</div>
			)
	}
}

export default Skills