import React, { Component } from 'react';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>{this.props.header}</h3>
                                    <p>{this.props.subtext}</p>
                                    <div className="col-lg-6">
	                                    <div className="about-content">
                                        {this.props.listItems && (
                                            <ul className="about-list">
		                                    	<li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.listItems.one}
		                                    	</li>
		                                    	<li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.listItems.two}
		                                    	</li>
		                                    	<li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.listItems.three}
		                                    	</li>
		                                    	<li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.listItems.four}
		                                    	</li>
                                                <li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.listItems.five}
		                                    	</li>
                                                <li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.listItems.six}
		                                    	</li>
                                                <li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.listItems.seven}
		                                    	</li>
                                                <li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.listItems.eight}
		                                    	</li>
		                                    </ul>
                                        )}
		                                    
                                    	</div>
                                    </div>
                                    {/* <div className="features-text">
                                        <h4>Managed Analytics</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4>Business Intelligence</h4>
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/service-details1.jpg")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/service-details2.jpg")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>{this.props.headerTwo}</h3>
                                    <div className="col-lg-16">
	                                    <div className="about-content">
                                        {this.props.secondList && (
                                            <ul className="about-list">
                                            {this.props.secondList.one && (
		                                    	<li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.secondList.one }
		                                    	</li>
                                            )}
                                            {this.props.secondList.two && (
		                                    	<li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.secondList.two}
		                                    	</li>
                                            )}
                                            {this.props.secondList.three && (
		                                    	<li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.secondList.three}
		                                    	</li>
                                            )}
                                            {this.props.secondList.four && (
		                                    	<li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.secondList.four}
		                                    	</li>
                                            )}
                                            {this.props.secondList.five && (
                                                <li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.secondList.five}
		                                    	</li>
                                            )}
                                            {this.props.secondList.six && (
                                                <li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.secondList.six}
		                                    	</li>
                                            )}
                                            {this.props.secondList.seven && (
                                                <li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.secondList.seven}
		                                    	</li>
                                            )}
                                            {this.props.secondList.eight && (
                                                <li>
		                                    		<i className="flaticon-tick"></i>
		                                    		{this.props.secondList.eight}
		                                    	</li>
                                            )}
		                                    </ul>
                                        )} 
                                    	</div>
                                    </div>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                                    <div className="features-text">
                                        <h4>Managed Analytics</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4>Business Intelligence</h4>
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;