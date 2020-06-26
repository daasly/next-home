import React, { Component } from "react"
import axios from 'axios'

class Subscribe extends Component {
	state = {
		email: '',
		disabled: false
	}

	handleChange = e => {
		this.setState({ email: e.target.value })
	}

	handleSubmit = e => {
		e.preventDefault()
		try {
			axios.post('https://us-central1-daasly.cloudfunctions.net/api/lead', { ...this.state, leadsourceID: process.env.newsLetterLeadSource })
				.then(() => {
					this.setState({ disabled: true, email: '' })
				})
		} catch (error) {
			console.log(error)
		}


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
								onSubmit={this.handleSubmit}
							>
								<input
									type="email"
									className="input-newsletter"
									name="email"
									placeholder="Enter your email"
									required
									value={this.state.email}
									onChange={this.handleChange}
								/>
								{this.state.disabled ? (
									<button type="submit" disabled style={{ backgroundColor: 'lightgrey' }}>Subscribed!</button>
								) :
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
