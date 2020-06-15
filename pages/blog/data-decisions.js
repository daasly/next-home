import React, { Component } from 'react';
import Navbar2 from '../../components/Layouts/Navbar2';
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent';
import Footer from '../../components/Layouts/Footer';

class DataDecisions extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar2 />
                <br/>
                <br/>
                <br/>
                <br/>
                <BlogDetailsContent 
                  date='June 03, 2020' 
                  author='Emilio Izquierdo' 
                  title="Make Better Data Decisions"
                  quote="A BI strategy that will put you in control of your data environment."
                  textLink="//www.data.com/export/sites/data/common/assets/pdf/DS_Gartner.pdf"
                  linkedText="Gartner"
                  text="recently described the elements of a BI strategy that will put you in control of your data environment. The strategy should provide a deep understanding of your data sources, format, status, owners, and how it changes. The Daasly Report Rewind does this and more. Through an interactive whiteboard session, we dive deep to understand your current process and what you’re trying to measure and report. Our experts examine the people, process, and technology within your organization to identify gaps and provide recommendations."
                  // text2="Interested to know more about Daasly’s Report Rewind? Check out our process and how we can help."
                  articleLink="//tdwi.org/articles/2020/05/08/BI-ALL-How-to-Make-Better-Data-Decisions.aspx?utm_source=nl&utm_medium=email&utm_campaign=nl260&share=&mkt_tok=eyJpIjoiTWpKaFl6WTFOekE0WWprdyIsInQiOiJKVGkraDc3UXZtM3UxY1VnT2dHMTZPTTdvMThDSGhGRFh0NmVmdHhPcFRXZWY0ZjFtQURxclYxMEQzZDFVOW9LRnlLVXR1RjRhYUhuOVM1cDVYNjZCZHgxMzhldG1YcDJsd01uNVlSa01waUNLdjFPa083SHZMNWxpeDB3MWVrRSJ9"
                  shareLink="//www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/data-decisions&title=&summary=&source="
                  />
                <Footer />
            </React.Fragment>
        )
    }
}

export default DataDecisions;