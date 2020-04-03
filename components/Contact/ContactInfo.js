import React, { Component } from "react"

class ContactInfo extends Component {
	render() {
		return (
			<div className="contact-box pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="single-contact-box">
								<i className="fa fa-envelope"></i>
								<div className="content-title">
									<h3>Write Us</h3>
									<p>info@daasly.com</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-contact-box">
								<i className="fa fa-phone"></i>
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
								<i className="fa fa-map-marker"></i>
								<div className="content-title">
									<h3>Meet Us</h3>
									<p>Miami Lakes, FL 33016</p>
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
