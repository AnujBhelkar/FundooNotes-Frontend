import React, { Component } from 'react'
import { Popper, Paper, MenuItem,Checkbox, ClickAwayListener } from '@material-ui/core';
import { getAllLabel, saveLabelToNote } from '../services/noteServices';

export class Label extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open : false,
             anchorEl : null,
             label : []

        }
    }
    handleLabelChoices = (noteID ,selectedLabel) => {
        var labelData = {
            noteId : noteID,
            label : selectedLabel
        }
        saveLabelToNote(labelData)
            .then(res => {
                console.log("label save to note is done -->" ,res);
                
            })
            .catch(err =>{
                console.log("error in saving data to note",err);
                
            })
    }
    displayLabelPopup = () => {
        this.setState(state => ({
            open : !state.open,
            anchorEl : this.props.anchorEl
        }))
    }
    handlePopper = () => {
        this.setState({
            open : !this.state.open
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
        const {open,anchorEl} = this.state;
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
        return (
            <div>
                <Popper open = {open} anchorEl = {anchorEl}>
                    <Paper>
                        <ClickAwayListener onClickAway = {() => {this.handlePopper()}}>
                            {labels}
                        </ClickAwayListener>
                    </Paper>
                </Popper>
            </div>
        )
    }
}

export default Label
