import React from "react";

const ScreenshotAreaSection = ()=>{
    return (
        <section id="screenshot-area" className="bg-2" data-scroll-index="2">
        <div className="screenshot-area-img d-flex justify-content-end">
            <img src="new-assets/images/screen-bg-3.png" alt="" />
        </div>
        <div className="container">
            <div className="row">
                
                <div className="col-md-8 offset-md-2">
                    <div className="section-heading text-center">
                        <h5>App Showcase</h5>
                        <h2>The Screenshot Gallery</h2>
                        <p>This is easy way to show how BikeWA app works. </p>
                    </div>
                </div>
                
            </div>
            <div className="screen-wrap">
                <div className="screenshot-frame"></div>
                <div className="screen-carousel owl-carousel">
                    <img src="new-assets/images/screen-1.jpg" className="img-fluid" alt="" />
                    <img src="new-assets/images/screen-2.jpg" className="img-fluid" alt="" />
                    <img src="new-assets/images/screen-3.jpg" className="img-fluid" alt="" />
                    <img src="new-assets/images/screen-4.jpg" className="img-fluid" alt="" />
                    <img src="new-assets/images/screen-2.jpg" className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    </section>
    
    )
}
export default ScreenshotAreaSection;