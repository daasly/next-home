import React, { Component } from 'react';
import Navbar2 from '../../components/Layouts/Navbar2';
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent';
import Footer from '../../components/Layouts/Footer';

class Pivot extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar2 />
                <br/>
                <br/>
                <br/>
                <br/>
                <BlogDetailsContent 
                  date='May 07, 2020' 
                  author='Emilio Izquierdo' 
                  title="Benefits of a Responsive Data Strategy"
                  quote="A responsive data strategy enables even the most complex businesses to be resilient and agile in times of change."
                  text="We’ve all observed the monumental impact the art and science of flexibility can have on a business. A solid data strategy should be developed with this in mind. Strategies need to pivot as the tides change and you want a strategy that can be easily and quickly adapted. After all, the better the access to the right data means the better the outcome on all corners of a business: responding to customer needs, restructuring organizations, reimagining operations, and the list goes on. "
                  text2={true}
                  articleLink="https://www.cmswire.com/digital-experience/a-responsive-data-strategy-is-more-critical-now-than-ever-before/"
                  shareLink="https://www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/pivot&title=&summary=&source="
                  needHelp='Need help pivoting your existing strategy or setting up a new strategy? Daasly, Inc. is here for you!'
                  />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Pivot;