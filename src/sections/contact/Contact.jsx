import React from "react";
import "./contact.css"

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <h1><strong>Contact Us</strong></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="contact-box">
            <div class="row contact-row">
                
                <div class="col-lg-6 contact-col">

                    <form>
                        <div class="form-group">
                          <label>Your name *</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name"></input>
                          
                        </div>

                        <div class="form-group">
                          <label>Email address *</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                          
                        </div>

                        <div class="form-group">
                          <label>Mobile Number *</label>
                          <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter Mobile number"></input>
                        </div>
                        
                        <div class="form-group">
                          <label>Your Message *</label>
                          <textarea type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Message"></textarea>
                        </div>
                        
                        <button type="submit" class="btn">Submit</button>
                        <span><button type="reset" class="btn">Reset</button></span>
                    </form>
                </div>

                <div class="col-lg-6 contact-col">
                    <div className="address-col">
                        <h6>Address</h6>
                        <h6 className="address-para">3985  Drummond Street<br></br>Rochelle Park<br></br>New Jersey</h6>
                    </div>
                    <div className="address-col">
                        <h6>Interview Address</h6>
                        <h6 className="address-para">3985  Drummond Street<br></br>Rochelle Park<br></br>New Jersey</h6>
                    </div>
                    <div className="address-col">
                        <h6>Lets Talk</h6>
                        <h6 className="address-para">+91 8303120123</h6>
                    </div>
                    <div className="address-col">
                        <h6>General Support</h6>
                        <h6 className="address-para">support@systech.com</h6>
                    </div>    
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact;