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
                <GetStartedProject smallTitle="Data-Centric Software Development" title='Custom Dashboards, Lead Management, and Visualization Systems' button="Schedule a Consultation" subtext={true}/>
                {/* <PageBanner
                    pageTitle="Data-Centric Dashboard Development" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                /> */}
                <ServiceDetailsContent 
                    header="See Your Data How You Want To" 
                    subtext='Provide your team with a clear and organized, custom-built dashboard to suit your organization’s exact needs and priorities. Our Data-Centric Software Development service includes custom lead management systems to help optimize your CRM, as well as seamless API integration of your most relevant data, so you can see exactly what you need and make analysis effortless.' 
                    listItems="" 
                    imageOne={require('../images/projects/project3.png')}
                    imageTwo={require('../images/data-service.png')}
                    headerTwo="What We Do" 
                    secondList={{one: "Help identify your key data sources", two: "Develop blueprints for tools and dashboard design", three: "Seamless API and additional systems integrations", four: "Full-stack web and app development", five: "Quality-test your custom technology to ensure efficiency"}} 
                />
                <GetStartedProject spacing='productive-section pt-80' smallTitle="Let's Get Started" title='Ready for Better Software?' button="Schedule a Consultation" body='Get on track for a better, effective and more productive business by tackling your most difficult data problems with Daasly.' />
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