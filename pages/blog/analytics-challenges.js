import React, { Component } from 'react'
import Navbar2 from '../../components/Layouts/Navbar2'
import PageBanner from '../../components/Common/PageBanner'
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent'
import Footer from '../../components/Layouts/Footer'

class AnalyticsChallenges extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar2 />
        <br />
        <br />
        <br />
        <br />
        <BlogDetailsContent
          date='October 20, 2020 '
          author='Emilio Izquierdo'
          title='Analytics Challenges and How to Resolve Them'
          quote='Data analytics is critical to staying relevant and competitive. These are the top challenges you’ll face and how to overcome them.'
          text2='The analytics market is growing rapidly, it’s expected to grow at an annual rate of 30% until 2023.This increase is a testament to the future of digital business and speaks to the future impossibility of doing business without data. So what are the obstacles between you and a successful analytics function? Before you implement or scale your business consider the following challenges and their solutions.'
          ctaAnalyticsChallenges={true}
          articleLink='https://insidebigdata.com/2020/09/01/top-3-data-analytics-challenges-and-how-to-resolve-them/'
          shareLink='https://www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/analytics-challenges&title=&summary=&source='
        />
        <Footer />
      </React.Fragment>
    )
  }
}

export default AnalyticsChallenges
