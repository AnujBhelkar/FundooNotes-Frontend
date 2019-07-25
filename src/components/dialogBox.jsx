import React, { Component } from 'react'
import Dialog from "@material-ui/core/Dialog";
import Tools from '../components/tools'
import { Card, InputBase, IconButton, ClickAwayListener,Button } from "@material-ui/core";
import Chip from '@material-ui/core/Chip'
import '../App.css'
export class DialogBoxComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            archive: '',
            _id: '',
            color : '',
            reminder : '',
            label : []
        }
        this.handleEventTitle = this.handleEventTitle.bind(this)
        this.handleEventDescription = this.handleEventDescription.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }
    /**
     * @description : Here handling events
     */
    handleEventTitle = (event) => {
        const title = event.target.value
        this.setState({
            title: title
        })
    }
    handleEventDescription = (event) => {
        const description = event.target.value
        this.setState({
            description: description
        })
    }
    async getData(note) {
        console.log("Data in dialog Box===> ", note)
        await this.setState({
            title: note.title,
            description: note.description,
            archive: note.archive,
            _id: note._id,
            color : note.color,
            label : note.label,
            reminder : note.reminder
        })
        console.log( "Data of Dialog Box in label ==>",this.state.label);
        
    }
    async handleToggle(e) {
        await this.props.editTitle(this.state.title, this.state._id)
        await this.props.editDescription(this.state.description, this.state._id)
        await this.props.closeDialogBox(e)
    }
    async changeColor(value,noteID){
        await this.setState({
            color : value
        })
        this.props.editColor(value,noteID)
    }
    saveReminder = (noteID,date) => {
        this.props.saveReminder(noteID,date)
    }
    selectedLabelProps = (noteID,selectedLabel) => {
        this.props.selectedLabelProps(noteID,selectedLabel)
    }
    makeArchiveNote = (value,noteID) => {
        this.props.makeArchiveNote(value,noteID)
    }
    trashNote = (noteID) => {
        this.props.trashNote(noteID)
    }
    handleLabelOnDelete = (label,noteID) => {
        this.props.handleLabelOnNote(label,noteID)
    }
    handleReminderOnDelete = (reminder,noteID) => {
        this.props.handleReminderOnNote(reminder,noteID)
    }
    render() {
        console.log("labels are --->",this.state.label);
        
        return (
            <div>
                    <Dialog
                        open={this.props.parentOpen}
                        className="dialogBox"
                        onClose = {() => this.handleToggle()}
                    >
                        <Card id="cardOnDialogBox" style = {{backgroundColor : this.state.color}} >
                            <InputBase
                                id="inputBaseTitle"
                                placeholder="Title"
                                name="Title"
                                multiline
                                value={this.state.title}
                                onChange={this.handleEventTitle}
                            />
                            <InputBase
                                id="inputBaseTitle"
                                placeholder="Take a note..."
                                multiline
                                name="Description"
                                value={this.state.description}
                                onChange={this.handleEventDescription}
                            />
                            <div style ={{display:"flex"}}>
                                {
                                    this.state.label.length > 0 ?
                                        this.state.label.map((labels) =>
                                            <div>
                                                <Chip 
                                                    label = {labels}
                                                    onDelete = {() =>this.handleLabelOnDelete(labels,this.state._id)}
                                                />
                                            </div>
                                        )
                                        : null
                                }
                            </div>
                            <div style ={{display:"flex"}}>
                                {
                                        this.state.reminder.length > 0 ?
                                             this.state.reminder.map((reminders) =>
                                            <div>
                                                <Chip 
                                                    label = {reminders}
                                                    onDelete = {() =>this.handleReminderOnDelete(reminders,this.state._id)}
                                                />
                                            </div>
                                             )
                                        : (null)
                                }
                            </div>
                            <div className="Component">
                                <Tools
                                    noteID = {this.state._id}
                                    changeColor = {this.changeColor}
                                    saveReminder = {this.saveReminder}
                                    selectedLabelProps = {this.selectedLabelProps}
                                    makeArchiveNoteProp = {this.makeArchiveNote}
                                    trashNote = {this.trashNote}
                                />
                                <div>
                                    <Button className= "closeNoteButton" onClick={() => this.handleToggle()}>close</Button>
                                </div>
                            </div>
                        </Card>
                    </Dialog>

                
            </div>
        )
    }
}

export default DialogBoxComponent
