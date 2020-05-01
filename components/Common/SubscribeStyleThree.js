import React, { Component } from "react"

class SubscribeStyleThree extends Component {
	state = {
		email: '',
		disabled: false
	}

	handleChange= e => {
		this.setState({email: e.target.value})
	}

	handleSubmit = e => {
		e.preventDefault()
		const form = event.target
		const data = new FormData(form)
		const xhr = new XMLHttpRequest()
		xhr.open(form.method, form.action)
		xhr.setRequestHeader("Accept", "application/json")
		xhr.send(data)
		this.setState({disabled: true})
		form.reset()
	}
	render() {
		return (
			<section className="subscribe-section p-0">
				<div className="container">
					<div className="subscribe-content-area mb-0">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-6">
								<div className="subscribe-image">
									<img
										src={require("../../images/subscribe.png")}
										alt="image"
									/>
								</div>
							</div>

							<div className="col-lg-6 col-md-6">
								<div className="subscribe-content">
									<h2>Don't Miss Our News and Updates</h2>
									<p>
										Data is constantly changing. At Daasly, we believe in having
										a deep knowledge of the past and a keen sense for new and
										future methods so we can improve and evolve as data changes.
										Stay up to date with us through our newsletter.
									</p>
								</div>

								<form className="newsletter-form" 
									action={`https://us-central1-daasly.cloudfunctions.net/addLead?sourceKey=${process.env.newsLetterKey}&email=${this.state.email}`}
									onSubmit={this.handleSubmit}
								>
									<input
										type="email"
										className="input-newsletter"
										placeholder="Enter your email"
										name="email"
										onChange={this.handleChange}
									/>
									{this.state.disabled ? (
									<button type="submit" disabled style={{backgroundColor: 'lightgrey'}}>Subscribed!</button>
								):
								<button type="submit">Subscribe</button>
								}
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default SubscribeStyleThree
