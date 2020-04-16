import React, { Component } from 'react';
import Navbar2 from '../components/Layouts/Navbar2';
import PageBanner from '../components/Common/PageBanner';
import GetStartedProject from '../components/Common/GetStartedProject';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar2 />
                <br/>
                <br/>
                <br/>
                <br/>
                <GetStartedProject smallTitle="Business Intelligence Consulting"title="Domo Certified Platform Professional Services Partner" button="Schedule a Consultation"/>
                {/* <PageBanner
                    pageTitle="Business Intelligence Consulting" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                /> */}
                <ServiceDetailsContent 
                   header="Add Our Expertise to Your Team's Skill Set" 
                   subtext="Daasly is a proud Certified Domo Platform, Professional Services and Technical Consultant Partners. Domo is a game-changing, cloud-based platform specializing in business intelligence tools and data visualization. Domo can be used to"
                   listItems={{ one: 'Connect', two: 'Align', three: "Measure", four: "Analyze", five: "Optimize", six: "Predict", seven: "Visualize", eight: "Automate"}}
                   headerTwo="What We Do"
                   secondList={{one: 'Fast delivery of data-driven business analytics', two: 'Easy-to-use, customized Business Intelligence dashboards', three: 'Streamlined and automated data analytics and reporting', four: 'Predictive forecasting through analysis of business data', five: 'Share on insights and data to collaborate with your team'}}
                   />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;