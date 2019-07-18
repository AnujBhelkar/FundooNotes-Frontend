import React, { Component } from 'react'

import MoreIcon from '@material-ui/icons/MoreVert'
import { IconButton, Tooltip,Popper,Paper, MenuList, MenuItem, ClickAwayListener } from '@material-ui/core';
import AddLabelPopup from '../components/label'
export class MoreComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open : false,
             anchorEl : null,
             placement : null
        }
        this.labelAddToNote = React.createRef()
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
    handleAddLabel = (event) => {
        this.setState({
            open : false
        })
        this.labelAddToNote.current.displayLabelPopup(event)
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
                                <MenuItem onClick = {this.handleAddLabel}>Add Label</MenuItem>
                            </MenuList>            
                        </Paper>
                    </ClickAwayListener>
                </Popper>
                <IconButton>
                    <Tooltip title="More">
                        <MoreIcon onClick = {this.moreOptions('bottom-start') } />
                    </Tooltip>
                </IconButton>
                <AddLabelPopup
                    ref = {this.labelAddToNote}
                    anchorEl = {this.state.anchorEl}
                    noteID = {this.props.noteID}
                />
            </div>
        )
    }
}

export default MoreComponent
