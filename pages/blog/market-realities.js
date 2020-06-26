import React, { Component } from 'react';
import Navbar2 from '../../components/Layouts/Navbar2';
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent';
import Footer from '../../components/Layouts/Footer';
import Link from 'next/link'

class MarketRealities extends Component {
    render() {
        const dataStrategy = <Link href="/data-strategy"><a><span>Data Strategy</span></a></Link>
        return (
            <React.Fragment>
                <Navbar2 />
                <br />
                <br />
                <br />
                <br />
                <BlogDetailsContent
                    date='May 19, 2020'
                    author='Emilio Izquierdo'
                    title="A Shift to Better Understand Your Business"
                    quote="Market realities have shifted and with these shifts come opportunities to adjust data and analytics strategies."
                    text="Customer behavior, supply chain, and operations have changed for businesses that have been shut down and those operating above normal capacity alike. Market realities have shifted and with these shifts come opportunities to adjust data and analytics strategies."
                    text2="Make the shift to better understand your customer behavior, use external datasets to strengthen your analytics, and use intelligent technologies. These are the key takeaways highlighted by InformationWeek's recent article."
                    ctaStrategy={true}
                    articleLink="//www.informationweek.com/big-data/big-data-analytics/why-everyones-data-and-analytics-strategy-just-blew-up/a/d-id/1337692?utm_campaign=Analytics&utm_medium=email&utm_source=Revue%20newsletter"
                    shareLink="https://www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/market-realities&title=&summary=&source="
                />
                <Footer />
            </React.Fragment>
        );
    }
}

export default MarketRealities;