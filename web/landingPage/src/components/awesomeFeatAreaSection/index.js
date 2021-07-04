import React from "react";

const AwesomeFeatAreaSection = ()=>{
    return (
        <section id="awesome-feat-area" className="bg-2" data-scroll-index="1">
        <div className="awesome-feat-area-circle">
            <img className="circle1" src="new-assets/images/asset-6.png" alt="" />
            <img className="circle2" src="new-assets/images/asset-8.png" alt="" />
        </div>
        <div className="container">
            <div className="row">
                
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div className="section-heading text-center">
                        <h5>Eye catching list of </h5>
                        <h2>Awesome Features</h2>
                        <p>We've gone over everything you could possibly want to know about BikeWA, from how exactly the app works.Three Simple Steps to journey.</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="row">
            
            <div className="col-md-5">
                <div className="awesome-feat-img text-center">
                    <a data-owl-item="1" className="feature-link active">
                        <div className="feat-screen-single">
                            <img src="new-assets/images/app-mocup-3.png" className="img-fluid" alt="" />
                        </div>
                    </a>
                    <a data-owl-item="2" className="feature-link">
                        <div className="feat-screen-single">
                            <img src="new-assets/images/app-mocup-3.png" className="img-fluid" alt="" />
                        </div>
                    </a>
                    <a data-owl-item="3" className="feature-link">
                        <div className="feat-screen-single">
                            <img src="new-assets/images/app-mocup-3.png" className="img-fluid" alt="" />
                        </div>
                    </a>
                    <a data-owl-item="4" className="feature-link">
                        <div className="feat-screen-single">
                            <img src="new-assets/images/app-mocup-3.png" className="img-fluid" alt="" />
                        </div>
                    </a>
                </div>
            </div>
          
            <div className="col-md-7">
                <div className="feat-carousel-wrap">
                    <div className="awesome-feat-carousel owl-carousel">
                        
                        <div className="awesome-feat-single text-center">
                            <div className="icon">
                                <img src="new-assets/images/icon-setting.png" className="img-fluid" alt="" />
                            </div>
                            <h3>Easy to Manage Your Transaction</h3>
                            <p>BikeWA is Best app to help you take a ride to the destination of your choice.Apps that have the power to transform workflows, improve client relationships,boost your confidence and organize your trip. </p>
                        </div>
                        
                        <div className="awesome-feat-single text-center">
                            <div className="icon two">
                                <img src="new-assets/images/icon-responsive.png" className="img-fluid" alt="" />
                            </div>
                            <h3>Wonderful experience for all users.</h3>
                            <p>BikeWA is Best app to help you get a ride without any form of stress.Apps that have the power to transform workflows, improve client relationships,boost your confidence and organize your trip. </p>
                        </div>
                        
                        
                        
                        <div className="awesome-feat-single text-center">
                            <div className="icon two">
                                <img src="new-assets/images/icon-responsive.png" className="img-fluid" alt="" />
                            </div>
                            <h3>Responsive Design For All Devices</h3>
                            <p>BikeWA is Best app to help you take control of your trip. App that make it easier for you to select a bike to use for your trip.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}
export default AwesomeFeatAreaSection;