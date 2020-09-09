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
                <GetStartedProject domo={true} smallTitle="Outsourced Business Intelligence"title="Domo Certified Platform Professional Services Partner" button="Schedule a Consultation" subtext={true}/>
                {/* <PageBanner
                    pageTitle="Business Intelligence Consulting" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                /> */}
                <ServiceDetailsContent 
                   header="Add Our Expertise to Your Team's Skill Set" 
                   subtext="Daasly is a proud Certified Domo Platform, Professional Services and Technical Consultant Partners. Domo is a game-changing, cloud-based platform specializing in business intelligence tools and data visualization. Domo can be used to:"
                   listItems={{ one: 'Connect Platforms', two: 'Align Metrics', three: "Measure Data", four: "Analyze Information", five: "Optimize Performance", six: "Predict Results", seven: "Visualize Information", eight: "Automate Processes"}}
                   headerTwo="What We Do"
                   secondList={{one: 'Fast delivery of data-driven business analytics', two: 'Easy-to-use, customized Business Intelligence dashboards', three: 'Streamlined and automated data analytics and reporting', four: 'Predictive forecasting through analysis of business data', five: 'Share our insights and data to collaborate with your team'}}
                   domo={true}
                   imageOne={require('../images/projects/project1.png')}
                   imageTwo={require('../images/about.png')}
                   />
                   <GetStartedProject spacing='productive-section pt-80' smallTitle="Let's Get Started"title="Ready for Better Intelligence?" button="Schedule a Consultation" body='Get on track for a better, effective and more productive business by tackling your most difficult data problems with Daasly.' />
                    <br/>
                    <br/>
                    <br/>
                   
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;