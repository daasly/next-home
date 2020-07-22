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
					<div className='col-lg-4 col-md-6'>
              <div className='blog-item'>
                <Link href='/blog/small-moments'>
                  <a>
                    <img
                      src={require('../../images/blog/blog4.png')}
                      alt='image'
                    />
                  </a>
                </Link>

                <div className='blog-content'>
                  <ul className='meta-tags'>
                    <li>
                      <Link href='/blog/small-moments'>
                        <a>
                          <i className='fa fa-user-alt'></i>
                          Emilio Izquierdo
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog/small-moments'>
                        <a>
                          <i className='fas fa-calendar-week'></i>17 Jul 2020
                        </a>
                      </Link>
                    </li>
                    {/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
                  </ul>

                  <h3 className='overflow-scroll'>
                    <Link href='/blog/small-moments'>
                      <a>Small Moments Generate Big Impacts</a>
                    </Link>
                  </h3>
                  <div className='overflow-scroll'>
                    <p>
                      Data Findings aren’t underwhelming when they align with
                      intuition, they are confirmation. Without this
                      verification, it’s only guessing.
                    </p>
                  </div>

                  <Link href='/blog/small-moments'>
                    <a className='read-more'>
                      Read More
                      <i className='fa fa-chevron-right'></i>
                    </a>
                  </Link>
                </div>
              </div>
							</div>
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
					</div>
				</div>
			</section>
		)
	}
}

export default BlogPost
