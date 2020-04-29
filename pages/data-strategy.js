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
                <GetStartedProject smallTitle="Data Strategy" title="Map the Course to a Sound and Scalable Analytical Platform" subtext={true}/>
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
                    imageOne={require('../images/projects/project4.png')}
                    imageTwo={require('../images/data-service.png')}
                    secondList={
                        {
                            one: "Study and understand your existing data journey",
                            two: "Identify the key data needed to meet your goals",
                            three: "Map out the desired future-state environment ",
                            four: "Roadmap to a sound and scalable analytical platform"
                        }
                    }
                />
                <WorkingProcess 
                    padding={'process-section pt-20 pb-70'} 
                    buttonText="Get Started"
                    text="Report Rewind is our process to find exactly where your organization needs us. We will guide you through a whiteboard exercise where we’ll perform a deep dive to understand what you are trying to measure and report, as well as your current process. During the Report Rewind process, we examine three fundamental aspects of your organization that are proven to affect the most positive change when optimized: your people, process and technology. Our Report Rewind process will identify gaps between these three aspects within your organization, which we will then turn into recommendations to meet your organization’s goals. What do we analyze with Report Rewind? "
                    processText='What does your data look like? How is your data stored? How does your data move across your systems?'
                    techText='Where is your data created? How can you access your data?'
                    />
                <GetStartedProject spacing='productive-section pt-80' smallTitle="Let's Get Started" title='Ready for Better Data?'/>
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