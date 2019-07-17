import React, { Component } from 'react'
import { Dialog, ClickAwayListener,TextField, IconButton, Divider, Button } from "@material-ui/core";
import { addLabel } from "../services/noteServices";
import { Close,Done } from "@material-ui/icons";
export class EditLabel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             label : ''
        }
        this.closeEditLabelDialog = this.closeEditLabelDialog.bind(this)
    }
    
    closeEditLabelDialog(e){
        this.props.closeEditLabelDialog(e)
    }
    handleLabel = event => {
        const label = event.target.value
        this.setState({
            label : label
        })
    }
    addLabel = () => {
        if( this.state.label !== "" ){
            const labelData = {
                label : this.state.label
            }
            addLabel(labelData)
                .then(res =>{
                    console.log("Label Added Successfully",res);
                    this.setState({
                        label : ''
                    })
                })
                .catch(err => {
                    console.log("Error in adding Label",err);                    
                })
        }
    }
    clearEditLabel = () => {
        this.setState({
            label : ""
        })
    }
    render() {
        return (
            <div>
                <Dialog 
                    open = {this.props.editLabelDialog}
                >
                  <ClickAwayListener onClickAway = {() => this.closeEditLabelDialog()}>
                    <div className = "addLabel">
                        <IconButton onClick = { () => this.clearEditLabel()}>
                            <Close/>
                        </IconButton>
                            <TextField
                                margin="normal"
                                placeholder = "Create New Label"
                                value = {this.state.label}
                                onChange = {this.handleLabel}
                            />
                        <IconButton onClick = { () =>  this.addLabel()}>
                            <Done/>
                        </IconButton>
                  </div>
                  </ClickAwayListener>
                </Dialog> 
            </div>
        )
    }
}

export default EditLabel
