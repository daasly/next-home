import React, { Component } from 'react';
import Navbar2 from '../../components/Layouts/Navbar2';
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent';
import Footer from '../../components/Layouts/Footer';

class Covid19 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar2 />
                <br/>
                <br/>
                <br/>
                <br/>
                <BlogDetailsContent 
                  date='April 09, 2020' 
                  author='Emilio Izquierdo' 
                  title="Covid-19"
                  quote="This is no time to panic, but it certainly is a good time to reassess your data strategies as you set up your home office."
                  text="How is Covid-19 impacting your data strategy? Are you focusing on accomplishing your same goals in preparation to hit the ground running when the current crisis subsides? Are you reshifting your efforts to drive different priorities now? Whichever path you choose calls for an assessment of how you're presently handling your data strategy."
                  articleLink="//tdwi.org/articles/2020/03/25/DIQ-ALL-Data-Management-and-Coronavirus.aspx?utm_source=nl&utm_medium=email&utm_campaign=nl252&share=&mkt_tok=eyJpIjoiWm1Gall6aGxZelkwWWpZMyIsInQiOiJYWjAyWnNzZDkwY1J6RHBSWXhKZDRhNHQyOWxuSnRrVE11dCtacjZqOEVsazZRZFZiYmhSXC9TNDU4Mk9jVE50VFdpYnh0QVwvOXg2WTQ3bU9kaURCUXhCWWhZeGZKd05udG1hQXVlcnZTcFlIaUI2Q01zMzNNdXpLeFh6U1hSaGNIIn0%3D"
                  shareLink="//www.linkedin.com/shareArticle?mini=true&url=https://daasly.com/blog/covid-19&title=&summary=&source="
                  />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Covid19;