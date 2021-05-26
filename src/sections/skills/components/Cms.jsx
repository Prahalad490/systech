import React from "react";
import Grow from "@material-ui/core/Grow"


const Cms = (props) =>{
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

                        <i class="fab fa-wordpress skill-logo"></i>
                        

                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        <i class="fab fa-ethereum skill-logo"></i>
                        
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        <i class="fab fa-laravel skill-logo"></i>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        
                        <i class="fab fa-free-code-camp skill-logo"></i>
                    </div>
                </div>



                <div class="row skilltagrow">
                    <div class="col-lg-3 col-md-6 col-sm-12">

                        <i class="fab fa-magento skill-logo"></i>
                        

                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        <i class="fab fa-drupal skill-logo"></i>
                        
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        <i class="fab fa-shopify skill-logo"></i>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        
                        
                        <i class="fab fa-joomla skill-logo"></i>
                    </div>
                </div>

                <div class="row skilltagrow">
                    <div class="col-lg-3 col-md-6 col-sm-12">

                        <i class="fab fa-vuejs skill-logo"></i>
                        

                    </div>
                </div>

                
            </div>
            </Grow>
        </div>
    )
}

export default Cms;