import React, { Component } from "react"
import Navbar2 from "../components/Layouts/Navbar2"
import PageBanner from "../components/Common/PageBanner"
import BlogCard from "../components/Blog/BlogCard"
import Footer from "../components/Layouts/Footer"
import CookiesConsent from "../components/Layouts/CookiesConsent/CookiesConsent"

class Blog extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar2 />
				<br/>
				<br/>
				<br/>
				<br/>
				{/* <PageBanner
					pageTitle="Blog"
					breadcrumbTextOne="Home"
					breadcrumbTextTwo="Blog"
					breadcrumbUrl="/"
				/> */}
				<BlogCard />
        <CookiesConsent/>
				<Footer />
			</React.Fragment>
		)
	}
}

export default Blog
