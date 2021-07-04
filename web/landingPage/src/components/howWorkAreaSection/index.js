import React from "react";

const HowWorkAreaSection = ()=>{
    return (
        <section id="how-work-area" className="bg-3">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div className="section-heading text-center">
                        <h5>Our App Description</h5>
                        <h2>How It Works</h2>
                        <p>We've gone over everything you could possibly want to know about BikeWA. Three Simple Steps to your trip.</p>
                    </div>
                </div>
                
            </div>
            <div className="row how-work-wrap">
                <div className="how-work-bg"></div>
               
                <div className="col-lg-offset-1 col-lg-3 col-md-4">
                    <div className="how-work-single">
                        <div className="icon">
                            <i className="icofont-cloud-download"></i>
                            <div className="number">01</div>
                        </div>
                        <h3>Download</h3>
                        <p>The first step to getting on your BikeWA is to download the BikeWA app. Open the <a href="#">Google Play</a>, or <a href="#">iTunes App Store</a> App on your smartphone.</p>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-4">
                    <div className="how-work-single two">
                        <div className="icon">
                            <i className="icofont-settings"></i>
                            <div className="number">02</div>
                        </div>
                        <h3>Register</h3>
                        <p>Select your mobile app's Settings tab that appear on your mobile screen, each of these customizations are unique to your Activity.</p>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-4">
                    <div className="how-work-single three">
                        <div className="icon">
                            <i className="icofont-trophy"></i>
                            <div className="number">03</div>
                        </div>
                        <h3>Yay! Done</h3>
                        <p>Explore and share BikeWa.Check out our FAQ for more information on the system, memberships, 24-Hour Passes, safety tips, and more.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    
    )
}
export default HowWorkAreaSection;