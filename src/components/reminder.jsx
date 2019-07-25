import React, { Component } from 'react'
import { IconButton, Tooltip, Paper, MenuList, MenuItem,Popper,TextField, Divider, Button, ClickAwayListener } from '@material-ui/core';
import ReminderIcon  from "@material-ui/icons/AddAlertOutlined";
export class ReminderComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             placement : null,
             anchorEl : null,
             open : false,
             date:''
        }
        this.reminderHandler = this.reminderHandler.bind(this)
        this.handleDateTime = this.handleDateTime.bind(this)
        this.saveReminder = this.saveReminder.bind(this)
    }
    
    reminderHandler = placement => event => {
        console.log("click on reminder ==>");
        
        var {currentTarget} = event
        this.setState(state =>({
            anchorEl : currentTarget,
            open : placement !== state.placement || !state.open,
            placement
        }))
    }
    async handleDateTime(event) {
        // console.log("event is ",event);
        
        const date = event.target.value
        await this.setState({ date : date})
        console.log("Date is -->",this.state.date);
        
    } 
    saveReminder(){
        this.setState({
            open : false
        })
        this.props.saveReminder(this.props.noteID,this.state.date)
    }
    closePopper = () => {
        this.setState({
            open : false
        })
    }
    render() {
        var { open,anchorEl,placement} = this.state;
        return (
            <div>
                <Popper open = {open} anchorEl = {anchorEl} placement ={placement} style ={{position : "absolute",zIndex:"9999"}}>
                    <ClickAwayListener onClickAway = {this.closePopper}>
                        <Paper>
                            <MenuList>
                                <MenuItem>
                                    Reminder
                                </MenuItem>
                                <MenuItem>
                                    Later Today   8:00 PM
                                </MenuItem>
                                <MenuItem>
                                    Tomorrow      8:00 AM
                                </MenuItem>
                                <TextField
                                    type="datetime-local"
                                    defaultValue="2019-07-20T10:28"
                                    onChange={this.handleDateTime}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <Divider/>
                                <Button onClick = {this.saveReminder}>Save</Button>
                            </MenuList>
                        </Paper>
                    </ClickAwayListener>
                </Popper>
                <IconButton>
                    <Tooltip title = "Reminder">
                        <ReminderIcon onClick = {this.reminderHandler("bottom-start")}/>
                    </Tooltip>
                </IconButton>         
            </div>
        )
    }
}

export default ReminderComponent
