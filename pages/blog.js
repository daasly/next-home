import React, { Component } from "react"
import Navbar2 from "../components/Layouts/Navbar2"
import PageBanner from "../components/Common/PageBanner"
import BlogCard from "../components/Blog/BlogCard"
import Footer from "../components/Layouts/Footer"

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
				<Footer />
			</React.Fragment>
		)
	}
}

export default Blog
