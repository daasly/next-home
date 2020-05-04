import React, { Component } from "react"
import Link from "next/link"

class BlogPost extends Component {
	render() {
		return (
			<section className="blog-section pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<span>Blog</span>
						<h2>Latest Posts</h2>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="blog-item">
								<Link href="/blog/covid-19">
									<a>
										<img
											src={require("../../images/blog/blog3.png")}
											alt="image"
										/>
									</a>
								</Link>

								<div className="blog-content">
									<ul className="meta-tags">
										<li>
											<Link href="/blog/covid-19">
												<a>
													<i className="fa fa-user-alt"></i>
													Emilio Izquierdo
												</a>
											</Link>
										</li>
										<li>
											<Link href="/blog/covid-19">
												<a>
													<i className="fas fa-calendar-week"></i>09 Apr 2020
												</a>
											</Link>
										</li>
										{/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
									</ul>

									<h3>
										<Link href="/blog/covid-19">
											<a>Covid-19</a>
										</Link>
									</h3>

									<p>
										This is no time to panic, but it certainly is a good time to reassess your data strategies as you set up your home office
									</p>

									<Link href="/blog/covid-19">
										<a className="read-more">
											Read More
											<i className="fa fa-chevron-right"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="blog-item">
								<Link href="/blog/real-time-alerts">
									<a>
										<img
											src={require("../../images/blog/blog4.png")}
											alt="image"
										/>
									</a>
								</Link>

								<div className="blog-content">
									<ul className="meta-tags">
										<li>
											<Link href="/blog/real-time-alerts">
												<a>
													<i className="fa fa-user-alt"></i>
													Emilio Izquierdo
												</a>
											</Link>
										</li>
										<li>
											<Link href="/blog/real-time-alerts">
												<a>
													<i className="fas fa-calendar-week"></i>10 Mar 2020
												</a>
											</Link>
										</li>
										{/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
									</ul>

									<h3>
										<Link href="/blog/real-time-alerts">
											<a>Real-time Data and Alerts</a>
										</Link>
									</h3>

									<p>
										Check out this guide, and soon you'll become a real-time data expert capable of solving lots of different problems.
									</p>

									<Link href="/blog/real-time-alerts">
										<a className="read-more">
											Read More
											<i className="fa fa-chevron-right"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
							<div className="blog-item">
								<Link href="/blog/ga-network-dimensions">
									<a>
										<img
											src={require("../../images/blog/blog5.png")}
											alt="image"
										/>
									</a>
								</Link>

								<div className="blog-content">
									<ul className="meta-tags">
										<li>
											<Link href="/blog/ga-network-dimensions">
												<a>
													<i className="fa fa-user-alt"></i>
													Emilio Izquierdo
												</a>
											</Link>
										</li>
										<li>
											<Link href="/blog/ga-network-dimensions">
												<a>
													<i className="fas fa-calendar-week"></i>4 Mar 2020
												</a>
											</Link>
										</li>
										{/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
									</ul>

									<h3>
										<Link href="/blog/ga-network-dimensions">
											<a>Removed Dimensions from Google Analytics</a>
										</Link>
									</h3>

									<p>
										Mourning the Death of “Service Provider” & “Network Domain” in Google Analytics.
									</p>

								<Link href="/blog/ga-network-dimensions">
									<a className="read-more">
										Read More
										<i className="fa fa-chevron-right"></i>
									</a>
								</Link>
							</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default BlogPost
