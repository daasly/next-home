import React, { Component } from 'react';

class GetStartedProject extends Component {
  render() {
    return (
      <section className="productive-section pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="productive-content">
                <span>{this.props.smallTitle}</span>
                <h3>{this.props.title}</h3>
                <p>
                  Get on track for a better, effective and more productive
                  business by tackling your most difficult data problems with
                  Daasly. Automate your data pipeline, save time and discover
                  more.
                </p>
                {this.props.contact ? (
                  <div className="productive-btn">
                    <a className="productive-btn-one" href="/contact">
                      Get Started
                      <span></span>
                    </a>
                    <a href="/contact" className="productive-btn">
                      Contact Us
                      <span></span>
                    </a>
                  </div>
                ) : (
                  <div className="productive-btn">
                    <a className="productive-btn-one" href="/contact">
                      Schedule a Consultation
                      <span></span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="productive-image">
                <img src={require('../../images/productive.png')} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GetStartedProject;
