import React, { Component } from 'react'
import Link from 'next/link'

class Customers extends Component {
  render() {
    return (
      <div className="partner-section pt-100 pb-70">
        <div className="container">
          <div className="partner-title">
            <span>Previous Clients</span>
            <h2>Who We've Worked With</h2>
          </div>

          <div className="partner-list">
            {/* <div className="partner-item"> */}
            <Link href="//www.aramark.com/">
              <a target="_blank" className="partner-item">
                <img
                  src={require('../../images/Aramark edited (1).svg')}
                  alt="image"
                  id="aramark"
                  className="partner-logo"
                />
              </a>
            </Link>
            {/* </div> */}

            {/* <div className="partner-item"> */}
            <Link href="//www.frontpointsecurity.com/">
              <a target="_blank" className="partner-item">
                <img
                  src={require('../../images/Frontpoint Edited.svg')}
                  alt="image"
                  id="frontpoint"
                  className="partner-logo"
                />
              </a>
            </Link>
            {/* </div> */}

            {/* <div className="partner-item"> */}
            <Link href="//collegiseducation.com/">
              <a target="_blank" className="partner-item">
                <img
                  src={require('../../images/Collegis Edited.svg')}
                  alt="image"
                  id="collegis"
                  className="partner-logo"
                />
              </a>
            </Link>
            {/* </div> */}

            {/* <div className="partner-item"> */}
            <Link href="//www.whereoware.com/">
              <a target="_blank" className="partner-item">
                <img
                  src={require('../../images/WOW Edited.svg')}
                  alt="image"
                  id="whereoware"
                  className="partner-logo"
                />
              </a>
            </Link>
            {/* </div> */}

            {/* <div className="partner-item"> */}
            <Link href="//www.youfit.com/">
              <a target="_blank" className="partner-item">
                <img
                  src={require('../../images/Youfit Edited.png')}
                  alt="image"
                  id="youfit"
                  className="partner-logo"
                />
              </a>
            </Link>
            {/* </div> */}

            {/* <div className="partner-item"> */}
            <Link href="//www.dgtlnk.com/">
              <a target="_blank" className="partner-item">
                <img
                  src={require('../../images/Digital Ink Edited.svg')}
                  alt="image"
                  id="dgtink"
                  className="partner-logo"
                />
              </a>
            </Link>
            {/* </div> */}

            {/* <div className="partner-item">
							<Link href="//fanspeak.com/">
								<a target='_blank'>
									<img
										src={require("../../images/Fanspeak edited.png")}
										alt="image"
									/>
								</a>
							</Link>
						</div> */}

            {/* <div className="partner-item"> */}
            <Link href="//www.newyorklife.com/">
              <a target="_blank" className="partner-item">
                <img src={require('../../images/NYL Logo Edited.png')} alt="image" id="nylife" />
              </a>
            </Link>
            {/* </div> */}

            {/* <div className="partner-item">
							<Link href="/partner">
								<a>
									<img
										src={require("../../images/partner/partner8.png")}
										alt="image"
									/>
								</a>
							</Link>
						</div> */}
          </div>
        </div>

        <div className="partner-shape">
          <img src={require('../../images/shape/partnar-shape-1.png')} alt="main-image" />
        </div>
        <div className="partner-shape-img1">
          <img src={require('../../images/shape/partnar-shape-2.png')} alt="image" />
        </div>
      </div>
    )
  }
}

export default Customers
