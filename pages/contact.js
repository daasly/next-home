import React, { Component } from "react"
import Navbar2 from "../components/Layouts/Navbar2"
import PageBanner from "../components/Common/PageBanner"
import ContactInfo from "../components/Contact/ContactInfo"
import ContactForm from "../components/Contact/ContactForm"
import SubscribeStyleThree from "../components/Common/SubscribeStyleThree"
import Footer from "../components/Layouts/Footer"
import CookiesConsent from "../components/Layouts/CookiesConsent/CookiesConsent"

class Contact extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar2 />
				<br/>
				<br/>
				<br/>
				<br/>
				{/* <PageBanner
					pageTitle="Contact Us"
					breadcrumbTextOne="Let's Get to Work"
					breadcrumbTextTwo="We're Here to Help"
					breadcrumbUrl="#"
				/> */}
				<ContactInfo />
				<ContactForm />
				<div className="ptb-100">
					<SubscribeStyleThree />
				</div>
        <CookiesConsent/>
				<Footer />
			</React.Fragment>
		)
	}
}

export default Contact
