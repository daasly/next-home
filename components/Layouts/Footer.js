import React, { Component } from 'react'
import Link from 'next/link'

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear()

    return (
      <React.Fragment>
        <footer className='footer-section ptb-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='single-footer-widget'>
                  <div className='footer-heading'>
                    <h3>About Us</h3>
                  </div>
                  <p>
                    Daasly’s augmented and outsourced Business Intelligence
                    service enables analytics leaders to deliver a well-managed
                    and scalable analytics function with accurate and timely
                    insights. We ensure you get the expertise you need, without
                    the expense and overhead of hiring internally.
                  </p>
                  <ul className='footer-social'>
                    {/* <li>
											<a
												href="https://www.linkedin.com/company/daasly"
												target="_blank"
											>
												<i className="fab fa-linkedin"></i>
											</a>
										</li> */}
                    <li>
                      <img
                        src={require('../../images/SDVOSB edited.png')}
                        alt='sdvosb'
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-2 col-md-6 col-sm-6'>
                <div className='single-footer-widget'>
                  <div className='footer-heading'>
                    <h3>Important Links</h3>
                  </div>
                  <ul className='footer-quick-links'>
                    <li>
                      <Link href='/'>
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/about-us'>
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/services'>
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog'>
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/contact'>
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-2 col-md-6 col-sm-6'>
                <div className='single-footer-widget'>
                  <div className='footer-heading'></div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='single-footer-widget'>
                  <div className='footer-heading'>
                    <h3>Contact Info</h3>
                  </div>

                  <div className='footer-info-contact'>
                    <a href='tel:305-504-7315'>
                      <i className='flaticon-call-answer'></i>
                    </a>
                    <a href='tel:305-504-7315'>
                      <h3>Phone</h3>
                    </a>
                    <a href='tel:305-504-7315'>
                      <span>+1 (305) 504-7315</span>
                    </a>
                  </div>

                  <div className='footer-info-contact'>
                    <a href='mailto:info@daasly.com' target='_blank'>
                      <i className='flaticon-envelope'></i>
                    </a>
                    <a href='mailto:info@daasly.com' target='_blank'>
                      <h3>Email</h3>
                    </a>
                    <a href='mailto:info@daasly.com' target='_blank'>
                      <span>info@daasly.com</span>
                    </a>
                  </div>
                  <div className='footer-info-contact'>
                    <a
                      href='https://www.linkedin.com/company/daasly/'
                      target='_blank'
                    >
                      <i className='fab fa-linkedin'></i>
                    </a>
                    <a
                      href='https://www.linkedin.com/company/daasly/'
                      target='_blank'
                    >
                      <h3>Linkedin</h3>
                    </a>
                    <a
                      href='https://www.linkedin.com/company/daasly/'
                      target='_blank'
                    >
                      <span>linkedin.com/company/daasly</span>
                    </a>
                  </div>
                  <div className='footer-info-contact'>
                    <a
                      href='https://www.linkedin.com/company/daasly/'
                      target='_blank'
                    >
                      <i className='fab fa-bity'></i>
                    </a>
                    <a href='http://bit.ly/DiscoverDaasly2' target='_blank'>
                      <h3>Book a Consultation</h3>
                    </a>
                    <a href='http://bit.ly/DiscoverDaasly2' target='_blank'>
                      <span>http://bit.ly/DiscoverDaasly2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='lines'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>

          <div className='partner-shape-img1'>
            <img
              src={require('../../images/shape/partnar-shape-2.png')}
              alt='image'
            />
          </div>
        </footer>
        <div className='copyright-area'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-6'>
                <p>
                  &copy; {currentYear} Daasly. All Rights Reserved by
                  <a href='https://daasly.com/'>Daasly, Inc.</a>
                </p>
              </div>

              <div className='col-lg-6 col-md-6'>
                <ul>
                  <li>
                    <Link href='/terms-condition'>
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/privacy-policy'>
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Footer
