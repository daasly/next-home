import React, { Component } from "react"
import Link from "next/link"

class WorkingProcess extends Component {
	render() {
		return (
			<section className="process-section pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<span>Report Rewind</span>
						<h2>Our Approach</h2>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="process-item">
								<img
									src={require("../../images/process/process1.png")}
									alt="image"
								/>

								<h3>People</h3>
								<p>
									Who is your team? How long have they been there? What do they
									do best?
								</p>

								<Link href="/project-details">
									<a className="process-btn">
										Read More
										<i className="flaticon-right"></i>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="process-item">
								<img
									src={require("../../images/process/process2.png")}
									alt="image"
								/>

								<h3>Process</h3>
								<p>
									What does your data look like? How do you get data from point
									A to point B?
								</p>

								<Link href="/project-details">
									<a className="process-btn">
										Read More
										<i className="flaticon-right"></i>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="process-item">
								<img
									src={require("../../images/process/process3.png")}
									alt="image"
								/>

								<h3>Technology</h3>
								<p>What are your data sources? How are they being utilized?</p>

								<Link href="/project-details">
									<a className="process-btn">
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

export default WorkingProcess
