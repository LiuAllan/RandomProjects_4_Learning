import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import React from 'react';
import 'rc-banner-anim/assets/index.css';
import 'rc-queue-anim/assets/index.css';
import 'rc-tween-one/assets/index.css';
import dataviz from '../images/dataviz.png';
import sickfits from '../images/sickfits.png';
import architecture from '../images/architecture.png';

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

export default class Demo extends React.Component 
{
	constructor(props) 
    {
		super(props);
	    this.state = 
	    {
	      delay: 0,
	    };
	    this.openSlide = false;
	}

  	onChange = (e, int) => {
	    if (int === 1 && e === 'after' && !this.openSlide) {
	      	this.setState({
	        	delay: 600,
	      	});
	      	this.openSlide = true;
	    }
	}

	render() 
	{
		return (
			<div className="banner-container">
					<BannerAnim
						autoPlay
						className="banner-scale"
						prefixCls="banner-user" 
						type="across"
						onChange={this.onChange}
						duration={2000}
						ease="easeInOutExpo"
						sync
						ref={(c) => { this.banner = c; }}
					>
						<Element 
							key="slide1"
							prefixCls="banner-user-elem"
							leaveChildHide
						>
								<BgElement
									key="bg"
									className="bg"
									style={{
										backgroundImage: `url(${dataviz})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									}}
								/>

									<QueueAnim 
										key="1" 
										name="QueueAnim" 
										delay={[this.state.delay, 0]} 
										className="banner-text"
									>
										<a 
											href="https://liuallan.github.io/Data-Visualization-VancouverHousingMarket/" 
											target="__blank"
											style={{
												  textDecoration: 'none'
											}}
										>
											<h1 key="h1">Data Visualization: Vancouver Housing Market</h1>
										</a>
										<p key="p">Visualize how housing prices and rent are changing in relation to population</p>
									</QueueAnim>

									<TweenOne 
										key="2"
										animation={{ y: 50, opacity: 0, type: 'from', delay: this.state.delay + 400 }}
										className="banner-subtext"
									>
										D3, JavaScript, CSS, HTML, EasyPHP, Node.js
									</TweenOne>
						</Element>


						<Element 
							key="slide2"
							prefixCls="banner-user-elem"
							leaveChildHide
						>
							<BgElement
								key="bg"
								className="bg"
								style={{
									backgroundImage: `url(${sickfits})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							/>
								<QueueAnim 
									name="QueueAnim" 
									key="1" delay={[600, 0]} 
									className="banner-text"
								>
									<a 
										href="https://sickfits-allan-react-prod.herokuapp.com/" 
										target="__blank"
										style={{
											  textDecoration: 'none'
										}}
									>
										<h1 key="h1">Sick Fits</h1>
									</a>
									<p key="p">Clothing store for purchasing and selling clothing</p>
								</QueueAnim>

								<TweenOne 
									animation={{ y: 50, opacity: 0, type: 'from', delay: 1000 }} 
									key="2"
									className="banner-subtext"
								>
									React.js, Next.js, Node.js, Apollo, GraphQL, GraphQL Yoga, Prisma, Jest/Enzyme
								</TweenOne>
						</Element>

						<Element 
							key="slide3"
							prefixCls="banner-user-elem"
							leaveChildHide
						>
							<BgElement
								key="bg"
								className="bg"
								style={{
									backgroundImage: `url(${architecture})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							/>
								<QueueAnim 
									name="QueueAnim" 
									key="1" delay={[600, 0]} 
									className="banner-text"
								>
								<a
									href="https://github.com/LiuAllan/SENG468_ScalabilityDayTradeInc"
									target="__blank"
									style={{
										textDecoration: 'none'
									}}
								>
									<h1 key="h1">Software Scalability: DayTrading Inc.</h1>
								</a>
									<p key="p">Scalability project done at University of Victoria on stock trading simulated with 10,000 user transactions</p>
								</QueueAnim>

								<TweenOne 
									animation={{ y: 50, opacity: 0, type: 'from', delay: 1000 }} 
									key="2"
									className="banner-subtext"
								>
									Python, JavaScript, HTML, CSS, psycopg2, PostgreSQL, Docker, Profiling
								</TweenOne>
						</Element>
					</BannerAnim>
			</div>
		);
	}
}