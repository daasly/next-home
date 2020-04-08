import React, { useState } from "react"
import { useRouter } from "next/router"

const ContactForm = () => {
	const router = useRouter()
	const [state, setState] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
		subject: "",
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = event.target
		const data = new FormData(form)
		const xhr = new XMLHttpRequest()
		xhr.open(form.method, form.action)
		xhr.setRequestHeader("Accept", "application/json")
		xhr.send(data)
		console.log(data)
		router.push("/thank-you")
	}
	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

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
							<form
								id="contactForm"
								action={`https://us-central1-daasly.cloudfunctions.net/addLead?sourceKey=I6HxQt5HGEvjCZLysbmk&email=${state.email}&name=${state.name}&firstName=&lastName=&phone=${state.phone}&subject=${state.subject}&message=${state.message}`}
								onSubmit={handleSubmit}
							>
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<div className="form-group">
											<input
												type="text"
												id="name"
												name="name"
												className="form-control"
												placeholder="Name"
												required
												onChange={handleChange}
												value={state.name}
											/>
										</div>
									</div>

									<div className="col-lg-6 col-md-6">
										<div className="form-group">
											<input
												type="email"
												id="email"
												name="email"
												className="form-control"
												placeholder="Email"
												required
												onChange={handleChange}
												value={state.email}
											/>
										</div>
									</div>

									<div className="col-lg-6 col-md-6">
										<div className="form-group">
											<input
												type="text"
												id="phone_number"
												name="phone"
												className="form-control"
												placeholder="Phone"
												required
												onChange={handleChange}
												value={state.phone}
											/>
										</div>
									</div>

									<div className="col-lg-6 col-md-6">
										<div className="form-group">
											<input
												type="text"
												id="subject"
												name="subject"
												className="form-control"
												placeholder="How can we help you?"
												required
												onChange={handleChange}
												value={state.subject}
											/>
										</div>
									</div>

									<div className="col-lg-12 col-md-12">
										<div className="form-group">
											<textarea
												id="message"
												name="message"
												className="form-control"
												rows="6"
												placeholder="Message"
												onChange={handleChange}
												value={state.message}
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
										<p>
											I consent to having Daasly use the provided information
											for direct marketing purposes including contact by phone,
											email, SMS, or other electronic means.
										</p>
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

export default ContactForm
