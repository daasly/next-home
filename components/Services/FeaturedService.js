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
                                <h2>Google Analytics</h2>
                                <p>Complete and effective Google Analytics-wide management.</p>

                                <ul className="features-list">
                                    <li>
                                        <span>Google Tag Manager Implementation</span>
                                    </li>
                                    <li>
                                        <span>Measurement Framework Creation</span>
                                    </li>
                                    <li>
                                        <span>Google Optimize Implementation</span>
                                    </li>
                                    <li>
                                        <span>Data Visualization and Recording</span>
                                    </li>
                                    <li>
                                        <span>Google Data Studio Implementation</span>
                                    </li>
                                    <li>
                                        <span>Custom Client Training and Support</span>
                                    </li>
                                    <li>
                                        <span>Audits and Diagnostics</span>
                                    </li>
                                    <li>
                                        <span>Testing and Optimization</span>
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