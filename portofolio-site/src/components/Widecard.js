import React from 'react';

class Widecard extends React.Component
{
	render()
	{
		return (
			<div className="widecard">
				<div className="compdet">
					<h3>{this.props.title}</h3>
					<h4 className="secondtext"><i>{this.props.school}</i></h4>
					<h4 className="secondtext">{this.props.from} - {this.props.end}</h4>
				</div>
			</div>
			)
	}
}

export default Widecard