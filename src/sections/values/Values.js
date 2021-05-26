import React from "react";
import Valuestag from "./components/Valuestag";
import "./values.css"



const Values = () =>{
    return (
        <div className="values">
            <div>
                <h1><strong>Our Values</strong></h1>
                <p className="values-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <Valuestag 
                img="fas fa-users logo"
                alt="spirit" 
                title="Team Work" 
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

            />
            <Valuestag 
                img="fas fa-brain logo"
                alt="Thinking" 
                title="Expert" 
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."

            />
            <Valuestag 
                img="fas fa-handshake logo"
                alt="Trust" 
                title="Trust" 
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

            />
            <Valuestag 
                img="fas fa-ribbon logo"
                alt="serenity" 
                title="serenity" 
                para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

            />
        </div>
    )
}

export default Values;