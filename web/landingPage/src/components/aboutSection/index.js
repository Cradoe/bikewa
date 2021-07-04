import React from "react";

const Aboutsection = ()=>{
    return (
        <section id="about-area" className="bg-3">
        <div className="about-area-circle">
            <img className="circle1" src="new-assets/images/asset-7.png" alt="" />
            <img className="circle2" src="new-assets/images/asset-7.png" alt="" />
        </div>
        <div className="container">
            <div className="row">
                
                <div className="col-md-6">
                    <div className="about-cont">
                        <h5>About BikeWA</h5>
                        <h2>Delivering exceptional user experiences.</h2>
                        <p>BikeWA is designed to make trip easy and effortless to all users.Its enables users to borrow bikes from the available station in a safe and secured manner.</p>
                        <p>BikeWA is also designed with the intention of improving the users travelling experience due to its accessility to the intending users. </p>
                    </div>
                    <div className="about-info row">
                        <div className="col-md-6 col-6">
                            <div className="about-info-single">
                                <div className="icon">
                                    <i className="icon-employee"></i>
                                </div>
                                <div className="content">
                                    <h3>17,501</h3>
                                    <p>Premium User</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="about-info-single two">
                                <div className="icon">
                                    <i className="icon-eye-tracking"></i>
                                </div>
                                <div className="content">
                                    <h3>1,987</h3>
                                    <p>Daily Visitors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        <div className="about-app-mocup">
            <img src="new-assets/images/app-mocup-2.png" className="img-fluid" alt="" />
        </div>
        
    </section>
    
    )
}
export default Aboutsection;