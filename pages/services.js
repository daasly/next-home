import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FeaturedService from '../components/Services/FeaturedService';
import ServicesContent from '../components/Services/ServicesContent';
import SubscribeStyleThree from '../components/Common/SubscribeStyleThree';
import Footer from '../components/Layouts/Footer';
import CookiesConsent from "../components/Layouts/CookiesConsent/CookiesConsent"

class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Services" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Services" 
                    breadcrumbUrl="/" 
                />
                <CookiesConsent/>
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