import React from "react";
import "./services.css"
import Servicestag from "./components/Servicetag"

const services = () => {
    return (
        <div  className="services">
            <div className="serve-heading">
                <h1><strong>Our Services</strong></h1>
            </div>
            <div>
                <div class="row">
                    <div class="col-lg-4">
                        <Servicestag
                            img="fas fa-code service-logo"
                            alt="Web Development" 
                            title="Web Development" 
                            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. "
                            
                        />
                    </div>
                    <div class="col-lg-4">
                        <Servicestag
                            img="fas fa-mobile-alt service-logo"
                            alt="App Development" 
                            title="App Development" 
                            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. "

                        />
                    </div>
                    <div class="col-lg-4">
                        <Servicestag
                            img="fab fa-aws service-logo"
                            alt="aws" 
                            title="AWS" 
                            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. "

                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <Servicestag
                            img="fab fa-dev service-logo"
                            alt="DevOps" 
                            title="DevOps" 
                            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. "
                            
                        />
                    </div>
                    <div class="col-lg-4">
                        <Servicestag
                            img="fas fa-shopping-cart service-logo"
                            alt="E-Commerce" 
                            title="E-Commerce" 
                            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. "

                        />
                    </div>
                    <div class="col-lg-4">
                        <Servicestag
                            img="fas fa-funnel-dollar service-logo"
                            alt="Digital Marketing" 
                            title="Digital Marketing" 
                            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. "

                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 servicetag-last">
                        <Servicestag
                            img="fas fa-wifi service-logo"
                            alt="Iot Development" 
                            title="Iot Development" 
                            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. "

                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default services;