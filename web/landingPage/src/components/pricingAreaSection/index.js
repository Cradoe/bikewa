import React from "react";

const PricingAreaSection = ()=>{
    return (
        <section id="pricing-area" data-scroll-index="3">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="section-heading">
                        <h5>pricing Plan</h5>
                        <h2>Choose The Right Plan</h2>
                        
                        <p>BikeWA has plans, from free to paid, that scale with your needs. Subscribe to a plan that fits the size of your business.BikeWA monthly pricing is based on how many functions you need to start your work. If you ready to use BikeWA for a long time you can choose yearly plan and save some money.</p>
                    </div>
                    <div className="toggle-container two">
                        <div className="switch-toggles">
                            <div className="monthly active">Monthly</div>
                            <div className="yearly">Yearly</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div id="pricing-wrap">
                        
                        <div className="monthly active">
                            <div className="price-tbl-single two highlighted">
                                <div className="table-inner text-center">
                                    <h4>start</h4>
                                    <div className="price">
                                        <div className="price-bg"></div>
                                        <h2><sup>$</sup>15/<span>MON</span></h2>
                                    </div>
                                    <ul>
                                        <li>5 GB Space</li>
                                        <li>5 Subdomain Unlimited</li>
                                        <li>Easy to Customize</li>
                                        <li>Unlimited Users</li>
                                        <li>Highest Speed</li>
                                        <li>Easy to Customize</li>
                                        <li>Support Unlimited User</li>
                                    </ul>
                                    <a href="#">get started</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="yearly">
                            <div className="price-tbl-single two highlighted">
                                <div className="table-inner text-center">
                                    <h4>Standard</h4>
                                    <div className="price two">
                                        <div className="price-bg"></div>
                                        <h2><sup>$</sup>20/<span>MON</span></h2>
                                    </div>
                                    <ul>
                                        <li>5 GB Space</li>
                                        <li>5 Subdomain Unlimited</li>
                                        <li>Easy to Customize</li>
                                        <li>Unlimited Users</li>
                                        <li>Highest Speed</li>
                                        <li>Easy to Customize</li>
                                        <li>Support Unlimited User</li>
                                    </ul>
                                    <a href="#">get started</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}
export default PricingAreaSection;