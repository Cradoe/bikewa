import React from "react";

const Footer = ()=>{
    return (
        <footer id="footer" className="bg-2">
        <div className="container">
           <div className="footer-copyright">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <p>&copy; 2019 Arribo | All right reserved.</p>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div className="footer-social text-right">
                            <ul>
                                <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                <li><a href="#"><i className="icofont-linkedin"></i></a></li>
                                <li><a href="#"><i className="icofont-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   
    )
}
export default Footer;