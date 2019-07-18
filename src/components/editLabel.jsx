import React, { Component } from 'react'
import { Dialog, ClickAwayListener, TextField, IconButton, Divider, Button } from "@material-ui/core";
import { addLabel,editLabel, deleletingLabel } from "../services/noteServices";
import { Close, Done,  Edit, DeleteForever, Label } from "@material-ui/icons";
export class EditLabel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            labelID : '',
            label: '',
            upadateLabel : ''
        }
        this.closeEditLabelDialog = this.closeEditLabelDialog.bind(this)
        this.upadateLabelChanger = this.upadateLabelChanger.bind(this)
        this.deleteLabel = this.deleteLabel.bind(this)
    }

    closeEditLabelDialog(e) {
        this.props.closeEditLabelDialog(e)
    }
    handleLabel = event => {
        const label = event.target.value
        this.setState({
            label: label
        })
    }
    labelHandler(value){
        this.setState({
            labelID : value
        })
    }
    addLabel = () => {
        if (this.state.label !== "") {
            const labelData = {
                label: this.state.label
            }
            addLabel(labelData)
                .then(res => {
                    console.log("Label Added Successfully", res);
                    this.props.showLabel(res.data.result)
                    this.setState({
                        label: ''
                    })
                })
                .catch(err => {
                    console.log("Error in adding Label", err);
                })
        }
    }
    clearEditLabel = () => {
        this.setState({
            label: ""
        })
    }
    upadateLabelChanger = event => {
        const label = event.target.value;
        console.log("label is ",label);
        
        this.setState({
            upadateLabel : label
        })
    }
    updateLabelHandler( labelUpdate,labelId) {
        console.log("onclick value is",labelUpdate,labelId);
        
        const labelData = {
            labelId : labelId,
            label : labelUpdate  
        }
        editLabel(labelData)
            .then(res => {
                console.log("Label Edited successfully ==>",res.data.result)
                var newArray = this.props.labels;
                for(var i = 0 ; i < newArray.length ; i++){
                    if(newArray[i]._id === labelData.labelId){
                        newArray[i].label = res.data.result.label;
                        this.props.newLabel(newArray)
                        this.setState({
                            labelId : ""
                        })
                    }
                }
                console.log("new Array is -->",newArray);
                
            })
            .catch(err => {
                console.log("Error in updating label",err)
            })
    }


    deleteLabel(value){
        var labelData = {
            labelId : value
        }
        deleletingLabel(labelData)
            .then(res=> {
                console.log("delete label Successfully",res);
                var newArray = this.props.labels;
                for(var i = 0 ; i < newArray.length ; i++ ){
                    if(newArray[i]._id === labelData.labelId){
                        newArray.splice(i,1)
                        this.props.newLabel(newArray)
                        this.setState({labelId : ''})
                    }
                }
                
            })
            .catch(err => {
                console.log("error in deleting label",err);
                
            })
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.editLabelDialog}
                >
                    <ClickAwayListener onClickAway={() => this.closeEditLabelDialog()}>
                        <div>
                        <div className="addLabel">
                            <IconButton onClick={() => this.clearEditLabel()}>
                                <Close />
                            </IconButton>
                            <TextField
                                margin="normal"
                                placeholder="Create New Label"
                                value={this.state.label}
                                onChange={this.handleLabel}
                            />
                            <IconButton onClick={() => this.addLabel()}>
                                <Done />
                            </IconButton>
                        </div>
                                <div>
                                    {
                                        this.props.labels.map((key) => 
                                            this.state.labelID !== key._id ? 
                                                <div className = "editDialogLabels" onClick ={ () => this.labelHandler(key._id)}>
                                                    <IconButton style = {{justifyItems : "start"}}>
                                                        <Label/>
                                                    </IconButton>
                                                        <span style = {{paddingTop: "5%"}}>{key.label}</span>
                                                    <IconButton style = {{ justifyContent : "end"}}>
                                                        <Edit/>
                                                    </IconButton>
                                                </div>
                                                :
                                                <div className = "editDialogLabels" >
                                                    <IconButton >
                                                        <DeleteForever onClick = {() => this.deleteLabel(key._id) } />
                                                    </IconButton>
                                                        <TextField
                                                            defaultValue = {key.label}
                                                            onChange = {this.upadateLabelChanger}
                                                        />
                                                    <IconButton>
                                                        <Done onClick = {() => this.updateLabelHandler(this.state.upadateLabel,key._id)}/>
                                                    </IconButton>
                                                </div>
                                        )
                                    }
                                </div>
                        </div>
                    </ClickAwayListener>
                </Dialog>
            </div>
        )
    }
}

export default EditLabel
