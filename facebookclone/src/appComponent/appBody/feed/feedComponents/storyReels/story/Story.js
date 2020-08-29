import React from 'react'
import "./Story.css"
import { Avatar } from '@material-ui/core'
function story({image, src, title}) {
    return (
        <div style={{backgroundImage : `url(${image})` }} className="Story">
            {src && <Avatar className="Story__avatar" src={src}/>}
        </div>
    )
}

export default story
