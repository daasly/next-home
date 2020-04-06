import React, { Component } from "react"
import Redirect from "next/link"

class ContactForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		window.location.href = "/thank-you"
	}

	render() {
		return (
			<div className="contact-section ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="contact-image">
								<img src={require("../../images/contact.png")} alt="image" />
							</div>
						</div>

						<div className="col-lg-6">
							<div className="contact-form">
								<h3>Send Us a Message</h3>
								<form id="contactForm" onSubmit={this.handleSubmit}>
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<input
													type="text"
													id="name"
													className="form-control"
													placeholder="Name"
													required
												/>
											</div>
										</div>

										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<input
													type="email"
													id="email"
													className="form-control"
													placeholder="Email"
													required
												/>
											</div>
										</div>

										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<input
													type="text"
													id="phone_number"
													className="form-control"
													placeholder="Phone"
													required
												/>
											</div>
										</div>

										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<input
													type="text"
													id="subject"
													className="form-control"
													placeholder="How can we help you?"
													required
												/>
											</div>
										</div>

										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<textarea
													id="message"
													className="form-control"
													rows="6"
													placeholder="Message"
												></textarea>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<h5>Preferred Contact Method</h5>
											<div className="form-group">
												<div
													style={{
														display: "flex",
														justifyContent: "space-between",
													}}
												>
													<label htmlFor="email">
														Email
														<input
															type="radio"
															id="email"
															className="form-control"
															name="email"
														/>
													</label>
													<label htmlFor="email">
														Phone
														<input
															type="radio"
															id="email"
															className="form-control"
															name="email"
														/>
													</label>
												</div>
											</div>
										</div>

										<div className="col-lg-12 col-md-12">
											<button type="submit" className="submit-btn mt-2">
												Send Message
											</button>
										</div>
										<div className="col-lg-12 col-md-12">
											<p>I consent to having Daasly use the provided information for direct marketing purposes including contact by phone, email, SMS, or other electronic means.</p>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ContactForm
