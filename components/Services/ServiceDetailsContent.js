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
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={this.props.imageOne ?  this.props.imageOne : require("../../images/service-details/service-details1.jpg")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={this.props.imageTwo ?  this.props.imageTwo : require("../../images/service-details/service-details2.jpg")} alt="image" />
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
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.props.domo && (
                        <div style={{ display: 'flex', justifyContent: 'center'}}>
                            <ul style={{listStyleType: 'none', display: 'flex', padding: '0', marginTop: 10}}>
                                <li style={{padding: 10}}>
					    	    	<img src="https://storage.cloud.google.com/daasly_public/domo-tc.svg" alt="sdvosb" style={{ width: 80}}/>
					    	    </li>
					    	    <li style={{padding: 10}}>
					    	    	<img src="https://storage.cloud.google.com/daasly_public/domo-ps.svg" alt="sdvosb" style={{ width: 80}}/>
					    	    </li>
					    	    <li style={{padding: 10}}>
					    	    	<img src="https://storage.cloud.google.com/daasly_public/domo-p.svg" alt="sdvosb" style={{ width: 80}}/>
					    	    </li>
                            </ul>
                        </div>   
                    )}
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;