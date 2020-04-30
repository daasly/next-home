import React, { Component } from 'react';
import Navbar2 from '../../components/Layouts/Navbar2';
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent';
import Footer from '../../components/Layouts/Footer';

class TheFirstStep extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar2 />
                <br/>
                <br/>
                <br/>
                <br/>
                <BlogDetailsContent 
                  date='September 9, 2019' 
                  author='Emilio Izquierdo' 
                  title="It's the First Step"
                  quote="Just like any machine that needs to work in unison, a technology solution will run out of fuel without the right structure and processes."
                  text="You've heard it a zillion times by now, data is valuable for all areas of business. Within a business, I feel that Marketing teams have a lot to gain from data - it's an under-tapped, low hanging fruit filled with opportunity. So where should a Marketing team kick things off? The same place everyone should. If you work with data you've seen first hand how necessary it is to invest in a data strategy upfront. This means investing in process and people, technology comes last. Don't fall victim to jumping the gun on a shiny new technology before a well thought out strategy by a solid team has been developed and the right people are in place to execute. It's not the technology that will yield ROI, it's the right information fed into the technology that will produce ROI. "
                  articleLink="//www.b2bmarketing.net/en-gb/resources/blog/data-deluge-how-marketers-can-manage-information-online-world?sf218375933=1"
                  shareLink="//www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/the-first-step-blog&title=&summary=&source="
                  />
                <Footer />
            </React.Fragment>
        );
    }
}

export default TheFirstStep;