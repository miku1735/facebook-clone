import React from 'react'
import "./SidebarRows.css"
import { Avatar } from '@material-ui/core'
function SidebarRows({src, Icon, title}) {
    return (
        <div className="SidebarRows">
            {src && <Avatar src={src}/>}
            {Icon && <Icon className="SidebarRows__Icon" fontSize="large"/>}
            <h5>{title}</h5>
        </div>
    )
}

export default SidebarRows
