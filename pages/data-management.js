import React, { Component } from 'react';
import Navbar2 from '../components/Layouts/Navbar2';
import GetStartedProject from '../components/Common/GetStartedProject';
import PageBanner from '../components/Common/PageBanner';
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
                <GetStartedProject 
                    smallTitle="Data Management" 
                    title="Continuous Support and Execution of Your Data Strategy" 
                    button="Schedule a Consultation"
                    subtext={true}
                />
                {/* <PageBanner
                    pageTitle="Data Management" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Service Details" 
                    breadcrumbUrl="/" 
                /> */}
                <ServiceDetailsContent 
                    header="Add Our Expertise to Your Team's Skill Set" 
                    subtext="Give your analysts their time back with Daasly’s Data Management service. Ensure your data quality always meets your highest standards of cleanliness and reporting by letting our team of experts administer your data systems. By adding our expertise to your team’s skill set, you can unlock their full capacity for discovery and providing insights." 
                    headerTwo="What We Do" 
                    imageOne={require('../images/projects/project6.png')}
                    imageTwo={require('../images/contact.png')}
                    listItems="" 
                    secondList={
                        {
                            one: "Ongoing data pipeline management", 
                            two:"Continuous support with data-related tasks", 
                            three: "Frequent strategy optimization", 
                            four: "Routine data quality checks"
                        }
                    } />
                <WorkingProcess 
                smallTitle='People, Process & Technology'
                padding={'process-section pt-20 pb-70'}
                text='Our team works with you to manage the people, processes and technology within your organization. How do we do this?'
                people='Using our team’s services, give your people time back so they can fulfill their analytics and data science roles more efficiently'
                processText='We’ll help you scope, build and continuously monitor your data pipeline to ensure accuracy'
                techText='We manage your tools and help you maximize their efficiency'
                />
                <GetStartedProject 
                    spacing='productive-section pt-80'
                    smallTitle="Let's Get Started" 
                    title="Ready for Better Data" 
                    button="Schedule a Consultation"
                    body='Get on track for a better, effective and more productive business by tackling your most difficult data problems with Daasly. '
                />
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