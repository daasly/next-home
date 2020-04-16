import React, { Component } from "react"
import Navbar from "../components/Layouts/Navbar"
import PageBanner from "../components/Common/PageBanner"
import BlogCard from "../components/Blog/BlogCard"
import Footer from "../components/Layouts/Footer"

class ThankYou extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<PageBanner
					pageTitle="Thanks for your message! We will be in touch with you very soon. In the mean time, read the latest updates on our blog."
					breadcrumbTextOne="Home"
					breadcrumbTextTwo="Thank You"
					breadcrumbUrl="/"
				/>
				<BlogCard />
				<Footer />
			</React.Fragment>
		)
	}
}

export default ThankYou
