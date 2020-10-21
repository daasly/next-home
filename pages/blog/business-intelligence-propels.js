import React, { Component } from 'react'
import Navbar2 from '../../components/Layouts/Navbar2'
import PageBanner from '../../components/Common/PageBanner'
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent'
import Footer from '../../components/Layouts/Footer'

class BusinessIntelligence extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar2 />
        <br />
        <br />
        <br />
        <br />
        <BlogDetailsContent
          date='September 18, 2020 '
          author='Emilio Izquierdo'
          title='How Business Intelligence Propels CFOs'
          quote='Stakeholders are demanding more from CFO’s. With a BI team, CFO’s can finally meet and exceed these requests.'
          text2='Long gone are the days of the ancient CFO who kept the books in order, managed the budget, and looked after cash. The demands on a CFO are moving beyond the capabilities of Excel and into the capability of Business Intelligence teams and the tools they use. When coupled, a CFO and BI department is a powerful combination. The data expertise of the BI team propels a CFO to impact a great deal more of the business with their expertise than previously capable.'
          ctabusinessIntelligencePropels={true}
          articleLink='https://www.business2community.com/finance/6-ways-business-intelligence-makes-better-cfos-02342895?utm_campaign=Analytics&utm_medium=email&utm_source=Revue%20newsletter'
          shareLink='https://www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/business-intelligence-propels&title=&summary=&source='
        />
        <Footer />
      </React.Fragment>
    )
  }
}

export default BusinessIntelligence
