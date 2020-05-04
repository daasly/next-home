import React, { Component } from 'react';

class GetStartedProject extends Component {
  render() {
    return (
      <section className={this.props.spacing ? this.props.spacing : "productive-section pt-100"}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="productive-content">
                <span>{this.props.smallTitle}</span>
                <h3>{this.props.title}</h3>
                {this.props.subtext ? null : 
                  <p>
                    {
                    this.props.body ? this.props.body : 'Get on track for a better, effective and more productive business by tackling your most difficult data problems with Daasly.'
                    }
                  </p>
                }
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
                {this.props.domo && (
                  <>
                    <br/>
                    <br/>
                    <br/>
                    <div style={{ display: 'flex'}}>
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
                  </>
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
