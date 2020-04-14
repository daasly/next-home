import React, { Component } from "react"
import Navbar from "../components/Layouts/Navbar"
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
				<Navbar />
				<PageBanner
					pageTitle="Contact Us"
					breadcrumbTextOne="Let's Get to Work"
					breadcrumbTextTwo="We're Here to Help"
					breadcrumbUrl="#"
				/>
				<CookiesConsent/>
				<ContactInfo />
				<ContactForm />
				<div className="ptb-100">
					<SubscribeStyleThree />
				</div>
				<Footer />
			</React.Fragment>
		)
	}
}

export default Contact
