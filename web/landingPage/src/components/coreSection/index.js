import React from "react";
import { assetCircleSix, shapeFive, shapeFour, shapeOne, shapeThree, shapeTwo } from "../../shared/generalAssests";

const Coresection = () => {
    return (
        <section id="core-feature-area" className="bg-3">
            <div className="core-feature-circle">
                <img className="circle1" src={assetCircleSix} alt="" />
                <img className="circle2" src={assetCircleSix} alt="" />
                <img className="circle3" src={assetCircleSix} alt="" />
            </div>
            <div className="container">
                <div className="row">

                    <div className="col-md-10 offset-md-1">
                        <div className="section-heading text-center">
                            <h5>About our App</h5>
                            <h2>Wonderful features to satisfy you while using our solution</h2>
                            <p>We present to you some of the features of our app. <br /> It is designed to make your trip easy and effortless.</p>
                        </div>
                    </div>

                </div>
                <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <div className="core-feature-single">
                            <div className="core-feature-single-item text-center">
                                <div className="icon">
                                    <i className="icon-gear"></i>
                                </div>
                                <h3>Quick Setup</h3>
                                <p>The app is really easy to install, the complete setup process will take less than 1 minute of your time.</p>
                            </div>
                            <img className="hover-shape-1 hover-shape" src={shapeOne} alt="Shape One" />
                            <img className="hover-shape-2 hover-shape" src={shapeTwo} alt="Shape Two" />
                            <img className="hover-shape-3 hover-shape" src={shapeThree} alt="Shape Three" />
                            <img className="hover-shape-4 hover-shape" src={shapeFour} alt="Shape Four" />
                            <img className="hover-shape-5 hover-shape" src={shapeFive} alt="Shape Five" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="core-feature-single">
                            <div className="core-feature-single-item two text-center">
                                <div className="icon">
                                    <i className="icon-web-design"></i>
                                </div>
                                <h3>User Friendly</h3>
                                <p>With carefully thought-out design, BikeWA looks great on any device and it is user friendly fast and reliable. </p>
                            </div>
                            <img className="hover-shape-1 hover-shape" src={shapeOne} alt="Shape One" />
                            <img className="hover-shape-2 hover-shape" src={shapeTwo} alt="Shape Two" />
                            <img className="hover-shape-3 hover-shape" src={shapeThree} alt="Shape Three" />
                            <img className="hover-shape-4 hover-shape" src={shapeFour} alt="Shape Four" />
                            <img className="hover-shape-5 hover-shape" src={shapeFive} alt="Shape Five" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="core-feature-single">
                            <div className="core-feature-single-item three text-center">
                                <div className="icon three">
                                    <i className="icon-report"></i>
                                </div>
                                <h3>Fast Trip</h3>
                                <p>One of the best qualities as captured in our app has to do with its speed and easy access to the users.</p>
                            </div>
                            <img className="hover-shape-1 hover-shape" src={shapeOne} alt="Shape One" />
                            <img className="hover-shape-2 hover-shape" src={shapeTwo} alt="Shape Two" />
                            <img className="hover-shape-3 hover-shape" src={shapeThree} alt="Shape Three" />
                            <img className="hover-shape-4 hover-shape" src={shapeFour} alt="Shape Four" />
                            <img className="hover-shape-5 hover-shape" src={shapeFive} alt="Shape Five" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="core-feature-single">
                            <div className="core-feature-single-item four text-center">
                                <div className="icon four">
                                    <i className="icon-list"></i>
                                </div>
                                <h3>Secure Payment</h3>
                                <p>We patnered with Flutterwave to make your payment save and secure while using our BikeWA app.</p>
                            </div>
                            <img className="hover-shape-1 hover-shape" src={shapeOne} alt="Shape One" />
                            <img className="hover-shape-2 hover-shape" src={shapeTwo} alt="Shape Two" />
                            <img className="hover-shape-3 hover-shape" src={shapeThree} alt="Shape Three" />
                            <img className="hover-shape-4 hover-shape" src={shapeFour} alt="Shape Four" />
                            <img className="hover-shape-5 hover-shape" src={shapeFive} alt="Shape Five" />
                        </div>
                    </div>

                </div>
                <div className="row">

                    <div className="col-lg-12">
                        <div className="load-more-btn text-center">
                            <a href="./">Learn More</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
export default Coresection;