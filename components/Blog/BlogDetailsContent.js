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
                                    {this.props.ctaStrategy && <p>It's important to keep up, Daasly, Inc can help! Let us guide you through making the shift, read about our <Link href="/data-strategy"><a>Data Strategy</a></Link> and <Link href="/data-strategy"><a>Report Rewind</a></Link> process.</p>}
                                    {this.props.ctaCreativeData && <p>These data professionals incorporated their personality and professional interests to visualize everything from wedding buttons to Lego elevation maps. Their personalities really shine through here. Get to know more about the team as Daasly, read About them <Link href="/about-us"><a>here</a></Link>.</p>}
                                    {this.props.ctaPivot && <p>In an ideal scenario, you have a solid data strategy in place. It's a foundation that can be built upon and can be expanded upon. If this is not the place your organization is in, help us take a few steps back alongside you, to get you moving forward! Read about our <Link href="/data-strategy"><a>Data Strategy</a></Link> and approach <Link href="/data-strategy"><a>here</a></Link>.</p>}
                                    {this.props.ctaCovid && <p>Taking a step back with fresh eyes can bring contribute loads of insight and bring new clarity. Let us take a 1000 foot view alongside you, to get you moving forward! Read about our <Link href="/data-strategy"><a>Data Strategy</a></Link> and <Link href="/data-strategy"><a>Report Rewind</a></Link> approach <Link href="/data-strategy"><a>here</a></Link>.</p>}
                                    {this.props.ctaRealTime && <p>Need help properly identifying the need for and setting up real-time alerts? Our BI Consultants can identify and execute approaches to make your BI strategy even more efficient. Daasly can help, read about our the <Link href="business-intelligence-consulting"><a>BI Consulting</a></Link> services <Link href="business-intelligence-consulting"><a>here</a></Link>.</p>}
                                    {this.props.ctaGADimensions && <p>Having a difficult time navigating Digital Marketing tools and keeping up with the wave of changes? Daasly is here for you, read about how we use <Link href="digital-marketing-tools"><a>Digital Marketing Tools</a></Link> to save time and increase your data's productivity <Link href="digital-marketing-tools"><a>here</a></Link>.</p>}
                                    {this.props.ctaGTM && <p>Having a difficult time navigating Digital Marketing tools and keeping up with the wave of changes? Daasly is here for you, read about how we use <Link href="digital-marketing-tools"><a>Digital Marketing Tools</a></Link> to save time and increase your data's productivity <Link href="digital-marketing-tools"><a>here</a></Link>.</p>}
                                    {this.props.ctaDomoAWS && <p> Domo is in a constant state of increasing their portfolio of services and building upon their current offerings. Our expert Domo BI Consultants can optimize your Domo instance and keep you up-to-date on the tool's latest offerings to make your Bi strategy even more efficient. Daasly can help, read about our the <Link href="business-intelligence-consulting"><a>BI Consulting</a></Link> services <Link href="business-intelligence-consulting"><a>here</a></Link>.</p>}
                                    {this.props.ctaDataBuyIn && <p>The journey to buy-in for a data strategy can be a difficult process. Change takes preparation, time, and dedication. Bring an expert along to ease the burdens often associated with buy-in. Our team knows the value of a data strategy and can help you develop a useful use case that proves worth. Read about our <Link href="/data-strategy"><a>Data Strategy</a></Link> and <Link href="/data-strategy"><a>Report Rewind</a></Link> approach <Link href="/data-strategy"><a>here</a></Link>.</p>}
                                    {this.props.ctaFirstStep && <p>In an ideal scenario, you have a solid data strategy in place before making an investment into a BI tool. It's a foundation capable to be built and expanded upon. If this is where you are we can help you dot your i's and cross your t's. Read about our <Link href="/data-strategy"><a>Data Strategy</a></Link> consulting service and approach <Link href="/data-strategy"><a>here</a></Link>.</p>}
                                    {this.props.ctaMarathon && <p>A solid data strategy brings with it a foundation capable to be built and expanded upon. If this is where you are we can help you dot your i's and cross your t's. Read about our <Link href="/data-strategy"><a>Data Strategy</a></Link> consulting service and approach <Link href="/data-strategy"><a>here</a></Link>.</p>}
                                    {this.props.ctaStrategySocial && <p>Daasly can help you empower your organization and demonstrate your impact to stakeholders. Want to dive deeper? We would love to help. Get in <Link href="/contact"><a>contact</a></Link> today.</p>}
                                    {this.props.ctaSmallMoments && <><p>Daasly can help you transform your organization into a data driven one. What we develop will be a foundation that is dependable and scalable. Let us empower your organization and demonstrate your impact to stakeholders. Want to dive deeper? We would love to help. Get in <Link href="/contact"><a>contact</a></Link> today.</p><p>Read the complete article that inspired this post <Link href="https://www.forbes.com/sites/joelshapiro/2020/06/30/why-data-analytics-small-aha-moments-can-have-a-big-impact/#28313f9b13be" ><a target="_blank">here</a></Link>.</p></>}
                                    {this.props.ctaDataDriven &&<> <p>Daasly can help you transform your organization into a data driven one. Our outsourced Business Intelligence solution can do it all, all the while developing a foundation that is dependable and scalable. Let us empower your organization and demonstrate your impact to stakeholders. Want to dive deeper? We would love to help. Get in <Link href="/contact"><a>contact</a></Link> today.</p><p>Read the complete article that inspired this post <Link href="https://builtin.com/big-data/data-driven-company-culture?utm_campaign=Analytics&utm_medium=email&utm_source=Revue%20newsletter" ><a target="_blank">here</a></Link>.</p></>}
                                    {this.props.ctabusinessIntelligencePropels &&<> <p>How exactly can BI grow a CFO’s contribution to an organization? This graphic from Linkedin presents six ways they can impact and add value at each stage of data maturity.</p><img src='https://storage.googleapis.com/daasly_public/BI_graph-600x338.png' alt="bi graph" style={{display: "block", marginRight: "auto", marginLeft: "auto", marginBottom: 20}}/><p> If you’re ready to bring BI to your organization and need help figuring out where to start, Daasly can offer a few pointers. Schedule a complimentary <Link href="http://bit.ly/DiscoverDaasly1"><a target="_blank">discovery session</a></Link> today to get started. We help companies like yours transform into data-driven businesses. Our outsourced Business Intelligence solution can do it all. Let us empower your organization and demonstrate your impact to stakeholders. Want to dive deeper? We would love to help. Get in <Link href="/contact"><a>contact</a></Link> today.</p><p>Read the complete article that inspired this post <Link href="https://www.forbes.com/sites/joelshapiro/2020/06/30/why-data-analytics-small-aha-moments-can-have-a-big-impact/#28313f9b13be" ><a target="_blank">here</a></Link>.</p></>}
                                    {!this.props.ctabusinessIntelligencePropels || !this.props.ctaDataDriven || !this.props.ctaSmallMoments || !this.props.ctaMarathon || !this.props.ctaFirstStep || !this.props.ctaDataBuyIn || !this.props.ctaDomoAWS || !this.props.ctaGTM || !this.props.ctaGADimensions || !this.props.ctaRealTime || !this.props.ctaStrategy || !this.props.ctaCreativeData || !this.props.ctaCreativeData || !this.props.ctaCovid && <p>Read the complete article that inspired this post <a target="_blank" href={this.props.articleLink}>here</a>.</p>}




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