import React, { Component } from 'react'
import Link from '../../utils/ActiveLink'
import logohorizontalblack from '../../images/logo-horizontal-black.png'
import logohorizontalwhite from '../../images/logo-horizontal-white.png'

class Navbar extends Component {
  _isMounted = false
  state = {
    display: false,
    collapsed: true,
    active: false
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  componentDidMount() {
    let elementId = document.getElementById('navbar')
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky')
      } else {
        elementId.classList.remove('is-sticky')
      }
    })
    window.scrollTo(0, 0)
  }
  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { collapsed } = this.state
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show'
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right'

    return (
      <React.Fragment>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src={logohorizontalwhite} className="white-logo" alt="logo" />
                    <img src={logohorizontalblack} className="black-logo" alt="logo" />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav justify-content-end mr-0">
                    <li className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about-us" activeClassName="active">
                        <a className="nav-link">About us</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/services" activeClassName="active">
                        <a className="nav-link">
                          Services {''}
                          <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/data-strategy" activeClassName="active">
                            <a className="nav-link">Data Strategy</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/data-execution" activeClassName="active">
                            <a className="nav-link">Data Execution</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/data-management" activeClassName="active">
                            <a className="nav-link">Data Management</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/dc-software-development" activeClassName="active">
                            <a className="nav-link">Software Development</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/google-analytics" activeClassName="active">
                            <a className="nav-link">Google Analytics</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/business-intelligence-consulting" activeClassName="active">
                            <a className="nav-link">BI Consulting</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/blog" activeClassName="active">
                        <a className="nav-link">
                          Blog
                        <i className="fas"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>

                  <div className="others-options">
                    <Link href="/contact" activeClassName="active">
                      <a className="default-btn">
                        Contact Us
                        <span></span>
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Navbar
