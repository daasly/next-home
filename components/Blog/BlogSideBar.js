import React, { Component } from 'react'
import Link from 'next/link'

class BlogSideBar extends Component {
  render() {
    return (
      <aside className='widget-area'>
        <div className='widget widget_search'>
          <form className='search-form search-top'>
            <label>
              <span className='screen-reader-text'>Search for:</span>
              <input
                type='search'
                className='search-field'
                placeholder='Search...'
              />
            </label>
            <button type='submit'>
              <i className='fas fa-search'></i>
            </button>
          </form>
        </div>
        <div className='widget widget_plamb_posts_thumb'>
          <h3 className='widget-title'>Recent posts</h3>
          <article className='item'>
            <Link href='/blog/small-moments'>
              <a className='thumb'>
                <span className='fullimage cover bg1' role='img'></span>
              </a>
            </Link>
            <div className='info'>
              <time>Aug 18, 2020</time>
              <h4 className='title usmall'>
                <Link href='/blog/data-driven'>
                  <a>
                    These Four Principles will Inspire a Data Driven Culture
                  </a>
                </Link>
              </h4>
            </div>
          </article>
          <article className='item'>
            <Link href='/blog/small-moments'>
              <a className='thumb'>
                <span className='fullimage cover bg1' role='img'></span>
              </a>
            </Link>
            <div className='info'>
              <time>Jul 17, 2020</time>
              <h4 className='title usmall'>
                <Link href='/blog/small-moments'>
                  <a>Small Moments Generate Big Impacts</a>
                </Link>
              </h4>
            </div>
          </article>
          <article className='item'>
            <Link href='/blog/strategy-and-social-good'>
              <a className='thumb'>
                <span className='fullimage cover bg1' role='img'></span>
              </a>
            </Link>
            <div className='info'>
              <time>June 15, 2020</time>
              <h4 className='title usmall'>
                <Link href='/blog/strategy-and-social-good'>
                  <a>Creating a Data Strategy to Drive Your Nonprofit</a>
                </Link>
              </h4>
            </div>
          </article>
        </div>
        {/* <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>    
                    <ul>
                        <li>
                            <Link href="#">
                                <a>Business <span className="post-count">(2)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Privacy <span className="post-count">(5)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Technology <span className="post-count">(7)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Tips <span className="post-count">(4)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Uncategorized <span className="post-count">(5)</span></a>
                            </Link>
                        </li>
                    </ul>
                </div> */}
        {/* <div className="widget widget_recent_comments">
                    <h3 className="widget-title">Recent comments</h3>   
                    <ul>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>A React commenter</a>
                                </Link>
                            </span>
                            on
                            <Link href="#">
                                <a>Hello world!</a>
                            </Link>
                        </li>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>Raxr</a>
                                </Link>
                            </span>
                            on
                            <Link href="#">
                                <a>Hello world!</a>
                            </Link>
                        </li>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>React Next</a>
                                </Link>
                            </span>
                            on
                            <Link href="#">
                                <a>Hello world!</a>
                            </Link>
                        </li>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>A React Next Commenter</a>
                                </Link>
                            </span>
                            on
                            <Link href="#">
                                <a>Hello world!</a>
                            </Link>
                        </li>
                        <li>
                            <span className="comment-author-link">
                                <Link href="#">
                                    <a>Raxr</a>
                                </Link>
                            </span>
                            on
                            <Link href="#">
                                <a>Hello world!</a>
                            </Link>
                        </li>
                    </ul>
                </div> */}

        {/* <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>  
                    <div className="tagcloud section-bottom">
                        <Link href="#">
                            <a>
                                IT 
                                <span className="tag-link-count"> (3)</span>
                            </a>
                        </Link> 
                        <Link href="#">
                            <a>
                                Raxr 
                                <span className="tag-link-count"> (3)</span>
                            </a>
                        </Link> 
                        <Link href="#">
                            <a>
                                Games 
                                <span className="tag-link-count"> (2)</span>
                            </a>
                        </Link> 
                        <Link href="#">
                            <a>
                                Fashion 
                                <span className="tag-link-count"> (2)</span>
                            </a>
                        </Link> 
                        <Link href="#">
                            <a>
                                Travel 
                                <span className="tag-link-count"> (1)</span>
                            </a>
                        </Link> 
                        <Link href="#">
                            <a>
                                Smart 
                                <span className="tag-link-count"> (1)</span>
                            </a>
                        </Link> 
                        <Link href="#">
                            <a>
                                Marketing 
                                <span className="tag-link-count"> (1)</span>
                            </a>
                        </Link> 
                        <Link href="#">
                            <a>
                                Tips 
                                <span className="tag-link-count"> (2)</span>
                            </a>
                        </Link>
                    </div>
                </div> */}
      </aside>
    )
  }
}

export default BlogSideBar
