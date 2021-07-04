import React from "react";

const Homesection = ()=>{
    return (
        <section id="home-area" className="bg-2" data-scroll-index="0">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-7 col-md-8">
                    <div className="caption two d-table">
                        <div className="d-table-cell align-middle">
                            <h1 className="mb-3">Trip Made Easier </h1>
                            <h4 className="text-dark font-open-sans">BikeWA is a unique application, designed to make your trip easier.</h4>
                            <div className="caption-btns v2">
                                <a className="bg" href="#">Download Now</a><a className="popup-video" href="https://www.youtube.com/watch?v=iaj8ktgL3BY&amp;t=5s"><i className="icofont-ui-play"></i> Play video</a>
                            </div>
                            <div className="caption-download-btns v2">
                                <ul>
                                    <li><a href="#"><i className="icofont-brand-android-robot"></i></a></li>
                                    <li><a href="#"><i className="icofont-brand-apple"></i></a></li>
                                    <li><a href="#"><i className="icofont-brand-windows"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    
    )
}
export default Homesection;