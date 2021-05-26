import React from "react";

const valuestag = (props) =>{
    return (
        <div className="value-tag">
            <i class={props.img}></i>
            <h5><strong>{props.title}</strong></h5>
            <p>{props.para}</p>
        </div>
    )
}

export default valuestag;