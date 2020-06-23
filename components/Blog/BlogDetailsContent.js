import React, { Component } from 'react';
import Link from 'next/link';
import BlogSideBar from './BlogSideBar';

class BlogDetailsContent extends Component {

    render() {

        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Read Our Latest Post</span>
                        <h2>Blog & Updates</h2>
                        <br />
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src={require("../../images/blog-details/blog-details1.jpg")} alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <span>Posted on:</span>
                                                {this.props.date}
                                            </li>
                                            <li>
                                                <span>Posted by:</span>
                                                <Link href="#">
                                                    <a>{this.props.author}</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <h3>{this.props.title}</h3>
                                    <p>{this.props.textLink ? <a href={this.props.textLink} target="_blank">{this.props.linkedText}</a> : null} {this.props.text}</p>
                                    {this.props.text2 ? (
                                        <p>{this.props.text2}</p>
                                    ) : (
                                            <p>Interested to know more about Daasly’s <Link href="https://daasly.com/data-strategy"><a> Report Rewind</a></Link>? Check out our process and how we can help.</p>
                                        )}

                                    <p>{this.props.text3}</p>
                                    <p>{this.props.text4}</p>
                                    <p>{this.props.text5}</p>
                                    <p>{this.props.text6}</p>
                                    <p>{this.props.text7}</p>
                                    <blockquote>
                                        <p>{this.props.quote}</p>
                                        {/* <cite>Tom Cruise</cite> */}
                                    </blockquote>
                                    <p>Read the complete article that inspired this post <a target="_blank" href={this.props.articleLink}>here</a>.</p>




                                </div>

                                {/* Article footer */}
                                <div className="article-footer">
                                    {/* <div className="article-tags">
                                        <span>
                                            <i className="fas fa-bookmark"></i>
                                        </span>

                                        <Link href="#">
                                            <a>Fashion</a>
                                        </Link>
                                        <Link href="#">
                                            <a>Travel</a>
                                        </Link>
                                    </div> */}

                                    <div className="article-share">
                                        <ul className="social">
                                            <li><span>Share:</span></li>
                                            <li>
                                                <Link href={this.props.shareLink ? this.props.shareLink : '#'}>
                                                    <a target="_blank">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="mailto:?subject:Check out this blog!">
                                                    <a target="_blank">
                                                        <i className="flaticon-envelope"></i>
                                                    </a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                                {/* Comments area */}
                                {/* <div className="comments-area">
                                    <h3 className="comments-title">2 Comments:</h3> */}

                                {/* <ol className="comment-list">
                                        <li className="comment">
                                            <article className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src={require("../../images/clients/client1.jpg")} className="avatar" alt="image" />
                                                        <b className="fn">John Jones</b>
                                                        <span className="says">says:</span>
                                                    </div>
                                                    <div className="comment-metadata">
                                                        <Link href="#">
                                                            <a>
                                                                <time>February 24, 2020 at 10:59 am</time>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </footer>

                                                <div className="comment-content">
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                                </div>

                                                <div className="reply">
                                                    <Link href="#">
                                                        <a className="comment-reply-link">Reply</a>
                                                    </Link>
                                                </div>
                                            </article>

                                            <ol className="children">
                                                <li className="comment">
                                                    <article className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src={require("../../images/clients/client2.jpg")} className="avatar" alt="image" />
                                                                <b className="fn">Steven Smith</b>
                                                                <span className="says">says:</span>
                                                            </div>
                                                            <div className="comment-metadata">
                                                                <Link href="#">
                                                                    <a>
                                                                        <time>February 24, 2020 at 10:59 am</time>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </footer>

                                                        <div className="comment-content">
                                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                                        </div>

                                                        <div className="reply">
                                                            <Link href="#">
                                                                <a className="comment-reply-link">Reply</a>
                                                            </Link>
                                                        </div>
                                                    </article>
                                                </li>

                                                <ol className="children">
                                                    <li className="comment">
                                                        <article className="comment-body">
                                                            <footer className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img src={require("../../images/clients/client3.jpg")} className="avatar" alt="image" />
                                                                    <b className="fn">Sarah Taylor</b>
                                                                    <span className="says">says:</span>
                                                                </div>
                                                                <div className="comment-metadata">
                                                                    <Link href="#">
                                                                        <a>
                                                                            <time>February 24, 2020 at 10:59 am</time>
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                            </footer>

                                                            <div className="comment-content">
                                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                                            </div>

                                                            <div className="reply">
                                                                <Link href="#">
                                                                    <a className="comment-reply-link">Reply</a>
                                                                </Link>
                                                            </div>
                                                        </article>
                                                    </li>
                                                </ol>
                                            </ol>
                                        </li>

                                        <li className="comment">
                                            <article className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src={require("../../images/clients/client4.jpg")} className="avatar" alt="image" />
                                                        <b className="fn">James Anderson</b>
                                                        <span className="says">says:</span>
                                                    </div>
                                                    <div className="comment-metadata">
                                                        <Link href="#">
                                                            <a>
                                                                <time>February 24, 2020 at 10:59 am</time>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </footer>

                                                <div className="comment-content">
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                                </div>

                                                <div className="reply">
                                                    <Link href="#">
                                                        <a className="comment-reply-link">Reply</a>
                                                    </Link>
                                                </div>
                                            </article>
                                        </li>
                                    </ol>

                                    {/* Comment respond */}
                                {/* <div className="comment-respond">
                                        <h3 className="comment-reply-title">Leave a Reply</h3>

                                        <form className="comment-form">
                                            <p className="comment-notes">
                                                <span>Your email address will not be published.</span>
                                                Required fields are marked 
                                                <span className="required">*</span>
                                            </p>
                                            <p className="comment-form-comment">
                                                <label>Comment</label>
                                                <textarea name="comment" id="comment" rows="5" required></textarea>
                                            </p>
                                            <p className="comment-form-author">
                                                <label>Name <span className="required">*</span></label>
                                                <input type="text" id="author" name="author" required />
                                            </p>
                                            <p className="comment-form-email">
                                                <label>Email <span className="required">*</span></label>
                                                <input type="email" id="email" name="email" required />
                                            </p>
                                            <p className="comment-form-url">
                                                <label>Website</label>
                                                <input type="url" id="url" name="url" />
                                            </p>
                                            <p className="comment-form-cookies-consent">
                                                <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent" />
                                                <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                            </p>
                                            <p className="form-submit">
                                                <input type="submit" name="submit" id="submit" className="submit" value="Post A Comment" />
                                            </p>
                                        </form>
                                    </div>  */}
                                {/* </div> */}
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <BlogSideBar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogDetailsContent;