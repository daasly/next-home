import React, { Component } from 'react'
import Navbar2 from '../../components/Layouts/Navbar2'
import PageBanner from '../../components/Common/PageBanner'
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent'
import Footer from '../../components/Layouts/Footer'

class StrategyAndSocialGood extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar2 />
        <br />
        <br />
        <br />
        <br />
        <BlogDetailsContent
          date='June 15, 2020'
          author='Emilio Izquierdo'
          title="5 Steps to Creating a Data Strategy to Drive Your Nonprofit's Social Good"
          quote="Consider these five steps to develop a well-informed, well-defined data strategy for your nonprofit organization and gain an advantage."
          text='Want to know more about the people you serve and donors who support you? We don’t blame you. If you’re a nonprofit looking to get more value from their data, meaning you want to effectively fulfill and advance the mission of your organization, start with developing a well-defined data-strategy. These five steps are a great start!'
          text2="1. Define your goals. This helps inform what data you collect by determining the top priorities and clarifying intentions for use and governance."
          text3="2. Identify bottlenecks. A comprehensive strategy enables access and consumption so everyone feels confident in their business intelligence."
          text4="3. Know the laws and regulations. There is an ethical and legal responsibility to know the laws surrounding proper privacy, security measures, and how and what data to collect and maintain."
          text5="4. Implement the right tools. An enterprise application provides a 360-degree view of everything from contact records, marketing campaigns, and program management."
          text6="5. Prepare to evolve. No technology is long-term because it evolves rapidly as does the shifting landscape. Be agile enough to pivot to meet changing demands and goals."
          text7="Daasly can help you empower your organization and demonstrate your impact to stakeholders. Want to dive deeper? We would love to help. Get in contact today."
          articleLink='//www.statsglitch.com/google-analytics-real-time-alerts-4.html'
          shareLink='https://www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/real-time-alerts&title=&summary=&source='
        />
        <Footer />
      </React.Fragment>
    )
  }
}

export default StrategyAndSocialGood
