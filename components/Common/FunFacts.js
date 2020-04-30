import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class FunFacts extends Component {
	render() {
		return (
			<div className="fun-facts-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-sm-6">
							<ReactWOW animation="fadeInUp" delay=".2s">
								<div className="single-fun-fact">
									<h3>
										50B
										<span className="sign-icon">+</span>
									</h3>
									<p style={{ textAlign: "center" }}>Rows Analyzed</p>
								</div>
							</ReactWOW>
						</div>

						<div className="col-lg-3 col-sm-6">
							<ReactWOW animation="fadeInUp" delay=".3s">
								<div className="single-fun-fact">
									<h3>
										10K
										<span className="sign-icon">+</span>
									</h3>
									<p>Visualizations Generated</p>
								</div>
							</ReactWOW>
						</div>

						<div className="col-lg-3 col-sm-6">
							<ReactWOW animation="fadeInUp" delay=".4s">
								<div className="single-fun-fact">
									<h3>
										2K
										<span className="sign-icon">+</span>
									</h3>
									<p>KPIs Developed</p>
								</div>
							</ReactWOW>
						</div>

						<div className="col-lg-3 col-sm-6">
							<ReactWOW animation="fadeInUp" delay=".5s">
								<div className="single-fun-fact">
									<h3>
										10M
										<span className="sign-icon">+</span>
									</h3>
									<p>Lines of Code Written</p>
								</div>
							</ReactWOW>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default FunFacts;