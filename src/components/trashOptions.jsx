import React, { Component } from 'react'
import '../App.css'
import { MoreVertOutlined } from "@material-ui/icons";
import { Popper, Paper, MenuItem, ClickAwayListener } from '@material-ui/core';
export class TrashOptions extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open: false,
             placement : null,
             anchorEl : null
        }
    }
    handdleMoreVert = placement => event => {
        var {currentTarget} = event
        this.setState(state => ({
            anchorEl : currentTarget,
            open : placement !== state.placement || ! state.open,
            placement 
        }))
    }
    handleClosePopper = () => {
        this.setState({
            open : false
        })
    }
    deletePerManently = () => {
        this.props.deleteNotePermanent(this.props.noteID)
    }
    handleRestore = () => {
        this.props.restoreNote(this.props.noteID)
    }
    render() {
        var { open, placement, anchorEl} = this.state
        return (
            <div>
                <Popper open = {open} placement = {placement} anchorEl = {anchorEl}>
                    <ClickAwayListener onClickAway = {this.handleClosePopper}>
                        <Paper>
                            <MenuItem onClick = {this.deletePerManently}>
                                Delete
                            </MenuItem>
                            <MenuItem onClick = {this.handleRestore}>
                                Restore
                            </MenuItem>
                        </Paper>
                    </ClickAwayListener>
                </Popper>
                <div className = "moreOption">
                    <MoreVertOutlined onClick = {this.handdleMoreVert("bottom-end")}/>
                </div>
            </div>
        )
    }
}

export default TrashOptions
