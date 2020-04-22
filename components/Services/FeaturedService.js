import React, { Component } from 'react';

class FeaturedService extends Component {
    render() {
        return (
            <section className="software-section pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="software-content">
                                <span>Featured Service</span>
                                <h2>Domo Consulting</h2>
                                <p>Daasly is a proud Certified Domo Platform, Professional Services and Technical Consultant Partners. Domo is a game-changing, cloud-based platform specializing in business intelligence tools and data visualization.</p>

                                <ul className="features-list">
                                    <li>
                                        <span>Connect Platforms</span>
                                    </li>
                                    <li>
                                        <span>Optimize Performance</span>
                                    </li>
                                    <li>
										<span>Align Metrics</span>
									</li>
									<li>
										<span>Predict Results</span>
									</li>
									<li>
										<span>Measure Data</span>
									</li>
									<li>
										<span>Visualize Information</span>
									</li>
									<li>
										<span>Analyze Information</span>
									</li>
									<li>
										<span>Automate Processes</span>
									</li>
                                </ul>
                                <ul style={{listStyleType: 'none', display: 'flex', padding: '0', marginTop: 10}}>
                                    <li style={{padding: 10}}>
								    	<img src="https://storage.cloud.google.com/daasly_public/domo-tc.svg" alt="sdvosb" style={{ width: 80}}/>
								    </li>
								    <li style={{padding: 10}}>
								    	<img src="https://storage.cloud.google.com/daasly_public/domo-ps.svg" alt="sdvosb" style={{ width: 80}}/>
								    </li>
								    <li style={{padding: 10}}>
								    	<img src="https://storage.cloud.google.com/daasly_public/domo-p.svg" alt="sdvosb" style={{ width: 80}}/>
								    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="software-image">
                                <img src={require("../../images/software.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturedService;