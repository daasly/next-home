import React, { Component } from 'react'
import Navbar2 from '../../components/Layouts/Navbar2'
import PageBanner from '../../components/Common/PageBanner'
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent'
import Footer from '../../components/Layouts/Footer'

class SmallMoments extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar2 />
        <br />
        <br />
        <br />
        <br />
        <BlogDetailsContent
          date='August 18, 2020 '
          author='Emilio Izquierdo'
          title='These Four Principles will Inspire a Data Driven Culture '
          quote='Unlock the full potential of your organization by adopting a data driven culture. Tackle new challenges and continue moving forward with trusted, comprehensive answers back by data.'
          text2='Building a data driven culture requires an investment of many resources. For starters, the culture needs to be ingrained in an organization: managers should ask for the back up that leads to decision making and when communicating they should provide the data that supports their decisions. Tools that promote data discovery should be easily and continuously accessible to employees, encouraging self-service. Don’t just answer the ‘what’ questions dig deeper to answer the ‘why’. This approach encourages exploration and dives deep into the root cause that can provide valuable insights and action. As the date culture permeates and accessibility increases, accelerate the rate of decision making by embedding analysts that actively participate in various business units.'
          ctaDataDriven={true}
          articleLink='https://builtin.com/big-data/data-driven-company-culture?utm_campaign=Analytics&utm_medium=email&utm_source=Revue%20newsletter'
          shareLink='https://www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/data-driven&title=&summary=&source='
        />
        <Footer />
      </React.Fragment>
    )
  }
}

export default SmallMoments
