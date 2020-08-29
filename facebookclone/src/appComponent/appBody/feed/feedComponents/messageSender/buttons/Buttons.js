import React from 'react'
import "./Buttons.css"
function Buttons({Icon,title,color}) {
    return (
        <div className="Buttons">
            {Icon && <Icon style={{color:`${color}`}}/>}
            {title && <h5>{title}</h5>}
        </div>
    )
}

export default Buttons
