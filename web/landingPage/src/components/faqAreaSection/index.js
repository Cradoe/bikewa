import React from "react";

const FaqAreaSection = ()=>{
    return (
        <section id="faq-area" className="bg-2">
        <div className="faq-area-img">
            <img src="new-assets/images/faq-bg-1.png" className="img-fluid" alt="" />
        </div>
        <div className="container">
            <div className="row">
                
                <div className="col-md-8 offset-md-2">
                    <div className="section-heading text-center">
                        <h5>Take A look</h5>
                        <h2>Frequently Asked Questions</h2>
                        <p>Our Mobile App can be downloaded and installed on your compatible mobile device easily. If you have any questions - please look through the most frequently asked questions or contact us for more details.</p>
                    </div>
                </div>
               
            </div>
            <div className="row">
                <div className="col-md-7">
                    <div id="accordion" role="tablist">
                       
                        <div className="card two">
                            <div className="card-header active" role="tab" id="faq1">
                                <h5 className="mb-0">
                                    <a data-toggle="collapse" href="#collapse1" aria-expanded="true" aria-controls="collapse1">Is the Mobile App Secure?</a>
                                </h5>
                            </div>
                            <div id="collapse1" className="collapse show" role="tabpanel" aria-labelledby="faq1" data-parent="#accordion">
                                <div className="card-body">
                                    <p>Both the Mobile Apps and the Mobile Web App give you the ability to you to access your account information, view news releases, report an outage, and contact us via email or phone. Once you've installed a Mobile App on your phone, you'll also have the ability to view a map of our offices and payment locations.</p>
                                </div>
                            </div>
                        </div>
                       
                        <div className="card two">
                            <div className="card-header" role="tab" id="faq2">
                                <h5 className="mb-0">
                                    <a className="collapsed" data-toggle="collapse" href="#collapse2" aria-expanded="false" aria-controls="collapse2">What features does the Mobile App have?</a>
                                </h5>
                            </div>
                            <div id="collapse2" className="collapse" role="tabpanel" aria-labelledby="faq2" data-parent="#accordion">
                                <div className="card-body">
                                    <p>Both the Mobile Apps and the Mobile Web App give you the ability to you to access your account information, view news releases, report an outage, and contact us via email or phone. Once you've installed a Mobile App on your phone, you'll also have the ability to view a map of our offices and payment locations.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card two">
                            <div className="card-header" role="tab" id="faq3">
                                <h5 className="mb-0">
                                    <a className="collapsed" data-toggle="collapse" href="#collapse3" aria-expanded="false" aria-controls="collapse3">How do I get the Mobile App for my phone?</a>
                                </h5>
                            </div>
                            <div id="collapse3" className="collapse" role="tabpanel" aria-labelledby="faq3" data-parent="#accordion">
                                <div className="card-body">
                                    <p>Both the Mobile Apps and the Mobile Web App give you the ability to you to access your account information, view news releases, report an outage, and contact us via email or phone. Once you've installed a Mobile App on your phone, you'll also have the ability to view a map of our offices and payment locations.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card two">
                            <div className="card-header" role="tab" id="faq4">
                                <h5 className="mb-0">
                                    <a className="collapsed" data-toggle="collapse" href="#collapse4" aria-expanded="false" aria-controls="collapse4">How does Arribo differ from usual apps? </a>
                                </h5>
                            </div>
                            <div id="collapse4" className="collapse" role="tabpanel" aria-labelledby="faq4" data-parent="#accordion">
                                <div className="card-body">
                                    <p>Both the Mobile Apps and the Mobile Web App give you the ability to you to access your account information, view news releases, report an outage, and contact us via email or phone. Once you've installed a Mobile App on your phone, you'll also have the ability to view a map of our offices and payment locations.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="faq-img">
                        <img src="new-assets/images/faq-img-1.png" className="img-fluid" alt="" />
                        <img src="new-assets/images/faq-img-2.png" className="img-icon" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    )
}
export default FaqAreaSection;