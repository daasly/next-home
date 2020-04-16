import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PrivacyPolicyContent from '../components/PrivacyPolicy/PrivacyPolicyContent';
import Footer from '../components/Layouts/Footer';
import CookiesConsent from "../components/Layouts/CookiesConsent/CookiesConsent"

class PrivacyPolicy extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Privacy Policy" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Privacy Policy" 
                    breadcrumbUrl="/" 
                />
                <CookiesConsent/>
                <PrivacyPolicyContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default PrivacyPolicy;