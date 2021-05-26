import React from "react";
import "./styles.css"

const Industries = () => {
    return(
        <div className="industry">
            <div>
                <h1 className="industry-heading">
                    <strong>Industries We Serve</strong>
                </h1>
                <p className="industry-top-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div> 

            <div>
                <div className="industry-tag">

                    <div class="row industry-row">
                        <div class="col-lg-2 col-md-6 industry-col">

                            <i class="fas fa-heartbeat industry-logo"></i>
                            <p><strong>Healthcare</strong></p>


                        </div>
                        <div class="col-lg-2 col-md-6 industry-col">

                            <i class="fas fa-shopping-cart industry-logo"></i>
                            <p><strong>E-Commerce</strong></p>

                        </div>
                        <div class="col-lg-2 col-md-6 industry-col">

                            <i class="fas fa-university industry-logo"></i>
                            <p><strong>Education</strong></p>
                        </div>
                        <div class="col-lg-2 col-md-6 industry-col">

                            
                            <i class="fas fa-comment-alt industry-logo"></i>
                            <p><strong>Social Media</strong></p>
                        </div>
                        <div class="col-lg-2 col-md-6 industry-col">

                            
                            <i class="fas fa-store industry-logo"></i>
                            <p><strong>Retail</strong></p>
                        </div>
                        <div class="col-lg-2 col-md-6 industry-col">

                            
                            <i class="fas fa-industry industry-logo"></i>
                            <p><strong>Manufacturer</strong></p>
                        </div>
                    </div>

                    <div class="row industry-row">
                        <div class="col-lg-2 col-md-6 industry-col">

                            <i class="fas fa-plane-departure industry-logo"></i>
                            <p><strong>Airways</strong></p>


                        </div>
                        <div class="col-lg-2 col-md-6 industry-col">

                            <i class="fas fa-headset industry-logo"></i>
                            <p><strong>Support</strong></p>

                        </div>
                        <div class="col-lg-2 col-md-6 industry-col">

                            <i class="fas fa-hard-hat industry-logo"></i>
                            <p><strong>Construction</strong></p>
                        </div>
                        <div class="col-lg-2 col-md-6 industry-col">

                            
                            <i class="fas fa-ruler-combined industry-logo"></i>
                            <p><strong>Logistics</strong></p>
                        </div>
                        <div class="col-lg-2 col-md-6 industry-col">

                            
                            <i class="fas fa-video industry-logo"></i>
                            <p><strong>Media</strong></p>
                        </div>
                        <div class="col-lg-2 col-md-6 industry-col">

                            
                            <i class="fas fa-file-code industry-logo"></i>
                            <p><strong>Coroporate</strong></p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Industries;