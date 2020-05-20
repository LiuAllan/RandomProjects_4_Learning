import React from 'react';

class Social extends React.Component
{
	render()
	{
		return (
			<div className="social">
				<a href="https://github.com/LiuAllan" target="_blank" rel="noopener noreferrer">
					<i class="fab fa-github"></i>
				</a>

				<a href="www.linkedin.com/in/liuallan" target="_blank" rel="noopener noreferrer">
					<i class="fab fa-linkedin-in"></i>
				</a>

				<a href="https://www.instagram.com/aliu_ftw/" target="_blank" rel="noopener noreferrer">
					<i class="fab fa-instagram"></i>
				</a>

				<a href="https://twitter.com/aliu_ftw" target="_blank" rel="noopener noreferrer">
					<i class="fab fa-twitter"></i>
				</a>				
			</div>
			)
	}
}

export default Social