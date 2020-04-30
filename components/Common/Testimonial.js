import React, { Component } from "react"
import dynamic from "next/dynamic"
const OwlCarousel = dynamic(import("react-owl-carousel3"))

const options = {
	loop: true,
	nav: true,
	dots: true,
	autoplayHoverPause: true,
	autoplay: true,
	smartSpeed: 1000,
	margin: 20,
	navText: [
		"<i class='fa fa-chevron-left'></i>",
		"<i class='fa fa-chevron-right'></i>"
	],
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 2
		},
		1200: {
			items: 1
		}
	}
}

class Testimonial extends Component {
	_isMounted = false
	state = {
		display: false
	}
	componentDidMount() {
		this._isMounted = true
		this.setState({ display: true })
	}
	componentWillUnmount() {
		this._isMounted = false
	}

	render() {
		return (
			<section className="testimonial-section ptb-100">
				<div className="container">
					<div className="section-title">
						<span>Testimonials</span>
						<h2>What Our Clients Say</h2>
					</div>

					{this.state.display ? (
						<OwlCarousel
							className="testimonial-slider owl-carousel owl-theme"
							{...options}
						>
							<div className="testimonial-single-item">
								<div className="testimonial-image">
									<img
										src={require("../../images/clients/dan_antonson.jpeg")}
										alt="image"
									/>
								</div>

								<div className="testimonial-info">
									<h3>Dan Antonson</h3>
									<span>Associate Director- Marketing Technology</span>
								</div>

								<div className="testimonial-content">
									<div className="icon">
										<i className="flaticon-quote"></i>
									</div>
									<p>
										Daasly has been a solid resource for data onboarding. They know their way around data and have been instrumental in developing our overall data strategy.
									</p>
								</div>
							</div>

							<div className="testimonial-single-item">
								<div className="testimonial-image">
									<img
										src={require("../../images/clients/RonMerryman.jpeg")}
										alt="image"
									/>
								</div>

								<div className="testimonial-info">
									<h3>Ron Merryman</h3>
									<span>Vice President - Information Technology</span>
								</div>

								<div className="testimonial-content">
									<div className="icon">
										<i className="flaticon-quote"></i>
									</div>
									<p>
										Daasly has become one of our greatest partnerships.  They don't just understand data, they understand our data and routinely demonstrate their ability to exceed our expectations both visually and conceptually.
									</p>
								</div>
							</div>

							<div className="testimonial-single-item">
								<div className="testimonial-image">
									<img
										src={require("../../images/clients/dan_antonson.jpeg")}
										alt="image"
									/>
								</div>
								<div className="testimonial-info">
									<h3>Dan Antonson</h3>
									<span>Associate Director- Marketing Technology</span>
								</div>
								<div className="testimonial-content">
									<div className="icon">
										<i className="flaticon-quote"></i>
									</div>
									<p>
										Daasly has been a solid resource for data onboarding. They know their way around data and have been instrumental in developing our overall data strategy.
									</p>
								</div>
							</div>
						</OwlCarousel>
					) : (
						""
					)}
				</div>

				{/* Shape Images */}
				<div className="testimonial-shape">
					<img
						src={require("../../images/shape/testimonial-shape-1.png")}
						alt="main-image"
					/>
				</div>
				<div className="testimonial-shape-img1">
					<img
						src={require("../../images/shape/testimonial-shape-2.png")}
						alt="main-image"
					/>
				</div>
				<div className="testimonial-shape-img2">
					<img
						src={require("../../images/shape/testimonial-shape-3.png")}
						alt="main-image"
					/>
				</div>
			</section>
		)
	}
}

export default Testimonial
