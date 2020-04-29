import React, { Component } from 'react';
import Navbar2 from '../components/Layouts/Navbar2';
import GetStartedProject from '../components/Common/GetStartedProject';
import PageBanner from '../components/Common/PageBanner';
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
                <GetStartedProject 
                    smallTitle="Google Analytics" 
                    title="Google Tag Manager and Google Analytics Management" 
                    button="Schedule a Consultation"
                    subtext={true}
                />
                {/* <PageBanner
                    pageTitle="Google Analytics" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                /> */}
                <ServiceDetailsContent 
                    header="Get the Most Out of Google"
                    subtext="Our team will become experts on your organization’s goals and configure your Google tools to work towards them. Get accurate user behavior tracking that leads to actionable insights, and let our team personalize your dashboards to save you time and increase your data’s productivity."
                    listItems="" 
                    imageOne={require('../images/projects/project5.png')}
                    imageTwo={require('../images/tab-solution.png')}
                    secondList={{one: "Google tools audits and diagnostics ", two: "Google Tag Manager, Optimize and Data Studio implementation", three: "Data visualization and reporting through customized dashboards", four: "Provide detailed analytics about user activity and behavior", five: "Measurement framework creation", six: "Testing and Optimization", seven: "Client training and support"}}
                    headerTwo="What We Do"
                />
                <GetStartedProject 
                    spacing='productive-section pt-60'
                    smallTitle="Let's Get Started" 
                    title="Ready for Better Analytics?" 
                    button="Schedule a Consultation"
                    body='Get on track for a better, effective and more productive business by tackling your most difficult data problems with Daasly. '
                />
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;