import React, { Component } from "react"
import Link from "next/link"

class OurServices extends Component {
	render() {
		return (
			<section className="services-section pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<span>Our Services</span>
						<h2>What We Do</h2>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="single-services-box">
								<div className="icon">
									<i className="flaticon-big-data"></i>
								</div>

								<h3>Data Strategy</h3>
								<p>
									Map the course to a sound and scalable analytical platform
								</p>

								<Link href="/data-strategy">
									<a className="service-btn">
										Read More
										<i className="flaticon-right"></i>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-services-box">
								<div className="icon">
									<i className="flaticon-data-analytics"></i>
								</div>

								<h3>Data Enablement</h3>
								<p>Execute all the components of your data strategy</p>

								<Link href="/data-enablement">
									<a className="service-btn">
										Read More
										<i className="flaticon-right"></i>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-services-box">
								<div className="icon">
									<i className="flaticon-document"></i>
								</div>
								<h3>Data Management</h3>
								<p>Continuous support and execution of your data strategy</p>

								<Link href="/data-management">
									<a className="service-btn">
										Read More
										<i className="flaticon-right"></i>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-services-box">
								<div className="icon">
									<i className="flaticon-chart"></i>
								</div>
								<h3>Data-Centric Software Development</h3>
								<br/>
								<p>
									Data-centric, full-stack web development, including
									visualizations and API integration
								</p>

								<Link href="/dc-software-development">
									<a className="service-btn">
										Read More
										<i className="flaticon-right"></i>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-services-box">
								<div className="icon">
									<i className="flaticon-science"></i>
								</div>
								<h3>Google Analytics</h3>
								<br/>
								<p>Google Tag Manager and Google Analytics management</p>

								<Link href="/google-analytics">
									<a className="service-btn">
										Read More
										<i className="flaticon-right"></i>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-services-box">
								<div className="icon">
									<i className="flaticon-data-management"></i>
								</div>
								<h3>Business Intelligence</h3>
								<br/>
								<p>
									Domo Certified collection and analysis of business information
								</p>

								<Link href="/business-intelligence-consulting">
									<a className="service-btn">
										Read More
										<i className="flaticon-right"></i>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default OurServices
