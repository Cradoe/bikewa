import React from "react";

const VideoSection = ()=>{
    return (
        <section id="video-area" className="bg-2">
        <div className="video-area-circle">
            <img className="circle1" src="new-assets/images/asset-8.png" alt="" />
            <img className="circle2" src="new-assets/images/asset-8.png" alt="" />
            <img className="circle3" src="new-assets/images/asset-8.png" alt="" />
        </div>
        <div className="video-cont d-table text-center">
            <div className="d-table-cell align-middle">
                <div className="video-overlay"></div>
                <a className="popup-video" href="https://www.youtube.com/watch?v=om4qTKMuPPs"><i className="icofont-ui-play"></i></a>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="video title">
                        <h5>Enjoy Easy Trip.</h5>
                        <h2>That is cost effective.</h2>
                        <p>With BikeWa you are rest assured of a cost friendly trip,it also help users to get value for their money with an easy travelling experience. With BikeWA App users are assured to have a safe trip devoid of any misfortune.  </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-8">
                    <div className="counter title">
                        <h5 className="text-light">Take a Look and</h5>
                        <h2 className="text-white">Get to know us</h2>
                        <p>BikeWA enables all its users with constant support and wide set of tools to develop and grow their businesses and projects.some of our favorite facts that you might not have known.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                
                <div className="col-md-3 col-6">
                    <div className="counter-single">
                        <div className="icon">
                            <img src="new-assets/images/icon-like-1.png" className="img-fluid" alt="" />
                        </div>
                        <h2>5,289</h2>
                        <p>5 star Rating</p>
                    </div>
                </div>
               
                <div className="col-md-3 col-6">
                    <div className="counter-single">
                        <div className="icon">
                            <img src="new-assets/images/icon-user-1.png" className="img-fluid" alt="" />
                        </div>
                        <h2>4,188</h2>
                        <p>Happy Users</p>
                    </div>
                </div>
               
                <div className="col-md-3 col-6">
                    <div className="counter-single">
                        <div className="icon">
                            <img src="new-assets/images/icon-cloud-1.png" className="img-fluid" alt="" />
                        </div>
                        <h2>9,087</h2>
                        <p>app download</p>
                    </div>
                </div>
                
                <div className="col-md-3 col-6">
                    <div className="counter-single">
                        <div className="icon">
                            <img src="new-assets/images/icon-trophy-1.png" className="img-fluid" alt="" />
                        </div>
                        <h2>26</h2>
                        <p>Best Awards</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    
    )
}
export default VideoSection;