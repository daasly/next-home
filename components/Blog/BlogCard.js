import React, { useState } from 'react'
import Link from 'next/link'
import BlogCardTwo from './BlogCardTwo'
import BlogCardThree from './BlogCardThree'

const BlogCard = props => {
  const [pageOne, setPageOne] = useState(true)
  const [pageTwo, setPageTwo] = useState(false)
  const [pageThree, setPageThree] = useState(false)
  const [pageFour, setPageFour] = useState(false)

  return (
    <section className='blog-section ptb-100'>
      {pageOne && (
        <div className='container'>
          {props.pageTitle && (
            <div className='section-title'>
              <h2>Thank You</h2>
              <br />
              <span style={{ color: '#737b9a' }}>{props.pageTitle}</span>
            </div>
          )}
          <div className='section-title'>
            <span>Read Our Latest Post</span>
            <h2>Blog & Updates</h2>
            <br />
            <div>
              <p>
                Data is constantly changing. At Daasly, we believe in having a
                deep knowledge of the past and a keen sense for new and future
                methods so we can improve and evolve as data changes. Stay
                updated with our latest posts.
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='blog-item'>
                <Link href='/blog/data-driven'>
                  <a>
                    <img
                      src={require('../../images/blog/blog1.png')}
                      alt='image'
                    />
                  </a>
                </Link>

                <div className='blog-content'>
                  <ul className='meta-tags'>
                    <li>
                      <Link href='/blog/data-driven'>
                        <a>
                          <i className='fa fa-user-alt'></i>
                          Emilio Izquierdo
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog/data-driven'>
                        <a>
                          <i className='fas fa-calendar-week'></i>18 Aug 2020
                        </a>
                      </Link>
                    </li>
                    {/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
                  </ul>

                  <h3 className='overflow-scroll'>
                    <Link href='/blog/data-driven'>
                      <a>
                        These Four Principles will Inspire a Data Driven Culture
                      </a>
                    </Link>
                  </h3>
                  <div className='overflow-scroll'>
                    <p>
                      Unlock the full potential of your organization by adopting
                      a data driven culture. Tackle new challenges and continue
                      moving forward with trusted, comprehensive answers back by
                      data.
                    </p>
                  </div>

                  <Link href='/blog/data-driven'>
                    <a className='read-more'>
                      Read More
                      <i className='fa fa-chevron-right'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
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
            <div className='col-lg-4 col-md-6'>
              <div className='blog-item'>
                <Link href='/blog/strategy-and-social-good'>
                  <a>
                    <img
                      src={require('../../images/blog/blog2.png')}
                      alt='image'
                    />
                  </a>
                </Link>

                <div className='blog-content'>
                  <ul className='meta-tags'>
                    <li>
                      <Link href='/blog/strategy-and-social-good'>
                        <a>
                          <i className='fa fa-user-alt'></i>
                          Emilio Izquierdo
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog/strategy-and-social-good'>
                        <a>
                          <i className='fas fa-calendar-week'></i>15 Jun 2020
                        </a>
                      </Link>
                    </li>
                    {/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
                  </ul>

                  <h3 className='overflow-scroll'>
                    <Link href='/blog/strategy-and-social-good'>
                      <a>Creating a Data Strategy to Drive Your Nonprofit</a>
                    </Link>
                  </h3>
                  <div className='overflow-scroll'>
                    <p>
                      Consider these five steps to develop a well-informed,
                      well-defined data strategy for your nonprofit organization
                      and gain an advantage.
                    </p>
                  </div>

                  <Link href='/blog/strategy-and-social-good'>
                    <a className='read-more'>
                      Read More
                      <i className='fa fa-chevron-right'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='blog-item'>
                <Link href='/blog/data-decisions'>
                  <a>
                    <img
                      src={require('../../images/blog/blog6.png')}
                      alt='image'
                    />
                  </a>
                </Link>

                <div className='blog-content'>
                  <ul className='meta-tags'>
                    <li>
                      <Link href='/blog/data-decisions'>
                        <a>
                          <i className='fa fa-user-alt'></i>
                          Emilio Izquierdo
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog/data-decisions'>
                        <a>
                          <i className='fas fa-calendar-week'></i>3 Jun 2020
                        </a>
                      </Link>
                    </li>
                    {/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
                  </ul>

                  <h3>
                    <Link href='/blog/data-decisions'>
                      <a>Make Better Data Decisions</a>
                    </Link>
                  </h3>

                  <p>
                    A BI strategy that will put you in control of your data
                    environment.
                  </p>

                  <Link href='/blog/data-decisions'>
                    <a className='read-more'>
                      Read More
                      <i className='fa fa-chevron-right'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='blog-item'>
                <Link href='/blog/market-realities'>
                  <a>
                    <img
                      src={require('../../images/blog/blog3.png')}
                      alt='image'
                    />
                  </a>
                </Link>

                <div className='blog-content'>
                  <ul className='meta-tags'>
                    <li>
                      <Link href='/blog/market-realities'>
                        <a>
                          <i className='fa fa-user-alt'></i>
                          Emilio Izquierdo
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog/market-realities'>
                        <a>
                          <i className='fas fa-calendar-week'></i>19 May 2020
                        </a>
                      </Link>
                    </li>
                    {/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
                  </ul>

                  <h3>
                    <Link href='/blog/market-realities'>
                      <a>A Shift to Better Understand Your Business</a>
                    </Link>
                  </h3>
                  <div className='overflow-scroll'>
                    <p>
                      Market realities have shifted and with these shifts come
                      opportunities to adjust data and analytics strategies.
                    </p>
                  </div>

                  <Link href='/blog/market-realities'>
                    <a className='read-more'>
                      Read More
                      <i className='fa fa-chevron-right'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='blog-item'>
                <Link href='/blog/creative-data'>
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
                      <Link href='/blog/creative-data'>
                        <a>
                          <i className='fa fa-user-alt'></i>
                          Emilio Izquierdo
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog/creative-data'>
                        <a>
                          <i className='fas fa-calendar-week'></i>13 May 2020
                        </a>
                      </Link>
                    </li>
                    {/* <li>
											<i className="far fa-comments"></i>3 Comments
										</li> */}
                  </ul>

                  <h3>
                    <Link href='/blog/creative-data'>
                      <a>Getting Creative with Data</a>
                    </Link>
                  </h3>
                  <div className='overflow-scroll'>
                    <p>Who says data is boring?</p>
                  </div>

                  <Link href='/blog/creative-data'>
                    <a className='read-more'>
                      Read More
                      <i className='fa fa-chevron-right'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {pageTwo && !pageOne && <BlogCardTwo />}
      {pageThree && !pageOne && !pageTwo && <BlogCardThree />}
      {/* Pagination */}
      <div className='col-lg-12 col-md-12'>
        <div className='pagination-area'>
          <span
            className='prev page-numbers'
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
            <i className='fas fa-angle-double-left'></i>
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

          <span
            onClick={() => {
              setPageOne(false)
              setPageTwo(false)
              setPageThree(true)
              setPageFour(false)
            }}
            className={pageThree ? 'page-numbers current' : 'page-numbers'}
          >
            3
          </span>

          {/* <span onClick={() => {
								setPageOne(false)
								setPageTwo(false)
								setPageThree(false)
								setPageFour(true)
							}}className={pageFour ? "page-numbers current" : "page-numbers"}>4</span> */}

          <span
            className='next page-numbers'
            onClick={() => {
              if (pageOne) {
                setPageOne(false)
                setPageTwo(true)
                // setPageThree(false)
                // setPageFour(false)
              } else if (pageTwo) {
                setPageOne(false)
                setPageTwo(false)
                setPageThree(true)
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
            <i className='fas fa-angle-double-right'></i>
          </span>
        </div>
      </div>
    </section>
  )
}

export default BlogCard
