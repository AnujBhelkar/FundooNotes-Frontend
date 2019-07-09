import React, { Component } from 'react'
import Collab from '@material-ui/icons/GroupAddOutlined'
import { IconButton, Tooltip } from '@material-ui/core';
import '../App.css'
class CollaboratorComponent extends Component {
    render() {
        return (
            <div>
            <IconButton>
                <Tooltip title = "Collaborator">
                    <Collab/>
                </Tooltip>
            </IconButton>
                
            </div>
        )
    }
}
export default  CollaboratorComponent