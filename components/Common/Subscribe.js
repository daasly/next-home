import React, { Component } from "react"

class Subscribe extends Component {
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
							<form 
								className="newsletter-form" 
								action={`https://us-central1-daasly.cloudfunctions.net/addLead?sourceKey=${process.env.newsLetterKey}&email=${this.state.email}`}
								onSubmit={this.handleSubmit}
								>
								<input
									type="email"
									className="input-newsletter"
									name="email"
									placeholder="Enter your email"
									required
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
		)
	}
}

export default Subscribe
