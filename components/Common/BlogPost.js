import React, { Component } from "react"
import Link from "next/link"

class BlogPost extends Component {
	render() {
		return (
			<section className="blog-section pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<Link href='/blog'><a><span>Blog</span></a></Link>
						<h2>Latest Posts</h2>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="blog-item">
								<Link href="/blog/strategy-and-social-good">
									<a>
										<img src={require('../../images/blog/blog2.png')} alt="image" />
									</a>
								</Link>

								<div className="blog-content">
									<ul className="meta-tags">
										<li>
											<Link href="/blog/strategy-and-social-good">
												<a>
													<i className="fa fa-user-alt"></i>
                          Emilio Izquierdo
                        </a>
											</Link>
										</li>
										<li>
											<Link href="/blog/strategy-and-social-good">
												<a>
													<i className="fas fa-calendar-week"></i>15 Jun 2020
                        </a>
											</Link>
										</li>
										{/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
									</ul>

									<h3 className="overflow-scroll">
										<Link href="/blog/strategy-and-social-good">
											<a>Creating a Data Strategy to Drive Your Nonprofit</a>
										</Link>
									</h3>
									<div className="overflow-scroll">
										<p>
											Consider these five steps to develop a well-informed, well-defined data strategy for your nonprofit organization and gain an advantage.
                    </p>
									</div>

									<Link href="/blog/strategy-and-social-good">
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
								<Link href="/blog/data-decisions">
									<a>
										<img src={require('../../images/blog/blog6.png')} alt="image" />
									</a>
								</Link>

								<div className="blog-content">
									<ul className="meta-tags">
										<li>
											<Link href="/blog/data-decisions">
												<a>
													<i className="fa fa-user-alt"></i>
                          Emilio Izquierdo
                        </a>
											</Link>
										</li>
										<li>
											<Link href="/blog/data-decisions">
												<a>
													<i className="fas fa-calendar-week"></i>3 Jun 2020
                        </a>
											</Link>
										</li>
										{/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
									</ul>

									<h3>
										<Link href="/blog/data-decisions">
											<a>Make Better Data Decisions</a>
										</Link>
									</h3>

									<p>
										A BI strategy that will put you in control of your data environment.
                  </p>

									<Link href="/blog/data-decisions">
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
								<Link href="/blog/market-realities">
									<a>
										<img src={require('../../images/blog/blog3.png')} alt="image" />
									</a>
								</Link>

								<div className="blog-content">
									<ul className="meta-tags">
										<li>
											<Link href="/blog/market-realities">
												<a>
													<i className="fa fa-user-alt"></i>
                          Emilio Izquierdo
                        </a>
											</Link>
										</li>
										<li>
											<Link href="/blog/market-realities">
												<a>
													<i className="fas fa-calendar-week"></i>19 May 2020
                        </a>
											</Link>
										</li>
										{/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
									</ul>

									<h3>
										<Link href="/blog/market-realities">
											<a>A Shift to Better Understand Your Business</a>
										</Link>
									</h3>
									<div className="overflow-scroll">
										<p>
											Market realities have shifted and with these shifts come opportunities to adjust data and analytics strategies.
                    </p>
									</div>

									<Link href="/blog/market-realities">
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
