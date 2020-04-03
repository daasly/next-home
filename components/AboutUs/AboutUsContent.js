import React, { Component } from "react"
import Link from "next/link"

class AboutUsContent extends Component {
	render() {
		return (
			<section className="about-section ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="about-image">
								<img src={require("../../images/about.png")} alt="image" />
							</div>
						</div>

						<div className="col-lg-6">
							<div className="about-content">
								<span>Why Daasly</span>
								<h2>About Us</h2>
								<p>
									We are a team of experienced professionals with a proven track
									record for delivering results. Daasly was founded in 2015 and
									is based out of Miami, FL. We are proud to be a latino and
									veteran-led company. Our team of seasoned pros believe in
									working diligently until our clients’ goals are met. We are
									dedicated, qualified, and passionate about data. Now, let’s
									get to work.
								</p>

								<ul className="about-list">
									<li>
										<i className="flaticon-tick"></i>
										Service Disabled Veteran Owned Small Business Certified
									</li>
									<li>
										<i className="flaticon-tick"></i>
										Over 10 years of proven experience
									</li>
									<li>
										<i className="flaticon-tick"></i>
										Wide network of industry experts
									</li>
									<li>
										<i className="flaticon-tick"></i>
										U.S. based team and operations
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default AboutUsContent
