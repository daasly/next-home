import React, { Component } from 'react';
import Navbar2 from '../components/Layouts/Navbar2';
import PageBanner from '../components/Common/PageBanner';
import GetStartedProject from '../components/Common/GetStartedProject';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';
import WorkingProcess from '../components/HomeOne/WorkingProcess';
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
                <GetStartedProject smallTitle="Data Strategy" title="Map the Course to a Sound and Scalable Analytical Platform"/>
                {/* <PageBanner
                    pageTitle="Data Strategy" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                /> */}
                <ServiceDetailsContent 
                    header="Is Your Data Working for You?" 
                    subtext="We believe the key to effective data strategy lies in a complete understanding of your organization’s challenges, needs, goals and objectives. We will guide you through analyzing your current data journey and the process of identifying key data points needed to achieve your goals." 
                    headerTwo="What We Do"
                    secondList={
                        {
                            one: "Study and understand your existing data journey",
                            two: "Identify the key data needed to meet your goals",
                            three: "Map out the desired future-state environment ",
                            four: "Roadmap to a sound and scalable analytical platform"
                        }
                    }
                />
                <WorkingProcess padding={'process-section pt-20 pb-70'} buttonText="Learn More"/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;