import React, { Component } from 'react';
import Navbar2 from '../../components/Layouts/Navbar2';
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent';
import Footer from '../../components/Layouts/Footer';

class GoogleTagManager extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar2 />
                <br />
                <br />
                <br />
                <br />
                <BlogDetailsContent
                    date='Febraury 27, 2020'
                    author='Emilio Izquierdo'
                    title="Google Tag Manager is Your Friend"
                    quote="There are well over 11 reasons why you should use Google Tag Manager, these are just the tip."
                    text2={true}
                    ctaGTM={true}
                    text="Analytics Mania did a great job explaining the basics of what Google Tag Manager (GTM) is and why you should be using this powerful tool. In short, GTM empowers marketing teams to take control of tagging code, creating a clear distinction between the source code of your web applications and tagging events used for analytics in one place. The basic benefits of GTM are deployable by just about anyone who is willing to dedicate a little time to learn. Users with development experience can leverage GTM at much greater lengths."
                    articleLink="//www.analyticsmania.com/post/reasons-why-you-should-use-google-tag-manager/"
                    shareLink="https://www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/google-tag-manager&title=&summary=&source="
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default GoogleTagManager;