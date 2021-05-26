import React from "react"

const Servicetag = (props) => {
    return (
        <div className="service-tag">
            <i class={props.img}></i>
            <h5><strong>{props.title}</strong></h5>
            <p>{props.para}</p>
        </div>
    )
}

export default Servicetag;