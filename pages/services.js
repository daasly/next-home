import React, { Component } from 'react';
import Navbar2 from '../components/Layouts/Navbar2';
import PageBanner from '../components/Common/PageBanner';
import FeaturedService from '../components/Services/FeaturedService';
import ServicesContent from '../components/Services/ServicesContent';
import SubscribeStyleThree from '../components/Common/SubscribeStyleThree';
import Footer from '../components/Layouts/Footer';

class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar2 />
                <br/>
                <br/>
                <br/>
                <br/>
                {/* <PageBanner
                    pageTitle="Services" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Services" 
                    breadcrumbUrl="/" 
                /> */}
                <FeaturedService />
                <ServicesContent />
                <div className="pb-100">
                    <SubscribeStyleThree />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Services;