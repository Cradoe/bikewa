import React from "react";

const AppDownloadArea = ()=>{
    return (
        <section id="app-download-area" data-scroll-index="5">
        <div className="app-download-bg bg-1">
            <img src="new-assets/images/faq-bg-1.png" alt="" />
        </div>
        <div className="container">
            <div className="row">
                
                <div className="col-lg-6 col-md-8">
                    <div className="section-heading">
                        <h5>Choose Your Device Platform</h5>
                        <h2>Get The App on</h2>
                        <p>Get the latest resources for downloading, installing, and updating Arribo. Select your device platform and Use Our app and Enjoy Your Life.</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="app-downlod-review two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <div className="download-btns two">
                            <a href="#"><img src="new-assets/images/playstore-icon.png" className="img-fluid" alt="" /> Play Store</a><a className="bg" href="#"><i className="icofont-brand-apple"></i> App Store</a>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-6">
                                <div className="app-reviews">
                                    <h6>Reviews</h6>
                                    <div className="rating-number float-left">
                                        <h2>4.5</h2>
                                    </div>
                                    <div className="rating-details float-left">
                                        <p className="m-0"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></p>
                                        <p className="font-light">125,064 ratings</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-6">
                                <div className="app-reviews">
                                    <h6>Reviews</h6>
                                    <div className="rating-number float-left">
                                        <h2>4.7</h2>
                                    </div>
                                    <div className="rating-details float-left">
                                        <p className="m-0"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></p>
                                        <p className="font-light">125,064 ratings</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="app-download-mockup">
            <img src="new-assets/images/imac-mocup.png" className="img-fluid" alt="" />
        </div>
    </section>
    
    )
}
export default AppDownloadArea;