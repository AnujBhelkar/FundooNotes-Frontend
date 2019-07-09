import React, { Component } from 'react'

import MoreIcon from '@material-ui/icons/MoreVert'
import { IconButton, Tooltip } from '@material-ui/core';
export class MoreComponent extends Component {
    render() {
        return (
            <div>
                <IconButton>
                    <Tooltip title = "More">
                        <MoreIcon/>
                    </Tooltip>
                </IconButton>
            </div>
        )
    }
}

export default MoreComponent
