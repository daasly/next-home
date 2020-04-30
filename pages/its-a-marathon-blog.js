import React, { Component } from 'react';
import Navbar2 from '../components/Layouts/Navbar2';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';
import Footer from '../components/Layouts/Footer';

class ItsAMarathonBlog extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar2 />
                <br/>
                <br/>
                <br/>
                <br/>
                <BlogDetailsContent 
                  date='August 9, 2019' 
                  author='Emilio Izquierdo' 
                  title="It's a Marathon, Not a Sprint"
                  quote="Our advanced technology and machine learning algorithms allow organizations to quickly detect data relationships in structured, semi-structured, and some unstructured formats."
                  text="The vast majority of data collected and available today is semi-structured at best, this is profoundly true with small and mid-sized digital companies. All too often I run across companies that attempt to begin leveraging their data by seeking out the 'right' tools and tackling their data with all the great buzz words: Analytics, Machine Learning, Algorithms, Big Data, etc. In the end, your data is only as useful as it's collected, organized, and stored. However, these 3 key steps are often overshadowed by the front end deliverables of data and often times glanced over altogether. The more resources you commit to creating a sound data strategy focused on those 3 key areas, the more useful your data becomes. Think of your data strategy as a marathon and not a sprint. Invest in your data people more than your data tools."
                  articleLink="https://tdwi.org/articles/2019/06/21/ADV-ALL-Move-to-Smart-Data-Discovery.aspx?utm_source=nl&utm_medium=email&utm_campaign=nl215&share=&mkt_tok=eyJpIjoiTURaaE16UmpZVGt5TkdFNSIsInQiOiJpQ0JRODk5amkwMnc2dGRWVngzODY0SVpVMERnbWpxNWpiOVhRVTNPUEFlaUVIZ29LNTYxXC9jTk5MZ0ZlcGlMT0pBVTNIQ2M0OEhmOXFZSXJmaWF0d0NcL3lHTldhSlZnRnR2STBoTkRaaGVMdCtMRmpPZFdCRVR4eTkzb3BOenJXIn0%3D"
                  />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ItsAMarathonBlog;