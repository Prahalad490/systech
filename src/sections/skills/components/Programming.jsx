import React from "react";
import Grow from "@material-ui/core/Grow"


const Programming = (props) =>{


    return (
        <div>
            <Grow
                in={props.checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(props.checked ? { timeout: 1000 } : {})}
            >
            
            <div className="skill-tag">



                <div class="row skilltagrow">
                    <div class="col-lg-3 col-md-6 col-sm-12">

                        <i class="fab fa-java skill-logo"></i>
                        

                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        <i class="fab fa-angular skill-logo"></i>
                        
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        <i class="fab fa-react skill-logo"></i>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        
                        <i class="fab fa-node skill-logo"></i>
                    </div>
                </div>



                <div class="row skilltagrow">
                    <div class="col-lg-3 col-md-6 col-sm-12">

                        <i class="fab fa-vuejs skill-logo"></i>
                        

                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        <i class="fab fa-js-square skill-logo"></i>
                        
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        <i class="fab fa-python skill-logo"></i>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        
                        <i class="fab fa-r-project skill-logo"></i>
                    </div>
                </div>



                <div class="row skilltagrow">
                    <div class="col-lg-3 col-md-6 col-sm-12">

                        <i class="fab fa-css3-alt skill-logo"></i>
                        

                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        <i class="fab fa-html5 skill-logo"></i>
                        
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        <i class="fab fa-swift skill-logo"></i>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        
                        <i class="fab fa-apple skill-logo"></i>
                    </div>
                </div>
            </div>
            </Grow>
        </div>
    )
}

export default Programming;