import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/Faq/FaqContent';
import FaqContactForm from '../components/Faq/FaqContactForm';
import Footer from '../components/Layouts/Footer';
import CookiesConsent from "../components/Layouts/CookiesConsent/CookiesConsent"

class Faq extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Frequently Asked Questions" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Faq" 
                    breadcrumbUrl="/" 
                />
                <CookiesConsent/>
                <FaqContent />
                <FaqContactForm />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Faq;