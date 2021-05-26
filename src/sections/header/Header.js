import React from "react";
import './Headerstyle.css'


const Header = (props) => {
    return (
        <div className="header">
            <img className="header-img" src={props.img} alt="header img"></img>
            <h1 className="qoute">Always <strong>Deliver</strong> <br/>more than <br/>Expected.</h1>
        </div>
    )
}

export default Header;