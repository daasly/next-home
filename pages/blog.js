import React, { Component } from "react"
import Navbar from "../components/Layouts/Navbar"
import PageBanner from "../components/Common/PageBanner"
import BlogCard from "../components/Blog/BlogCard"
import Footer from "../components/Layouts/Footer"

class Blog extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<PageBanner
					pageTitle="Blog"
					breadcrumbTextOne="Home"
					breadcrumbTextTwo="Blog"
					breadcrumbUrl="/"
				/>
				<BlogCard />
				<Footer />
			</React.Fragment>
		)
	}
}

export default Blog
