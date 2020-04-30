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
                <GetStartedProject smallTitle="Data Execution" title="Execute All the Components of Your Data Strategy" button='Schedule a Consultation' subtext={true}/>
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
                    smallTitle="People, Process & Technology"
                    padding={'process-section pt-20 pb-70'}
                    text="Our team works with you by activating the people, processes, and technology within your organization. How do we do this?"
                    people='Save your team time by using our people’s expertise when you need it'
                    processText='We’ll implement plans by executing your data strategy'
                    techText='We’ll onboard your new technologies from any source, then provide support with their management and execution'
                    buttonText="Get Started"
                />
                <GetStartedProject spacing='productive-section pt-80' smallTitle="Let's Get Started" title="Ready for Better Data?" button='Schedule a Consultation' body='Get on track for a better, effective and more productive business by tackling your most difficult data problems with Daasly.'/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;