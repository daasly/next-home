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
          date='July 17, 2020'
          author='Emilio Izquierdo'
          title='Small Moments Generate Big Impacts'
          quote='Data Findings aren’t underwhelming when they align with intuition, they are confirmation. Without this verification, it’s only guessing. '
          text2='When the results of data analysis align with intuition it can be easy to fall into the camp that thinks the results are underwhelming. The alternative perspective is to appreciate the findings as verification and confirmation that can be built upon. Solid evidence should never be a disappointment rather, it should yield peace of mind. Decisions are transformed from being the result of a guessing game to the result of evidence.'
          ctaSmallMoments={true}
          articleLink='https://www.forbes.com/sites/joelshapiro/2020/06/30/why-data-analytics-small-aha-moments-can-have-a-big-impact/#337e7f4a13be'
          shareLink='https://www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/small-moments&title=&summary=&source='
        />
        <Footer />
      </React.Fragment>
    )
  }
}

export default SmallMoments
