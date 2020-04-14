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
                <GetStartedProject smallTitle="Custom Dashboard Development" title='Custom Lead Management Systems' button="Schedule a Consultation"/>
                {/* <PageBanner
                    pageTitle="Data-Centric Dashboard Development" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                /> */}
                <ServiceDetailsContent 
                    header="See your data how you want to" 
                    subtext='Provide your team with a clear and organized, custom-built dashboard to suit your organization’s exact needs and priorities. Our Custom Dashboard Development service includes seamless API integration of your most relevant data, so you can see exactly what you and make analysis effortless.' 
                    listItems="" 
                    headerTwo="What We Do" 
                    secondList={{one: "Help identify your key data sources", two: "Develop blueprints for tools and dashboard design", three: "Seamless API and additional systems integrations", four: "Full-stack web and app development", five: "Quality-test your custom technology to ensure efficiency"}} 
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;