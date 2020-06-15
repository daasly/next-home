import React, { Component } from 'react';
import Navbar2 from '../../components/Layouts/Navbar2';
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent';
import Footer from '../../components/Layouts/Footer';

class DataBuyIn extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar2 />
                <br/>
                <br/>
                <br/>
                <br/>
                <BlogDetailsContent 
                  date='September 12, 2019' 
                  author='Emilio Izquierdo' 
                  title="The Data Buy-In"
                  quote="Data professionals face an endless challenge to get the buy-in of management and IT to provide the technology and resources needed to efficiently and effectively analyze their constantly growing enterprise data stores."
                  text2={true}
                  text="I've met several people who are intimidated by the mere mention of the word Data. Throw in Analytics and the game is over before it had a chance to begin. So how do you get these stakeholders to join the bandwagon? The answer for most is learning how to communicate the benefits of Data Analytics in terms the stakeholder is comfortable with and understands well. Develop the skill of making the connection between the results of analysis and concrete business benefits. I've also found that incorporating an illustrated road map that demonstrates where your business is today, where it needs to go, and how data will aid in this journey reinforces the message and impacts the buy-in from key stakeholders."
                  articleLink="//www.forbes.com/sites/forbestechcouncil/2019/08/21/how-to-get-your-ceo-and-managers-on-the-data-analytics-bandwagon/#883968715963"
                  shareLink="https://www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/data-buy-in-blog&title=&summary=&source="
                  />
                <Footer />
            </React.Fragment>
        )
    }
}

export default DataBuyIn;