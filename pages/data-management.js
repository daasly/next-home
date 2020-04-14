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
                <GetStartedProject smallTitle="Data Management" title="Continuous support and execution of your data strategy" button="Schedule a Consultation"/>
                {/* <PageBanner
                    pageTitle="Data Management" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                /> */}
                <ServiceDetailsContent header="Add our expertise to your team's skill set" subtext="Reduce your workload with Daasly’s Data Management service. Ensure your data quality always meets your highest standards by letting our team of experts administer your data systems. By adding our expertise to your team’s skill set you can unlock your data’s full capacity for providing insights.
" headerTwo="What We Do" listItems="" secondList={{one: "Ongoing data pipeline management", two:"Continuous support with data-related tasks", three: "Frequent strategy optimization", four: "Routine data quality checks"}} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;