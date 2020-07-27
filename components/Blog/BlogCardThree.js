import React, { Component } from "react"
import Link from "next/link"

class BlogCardThree extends Component {

    render() {
        return (

            <div className="container">
                <div className="section-title">
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

                <div className="row">

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <Link href="/blog/its-a-marathon-blog">
                                <a>
                                    <img
                                        src={require("../../images/blog/blog1.png")}
                                        alt="image"
                                    />
                                </a>
                            </Link>
                            <div className="blog-content">
                                <ul className="meta-tags">
                                    <li>
                                        <Link href="/blog/its-a-marathon-blog">
                                            <a>
                                                <i className="fa fa-user-alt"></i>
												Emilio Izquierdo
											</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog/its-a-marathon-blog">
                                            <a>
                                                <i className="fas fa-calendar-week"></i>9 Aug 2019
											</a>
                                        </Link>
                                    </li>
                                    {/* <li>
										<i className="far fa-comments"></i>3 Comments
									</li> */}
                                </ul>
                                <h3>
                                    <Link href="/blog/its-a-marathon-blog">
                                        <a>It's a Marathon, Not a Sprint</a>
                                    </Link>
                                </h3>
                                <p className="overflow-scroll">
                                    Our advanced technology and machine learning algorithms allow organizations to quickly detect data relationships in structured, semi-structured, and some unstructured formats.
								</p>
                                <Link href="/blog/its-a-marathon-blog">
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

        )
    }
}

export default BlogCardThree
