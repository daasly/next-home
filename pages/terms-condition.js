import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TermsConditionContent from '../components/TermsCondition/TermsConditionContent';
import Footer from '../components/Layouts/Footer';
import CookiesConsent from "../components/Layouts/CookiesConsent/CookiesConsent"

class TermsCondition extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Terms & Conditions" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Terms & Conditions" 
                    breadcrumbUrl="/" 
                />
                <TermsConditionContent />
                <CookiesConsent/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default TermsCondition;