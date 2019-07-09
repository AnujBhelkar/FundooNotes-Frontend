import React, { Component } from 'react'
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined'
import { IconButton, Tooltip } from '@material-ui/core';
export class ArchiveComponent extends Component {
    render() {
        return (
            <div>
                <IconButton>
                    <Tooltip title ="Archive">
                        <ArchiveIcon />
                    </Tooltip>
                </IconButton>
            </div>
        )
    }
}

export default ArchiveComponent
