import React, { Component } from "react"
import Navbar from "../components/Layouts/Navbar"
import MainBanner from "../components/HomeOne/MainBanner"
import OurServices from "../components/HomeOne/OurServices"
import AboutUs from "../components/HomeOne/AboutUs"
import FunFacts from "../components/Common/FunFacts"
import WorkingProcess from "../components/HomeOne/WorkingProcess"
import FeaturedService from "../components/HomeOne/FeaturedService"
import Testimonial from "../components/Common/Testimonial"
import GetStartedProject from "../components/Common/GetStartedProject"
import BlogPost from "../components/Common/BlogPost"
import Customers from "../components/Common/Customers"
import Subscribe from "../components/Common/Subscribe"
import Footer from "../components/Layouts/Footer"
import CookiesConsent from "../components/Layouts/CookiesConsent/CookiesConsent"

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MainBanner />
                <OurServices />
                <AboutUs />
                <FunFacts />
                <WorkingProcess services={true}/>
                <div className="pb-100">
                    <FeaturedService />
                </div>
                <Testimonial />
                <GetStartedProject smallTitle="Let's Get Started" title={"Ready to Get to Work?"} contact={true} />
                <BlogPost />
                <Customers />
                <Subscribe />
                <CookiesConsent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index
