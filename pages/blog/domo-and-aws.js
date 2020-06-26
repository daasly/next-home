import React, { Component } from 'react';
import Navbar2 from '../../components/Layouts/Navbar2';
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent';
import Footer from '../../components/Layouts/Footer';

class DomoAndAWS extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar2 />
                <br />
                <br />
                <br />
                <br />
                <BlogDetailsContent
                    date='Febraury 19, 2020'
                    author='Emilio Izquierdo'
                    title="Domo Partners with AWS"
                    quote="The new Domo BI platform update features a new collaboration with AWS to enable users to work with third-party data and a low-code tool for developers."
                    text2={true}
                    ctaDomoAWS={true}
                    text="It’s great to see Domo, our preferred BI Platform, continue to expand its partnership with AWS. Our Domo clients will now be able to easily access over 1,700 datasets available via the AWS Data Exchange. This removes the extra steps traditionally needed for creating any custom data pipelines to acquire information from third party vendors."
                    articleLink="//searchbusinessanalytics.techtarget.com/news/252478537/AWS-collaboration-highlight-Domo-analytics-platform-update"
                    shareLink="https://www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/domo-and-aws&title=&summary=&source="
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default DomoAndAWS;