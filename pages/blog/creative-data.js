import React, { Component } from 'react';
import Navbar2 from '../../components/Layouts/Navbar2';
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent';
import Footer from '../../components/Layouts/Footer';

class Covid19 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar2 />
                <br/>
                <br/>
                <br/>
                <br/>
                <BlogDetailsContent 
                  date='May 13, 2020' 
                  author='Emilio Izquierdo' 
                  title="Getting Creative with Data"
                  quote="Who says data is boring?"
                  text="It's cool to see how these creative data professionals incorporated visualizations into physical, touchable forms."
                  articleLink="//tdwi.org/articles/2020/04/22/BI-ALL-Visualization-Physical.aspx?utm_source=nl&utm_medium=email&utm_campaign=nl257&share=&mkt_tok=eyJpIjoiTURJeU56WmhOR1kyT1RRNCIsInQiOiJlYVpFNDBtRDJRMHNMcnQ3K3JXTldkQTM0NGM5MmFraGJ2eTJySDN6Q09oenNLQmxlMkh1WmFXRlZtMWJ0NDg0R0prWlI4dzlSQVVCSnpkWXR2aXFJSmJ2RG51TlRcL0JqOVRkaFJ4dXRaVXJcL2p1N00xb0ZwVGxKTHlSeUk1YTdlIn0%3D"
                  shareLink="https://www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/creative-data&title=&summary=&source="
                  />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Covid19;