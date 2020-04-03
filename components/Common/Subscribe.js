import React, { Component } from "react"

class Subscribe extends Component {
	render() {
		return (
			<div className="subscribe-area">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6">
							<div className="subscribe-content">
								<h2>Stay Updated</h2>
								<span className="sub-title">Sign up for our newsletter</span>
							</div>
						</div>

						<div className="col-lg-6 col-md-6">
							<form className="newsletter-form">
								<input
									type="email"
									className="input-newsletter"
									name="email"
									placeholder="Enter your email"
									required
								/>
								<button type="submit">Subscribe</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Subscribe
