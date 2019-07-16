import React, { Component } from 'react'

import MoreIcon from '@material-ui/icons/MoreVert'
import { IconButton, Tooltip,Popper,Paper, MenuList, MenuItem, ClickAwayListener } from '@material-ui/core';
export class MoreComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open : false,
             anchorEl : null,
             placement : null
        }
    }
    moreOptions = placement => event => {
        console.log("options More");
        
        const { currentTarget } = event
        this.setState(state => ({
            anchorEl : currentTarget,
            open : !state.open || state.placement !== placement,
            placement
        }))
    }
    handleCloseMorePopper = () =>{
        try{
            this.setState({open : false})
        }
        catch(err){
            console.log("Error in closing Popper");
            
        }
    }

    handleTrashNote = () => {
        this.handleCloseMorePopper()
        this.props.trashNote(this.props.noteID)
    }

    render() {
        const {open,placement,anchorEl} = this.state;
        return (
            <div>
                <Popper open={open} placement={placement} anchorEl={anchorEl} transition>
                    <ClickAwayListener onClickAway = {this.handleCloseMorePopper}>
                        <Paper onMouseLeave={this.closePopper} className = "moreVertList">
                            <MenuList className = "moreVertList">
                                <MenuItem onClick = {this.handleTrashNote} >Delete Note</MenuItem>
                                <MenuItem>Add Label</MenuItem>
                            </MenuList>            
                        </Paper>
                    </ClickAwayListener>
                </Popper>
                <IconButton>
                    <Tooltip title="More">
                        <MoreIcon onClick = {this.moreOptions('bottom-start') } />
                    </Tooltip>
                </IconButton>
            </div>
        )
    }
}

export default MoreComponent
