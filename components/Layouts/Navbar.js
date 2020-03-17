import React, { Component } from "react"
import Link from "../../utils/ActiveLink"

class Navbar extends Component {
	// Navbar
	_isMounted = false
	state = {
		display: false,
		collapsed: true
	}
	toggleNavbar = () => {
		this.setState({
			collapsed: !this.state.collapsed
		})
	}
	componentDidMount() {
		let elementId = document.getElementById("navbar")
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky")
			} else {
				elementId.classList.remove("is-sticky")
			}
		})
		window.scrollTo(0, 0)
	}
	componentWillUnmount() {
		this._isMounted = false
	}

	render() {
		const { collapsed } = this.state
		const classOne = collapsed
			? "collapse navbar-collapse"
			: "collapse navbar-collapse show"
		const classTwo = collapsed
			? "navbar-toggler navbar-toggler-right collapsed"
			: "navbar-toggler navbar-toggler-right"

		return (
			<React.Fragment>
				<div id="navbar" className="navbar-area">
					<div className="main-nav">
						<div className="container">
							<nav className="navbar navbar-expand-md navbar-light">
								<Link href="/">
									<a className="navbar-brand">
										<img
											src={require("../../images/logo-white.png")}
											className="white-logo"
											alt="logo"
										/>
										<img
											src={require("../../images/logo-black.png")}
											className="black-logo"
											alt="logo"
										/>
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
									<ul className="navbar-nav">
										<li className="nav-item">
											<Link href="/about-us" activeClassName="active">
												<a className="nav-link">About us</a>
											</Link>
										</li>

										<li className="nav-item">
											<Link href="/services">
												<a className="nav-link">
													Services <i className="fas"></i>
												</a>
											</Link>
										</li>

										<li className="nav-item">
											<Link href="/blog">
												<a className="nav-link">
													Blog <i className="fas"></i>
												</a>
											</Link>
										</li>
									</ul>

									<div className="others-options">
										<Link href="/contact">
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
