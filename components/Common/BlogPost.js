import React, { Component } from 'react'
import Link from 'next/link'

class BlogPost extends Component {
  render() {
    return (
      <section className='blog-section pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <Link href='/blog'>
              <a>
                <span>Blog</span>
              </a>
            </Link>
            <h2>Latest Posts</h2>
          </div>

          <div className='row'>
          <div className='col-lg-4 col-md-6'>
              <div className='blog-item'>
                <Link href='/blog/business-intelligence-propels'>
                  <a>
                    <img
                      src={require('../../images/blog/blog5.png')}
                      alt='image'
                    />
                  </a>
                </Link>

                <div className='blog-content'>
                  <ul className='meta-tags'>
                    <li>
                      <Link href='/blog/business-intelligence-propels'>
                        <a>
                          <i className='fa fa-user-alt'></i>
                          Emilio Izquierdo
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog/business-intelligence-propels'>
                        <a>
                          <i className='fas fa-calendar-week'></i>18 Sep 2020
                        </a>
                      </Link>
                    </li>
                  </ul>

                  <h3 className='overflow-scroll'>
                    <Link href='/blog/business-intelligence-propels'>
                      <a>How Business Intelligence Propels CFOs</a>
                    </Link>
                  </h3>
                  <div className='overflow-scroll'>
                    <p>
                      Stakeholders are demanding more from CFO’s. With a BI
                      team, CFO’s can finally meet and exceed these requests.
                    </p>
                  </div>

                  <Link href='/blog/business-intelligence-propels'>
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
                      a data driven culture.
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
          </div>
        </div>
      </section>
    )
  }
}

export default BlogPost
