import React, { Component } from "react"
import Navbar2 from "../components/Layouts/Navbar2"
import PageBanner from "../components/Common/PageBanner"
import AboutUsContent from "../components/AboutUs/AboutUsContent"
import FunFacts from "../components/Common/FunFacts"
import GetStartedProject from "../components/Common/GetStartedProject"
import Testimonial from "../components/Common/Testimonial"
import TeamMember from "../components/Common/TeamMember"
import Customers from "../components/Common/Customers"
import Footer from "../components/Layouts/Footer"

class AboutUs extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar2 />
				<br/>
				<br/>
				<br/>
				<br/>
				{/* <PageBanner
					pageTitle="About Us"
					breadcrumbTextOne="Why Daasly"
					breadcrumbTextTwo="About Us"
					breadcrumbUrl="#"
				/> */}
				<AboutUsContent />
				<FunFacts />

				<div className="pb-100">
					<GetStartedProject smallTitle="Let's Get Started" title="Ready to Get to Work?" contact={true} />
				</div>

				<Testimonial />
				<TeamMember />
				<Customers />
				<Footer />
			</React.Fragment>
		)
	}
}

export default AboutUs
