import React from "react";

const CustomPlanArea = ()=>{
    return (
        <section id="custom-plan-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="custom-plan-wrap bg-2 row">
                        <div className="custom-plan-wrap-circle">
                            <img className="circle1" src="new-assets/images/asset-7.png" alt="" />
                            <img className="circle2" src="new-assets/images/asset-8.png" alt="" />
                        </div>
                        <div className="col-md-8 offset-md-2">
                            <div className="section-heading text-center">
                                <h5 className="text-light">BikeWA Cost Calculator</h5>
                                <h2 className="text-white">Need a Custom Plan?</h2>
                                <p className="text-white">We’ve created this handy plan cost calculator just for you. Find out how much your custom plan will cost in under a minute! </p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="plan-btn two text-center">
                                <a href="#">Use Cost Calculator</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}
export default CustomPlanArea;