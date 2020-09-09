import React, { Component } from "react"

class ContactInfo extends Component {
	render() {
		return (
			<div className="contact-box pt-100 pb-70">
				<div className="container">
				<div className="section-title">
						<span>Contact Us</span>
						<h2>Let's Get to Work</h2>
						<p>We're here to help</p>
					</div>
					<div className="row">
					  
						<div className="col-lg-4 col-md-6">
							<div className="single-contact-box">
								<a href="mailto:info@daasly.com" target="_blank"><i className="fa fa-envelope"></i></a>
								<div className="content-title">
									<h3>Write Us</h3>
									<a href="mailto:info@daasly.com" target="_blank"><p>info@daasly.com</p></a>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-contact-box">
								<a href="tel:305-504-7315" target="_blank"><i className="fa fa-phone"></i></a>
								<div className="content-title">
									<h3>Call Us</h3>
									<a href="tel:305-504-7315">
										<p>+1 (305) 504-7315</p>
									</a>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
							<div className="single-contact-box">
								<a href="http://bit.ly/DiscoverDaasly1" target="_blank"><i className="fab fa-bity"></i></a>
								<div className="content-title">
									<h3>Book a Consultation</h3>
									<a href="http://bit.ly/DiscoverDaasly1" target="_blank"><p>bit.ly/DiscoverDaasly1</p></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ContactInfo
