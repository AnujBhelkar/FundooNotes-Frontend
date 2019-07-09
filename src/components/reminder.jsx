import React, { Component } from 'react'
import { IconButton, Tooltip } from '@material-ui/core';
import ReminderIcon  from "@material-ui/icons/AddAlertOutlined";
export class ReminderComponent extends Component {
    render() {
        return (
            <div>
                <IconButton>
                    <Tooltip title = "Reminder">
                        <ReminderIcon/>
                    </Tooltip>
                </IconButton>         
            </div>
        )
    }
}

export default ReminderComponent
