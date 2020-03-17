import React, { Component } from "react"
import Link from "next/link"

class Footer extends Component {
	render() {
		let currentYear = new Date().getFullYear()

		return (
			<React.Fragment>
				{/* Top Footer Section */}
				<footer className="footer-section ptb-100">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6 col-sm-6">
								<div className="single-footer-widget">
									<div className="footer-heading">
										<h3>About Us</h3>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>

									<ul className="footer-social">
										<li>
											<Link href="https://www.linkedin.com/company/daasly">
												<a>
													<i className="fab fa-linkedin"></i>
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-2 col-md-6 col-sm-6">
								<div className="single-footer-widget">
									<div className="footer-heading">
										<h3>Important Links</h3>
									</div>

									<ul className="footer-quick-links">
										<li>
											<Link href="/">
												<a>Home</a>
											</Link>
										</li>
										<li>
											<Link href="/about-us">
												<a>About Us</a>
											</Link>
										</li>
										<li>
											<Link href="/services">
												<a>Services</a>
											</Link>
										</li>
										<li>
											<Link href="/blog">
												<a>Blog</a>
											</Link>
										</li>
										<li>
											<Link href="/contact">
												<a>Contact</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-2 col-md-6 col-sm-6">
								<div className="single-footer-widget">
									<div className="footer-heading">
										<h3 style={{ color: "transparent" }}>' '</h3>
									</div>

									{/* <ul className="footer-quick-links">
										<li>
											<Link href="/">
												<a>Home</a>
											</Link>
										</li>
										<li>
											<Link href="/blog">
												<a>Blog</a>
											</Link>
										</li>
										<li>
											<Link href="/services">
												<a>Services</a>
											</Link>
										</li>
										<li>
											<Link href="/partner">
												<a>Client</a>
											</Link>
										</li>
										<li>
											<Link href="/contact">
												<a>Contact</a>
											</Link>
										</li>
									</ul> */}
								</div>
							</div>

							<div className="col-lg-4 col-md-6 col-sm-6">
								<div className="single-footer-widget">
									<div className="footer-heading">
										<h3>Contact Info</h3>
									</div>

									<div className="footer-info-contact">
										<a href="tel:305-504-7315">
											<i className="flaticon-call-answer"></i>
										</a>
										<a href="tel:305-504-7315">
											<h3>Phone</h3>
										</a>
										<a href="tel:305-504-7315">
											<span>+1 (305) 504-7315</span>
										</a>
									</div>

									<div className="footer-info-contact">
										<a href="mailto:info@daasly.com" target="_blank">
											<i className="flaticon-envelope"></i>
										</a>
										<a href="mailto:info@daasly.com" target="_blank">
											<h3>Email</h3>
										</a>
										<a href="mailto:info@daasly.com" target="_blank">
											<span>info@daasly.com</span>
										</a>
									</div>

									<div className="footer-info-contact">
										<a href="http://maps.google.com/?q=Daasly" target="_blank">
											<i className="flaticon-maps-and-flags"></i>
										</a>
										<a href="http://maps.google.com/?q=Daasly" target="_blank">
											<h3>Address</h3>
										</a>
										<a href="http://maps.google.com/?q=Daasly" target="_blank">
											<span>8004 NW 154th St #632 Miami Lakes, FL 33016</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="lines">
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
					</div>

					<div className="partner-shape-img1">
						<img
							src={require("../../images/shape/partnar-shape-2.png")}
							alt="image"
						/>
					</div>
				</footer>
				{/* End Top Footer Section */}

				{/* Bottom Footer Section */}
				<div className="copyright-area">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-6">
								<p>
									&copy; {currentYear} Raxr. All Rights Reserved by
									<a href="https://envytheme.com/" target="_blank">
										EnvyTheme
									</a>
								</p>
							</div>

							<div className="col-lg-6 col-md-6">
								<ul>
									<li>
										<Link href="/terms-condition">
											<a>Terms & Conditions</a>
										</Link>
									</li>
									<li>
										<Link href="/privacy-policy">
											<a>Privacy Policy</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* End Bottom Footer Section */}
			</React.Fragment>
		)
	}
}

export default Footer
