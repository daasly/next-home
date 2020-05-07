import React, { useState } from 'react'
import Link from 'next/link'
import BlogCardTwo from './BlogCardTwo'

const BlogCard = (props) => {
  const [pageOne, setPageOne] = useState(true)
  const [pageTwo, setPageTwo] = useState(false)
  const [pageThree, setPageThree] = useState(false)
  const [pageFour, setPageFour] = useState(false)

  return (
    <section className="blog-section ptb-100">
      {pageOne && (
        <div className="container">
          {props.pageTitle && (
            <div className="section-title">
              <h2>Thank You</h2>
              <br />
              <span style={{ color: '#737b9a' }}>{this.props.pageTitle}</span>
            </div>
          )}
          <div className="section-title">
            <span>Read Our Latest Post</span>
            <h2>Blog & Updates</h2>
            <br />
            <div>
              <p>
                Data is constantly changing. At Daasly, we believe in having a deep knowledge of the
                past and a keen sense for new and future methods so we can improve and evolve as
                data changes. Stay updated with our latest posts.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <Link href="/blog/covid-19">
                  <a>
                    <img src={require('../../images/blog/blog2.png')} alt="image" />
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
                  <div className="overflow-scroll">
                    <p>
                      This is no time to panic, but it certainly is a good time to reassess your
                      data strategies as you set up your home office.
                    </p>
                  </div>
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
                    <img src={require('../../images/blog/blog1.png')} alt="image" />
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
                    Check out this guide, and soon you'll become a real-time data expert capable of
                    solving lots of different problems.
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

            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <Link href="/blog/ga-network-dimensions">
                  <a>
                    <img src={require('../../images/blog/blog6.png')} alt="image" />
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

            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <Link href="/blog/google-tag-manager">
                  <a>
                    <img src={require('../../images/blog/blog5.png')} alt="image" />
                  </a>
                </Link>

                <div className="blog-content">
                  <ul className="meta-tags">
                    <li>
                      <Link href="/blog/google-tag-manager">
                        <a>
                          <i className="fa fa-user-alt"></i>
                          Emilio Izquierdo
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/google-tag-manager">
                        <a>
                          <i className="fas fa-calendar-week"></i>27 Feb 2020
                        </a>
                      </Link>
                    </li>
                    {/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
                  </ul>

                  <h3>
                    <Link href="/blog/google-tag-manager">
                      <a>Google Tag Manager is Your Friend</a>
                    </Link>
                  </h3>
                  <div>
                    <p>
                      There are well over 11 reasons why you should use Google Tag Manager, these
                      are just the tip.
                    </p>
                  </div>
                  <Link href="/blog/google-tag-manager">
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
                <Link href="/blog/domo-and-aws">
                  <a>
                    <img src={require('../../images/blog/blog4.png')} alt="image" />
                  </a>
                </Link>

                <div className="blog-content">
                  <ul className="meta-tags">
                    <li>
                      <Link href="/blog/domo-and-aws">
                        <a>
                          <i className="fa fa-user-alt"></i>
                          Emilio Izquierdo
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/domo-and-aws">
                        <a>
                          <i className="fas fa-calendar-week"></i>19 Feb 2020
                        </a>
                      </Link>
                    </li>
                    {/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
                  </ul>

                  <h3>
                    <Link href="/blog/domo-and-aws">
                      <a>Domo Partners with AWS</a>
                    </Link>
                  </h3>

                  <p>
                    The new Domo BI platform update features a new collaboration with AWS to enable
                    users to work with third-party data and a low-code tool for developers.
                  </p>

                  <Link href="/blog/domo-and-aws">
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
                <Link href="/blog/data-buy-in-blog">
                  <a>
                    <img src={require('../../images/blog/blog2.png')} alt="image" />
                  </a>
                </Link>

                <div className="blog-content">
                  <ul className="meta-tags">
                    <li>
                      <Link href="/blog/data-buy-in-blog">
                        <a>
                          <i className="fa fa-user-alt"></i>
                          Emilio Izquierdo
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/data-buy-in-blog">
                        <a>
                          <i className="fas fa-calendar-week"></i>12 Sept 2019
                        </a>
                      </Link>
                    </li>
                    {/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
                  </ul>

                  <h3>
                    <Link href="/blog/data-buy-in-blog">
                      <a>The Data Buy-In</a>
                    </Link>
                  </h3>
                  <div className="overflow-scroll">
                    <p>
                      Data professionals face an endless challenge to get the buy-in of management
                      and IT to provide the technology and resources needed to efficiently and
                      effectively analyze their constantly growing enterprise data stores.
                    </p>
                  </div>

                  <Link href="/blog/data-buy-in-blog">
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
      )}
      {pageTwo && !pageOne && <BlogCardTwo />}
      {/* Pagination */}
      <div className="col-lg-12 col-md-12">
        <div className="pagination-area">
          <span
            className="prev page-numbers"
            onClick={() => {
              if (pageOne) {
                setPageTwo(false)
                setPageThree(false)
                setPageFour(false)
              } else if (pageTwo) {
                setPageOne(true)
                setPageTwo(false)
                setPageThree(false)
                setPageFour(false)
              } else if (pageThree) {
                setPageFour(false)
                setPageThree(false)
                setPageTwo(true)
                setPageOne(false)
              } else {
                setPageFour(false)
                setPageThree(true)
                setPageTwo(false)
                setPageOne(false)
              }
            }}
          >
            <i className="fas fa-angle-double-left"></i>
          </span>

          <span
            onClick={() => {
              setPageOne(true)
              setPageTwo(false)
              // setPageThree(false)
              // setPageFour(false)
            }}
            className={pageOne ? 'page-numbers current' : 'page-numbers'}
          >
            1
          </span>

          <span
            onClick={() => {
              setPageOne(false)
              setPageTwo(true)
              // setPageThree(false)
              // setPageFour(false)
            }}
            className={pageTwo ? 'page-numbers current' : 'page-numbers'}
          >
            2
          </span>

          {/* <span onClick={() => {
								setPageOne(false)
								setPageTwo(false)
								setPageThree(true)
								setPageFour(false)
							}}className={pageThree ? "page-numbers current" : "page-numbers"}>3</span>

							<span onClick={() => {
								setPageOne(false)
								setPageTwo(false)
								setPageThree(false)
								setPageFour(true)
							}}className={pageFour ? "page-numbers current" : "page-numbers"}>4</span> */}

          <span
            className="next page-numbers"
            onClick={() => {
              if (pageOne) {
                setPageOne(false)
                setPageTwo(true)
                // setPageThree(false)
                // setPageFour(false)
              } else if (pageTwo) {
                setPageOne(false)
                setPageTwo(true)
                // setPageThree(true)
                // setPageFour(false)
              }
              // else if (pageThree){
              // 	setPageFour(true)
              // 	setPageThree(false)
              // 	setPageTwo(false)
              // 	setPageOne(false)
              // } else {
              // 	setPageFour(true)
              // 	setPageThree(false)
              // 	setPageTwo(false)
              // 	setPageOne(false)
              // }
            }}
          >
            <i className="fas fa-angle-double-right"></i>
          </span>
        </div>
      </div>
    </section>
  )
}

export default BlogCard
