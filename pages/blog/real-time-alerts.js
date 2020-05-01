import React, { Component } from 'react';
import Navbar2 from '../../components/Layouts/Navbar2';
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent';
import Footer from '../../components/Layouts/Footer';

class RealTimeAlerts extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar2 />
                <br/>
                <br/>
                <br/>
                <br/>
                <BlogDetailsContent 
                  date='March 10, 2020' 
                  author='Emilio Izquierdo' 
                  title="Real-time Data and Alerts"
                  quote="Check out this guide, and soon you'll become a real-time data expert capable of solving lots of different problems."
                  text="Real-time data and alerts are valuable. Alerts in #googleanalytics, or any #bi tool, can be extremely useful but they can also create a distraction for your team. To best leverage real-time alerts, ensure there is a business need that necessitates an answer followed by a direct action that can take place to address each alert. You want to avoid having your sales floor upwards of 30 minutes a day looking at a monitor waiting for updates. 
                    Need help properly identifying the need for and setting up real-time alerts? Daasly can help! "
                  articleLink="//www.statsglitch.com/google-analytics-real-time-alerts-4.html"
                  shareLink="https://www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/real-time-alerts&title=&summary=&source="
                  />
                <Footer />
            </React.Fragment>
        );
    }
}

export default RealTimeAlerts;