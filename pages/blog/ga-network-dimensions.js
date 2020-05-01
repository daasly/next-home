import React, { Component } from 'react';
import Navbar2 from '../../components/Layouts/Navbar2';
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent';
import Footer from '../../components/Layouts/Footer';

class GANetworkDimensions extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar2 />
                <br/>
                <br/>
                <br/>
                <br/>
                <BlogDetailsContent 
                  date='March 04, 2020' 
                  author='Emilio Izquierdo' 
                  title="Removed Dimensions from Google Analytics"
                  quote="Mourning the Death of “Service Provider” & “Network Domain” in Google Analytics"
                  text="Were you affected by Google’s decisions to remove the Service Provider and Network Domain dimensions from Google Analytics (GA)? These dimensions are commonly used to filter out internal network traffic that may skew your analytics. Have no fear, there are other solutions! One solution is to assign an identifier to the user agent field on your corporate browsers, this dimension can be picked up as a custom dimension and used to filter out your internal traffic. 
                      Need help? Daasly is here for you!"
                  articleLink="//www.clickinsight.ca/blog/service-provider-not-set-google-analytics"
                  shareLink="https://www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/ga-network-dimensions&title=&summary=&source="
                  />
                <Footer />
            </React.Fragment>
        );
    }
}

export default GANetworkDimensions;