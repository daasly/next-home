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
                <GetStartedProject smallTitle="Data Enablement" title="Execute All the Components of Your Data Strategy" button='Schedule a Consultation'/>
                {/* <PageBanner
                    pageTitle="Data Enablement" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                /> */}
                <ServiceDetailsContent 
                    header="Get From Data to Insights" 
                    subtext='Work with our team to execute all the components of your data strategy with complete attention to detail. Bring your strategy to life in order to leverage your data to achieve real organizational goals. Let our experts activate your data plans with custom-built tools and comprehensive support.' 
                    headerTwo='What We Do'
                    imageOne={require('../images/projects/project2.png')}
                    imageTwo={require('../images/tab-solution.png')}
                    secondList={
                        {
                            one: "Find the right tools or roles for your organization",
                            two: "Establish a clean and consistent data pipeline",
                            three: "Ensure your data is delivered when you need it",
                            four: "Enable master repositories for your data"
                        }
                    }
                />
                <WorkingProcess 
                    padding={'process-section pt-20 pb-70'} 
                    text="Our team works with you to identify gaps between people, processes and technology within your organization. How do we do this?"
                    buttonText="Learn More"
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;