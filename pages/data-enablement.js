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
                <GetStartedProject title={"Data Enablement"}/>
                {/* <PageBanner
                    pageTitle="Data Enablement" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                /> */}
                <ServiceDetailsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;