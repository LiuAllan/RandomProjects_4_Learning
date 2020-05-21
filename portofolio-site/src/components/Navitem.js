import React from 'react';
import {Link} from 'react-router-dom';

//<Link> is a component that acts the same as a <a> tag in HTML. "to=" is the same as the ahref in <a href="">
class Navitem extends React.Component
{
	render()
	{
		return (
			<li id={this.props.item}>
				{/*<Link to={this.props.tolink} onClick={this.props.activec.bind(this,this.props.item)}>*/}
				<Link to={this.props.tolink} onClick={this.props.clicked}>
					{this.props.item}
				</Link>
			</li>
			);
	}
}

export default Navitem