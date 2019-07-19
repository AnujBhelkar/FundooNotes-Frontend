import React, { Component } from 'react'
import { Popper, Paper, MenuItem,Checkbox, ClickAwayListener, Divider, Button } from '@material-ui/core';
import { getAllLabel, saveLabelToNote } from '../services/noteServices';

export class Label extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open : false,
             anchorEl : null,
             placement : null,
             label : []

        }
        this.handlePopper = this.handlePopper.bind(this)
    }
    handleLabelChoices = (noteID ,selectedLabel) => {
        // var labelData = {
        //     noteId : noteID,
        //     label : selectedLabel
        // }
        // saveLabelToNote(labelData)
        //     .then(res => {
        //         console.log("label save to note is done -->" ,res);
                
        //     })
        //     .catch(err =>{
        //         console.log("error in saving data to note",err);
                
        //     })
        this.props.selectedLabelProps(noteID,selectedLabel)
    }
    displayLabelPopup = () => {
        this.setState(state => ({
            open : !state.open,
            anchorEl : this.props.anchorEl
        }))
    }
    handlePopper = (event) => {
        event.preventDefault();
        this.setState({
            open : false
        })
    }
    componentDidMount(){
        getAllLabel()
            .then(res => {
                console.log("getting All Label in Label Component",res);
                this.setState({
                    label : res.data.result 
                })
            })
            .catch(err => {
                console.log("error in getting label in label component -->",err);
                
            })
    }

    render() {
        console.log("label is ==>",this.state.label);
        
        var labels = this.state.label
        if(this.state.label !== ""){
            labels = this.state.label.map((key) => 
                <MenuItem>  
                    <Checkbox onClick = {() => this.handleLabelChoices(this.props.noteID,key.label)}/>
                    <div> {key.label}</div>
                </MenuItem>
            )
        }
        const {open,anchorEl,placement} = this.state;
        return (
            <div>
                <Popper open = {open} anchorEl = {anchorEl} >
                    <ClickAwayListener onClickAway = {this.handlePopper}>
                        <Paper>
                                {labels}
                            <Divider/>
                                <Button onClick = {this.handlePopper} > Close </Button>
                        </Paper>
                    </ClickAwayListener>
                </Popper>
            </div>
        )
    }
}

export default Label
