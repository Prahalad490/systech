import React from "react";
import "./footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <div class="row footer-row">
                <div class="col-lg-4 col-md-6 footer-col1 ">
                    <p><strong>About Us</strong></p>
                    <div>
                        <p className="mission-heading"><strong>Mission</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div>
                        <p className="mission-heading"><strong>Vision</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 footer-col2 ">
                    <p><strong>SysTech</strong></p>
                    <div >
                        <div className="footer-weblink">
                            <a className="footer-link" href="#header">Home</a>
                        </div>
                        <div className="footer-weblink">
                            <a className="footer-link" href="#services">Services</a>
                        </div>
                        <div className="footer-weblink">
                            <a className="footer-link" href="#skills">Technology</a>
                        </div>
                        
                        
                    </div>
                </div>

                <div class="col-lg-4 col-md-12 footer-col3 ">
                <div>
                    <p><strong>Connect with us</strong></p>
                    <div>
                        <div className="footer-weblink">
                        <a className="social" href="https://www.facebook.com">
                            <i class="fab fa-facebook-f social-link"></i></a>
                        <a className="social" href="https://www.twitter.com">
                            <i class="fab fa-twitter social-link"></i></a>
                        <a className="social" href="https://www.linkedin.com">
                            <i class="fab fa-linkedin-in social-link"></i></a>
                            
                        </div>
                    </div>
                </div>
                </div>

                
            </div>
        </div>
    )
}

export default Footer;