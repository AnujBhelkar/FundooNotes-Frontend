/****************************************************************************************************
 * @Purpose     : To Create for building logic of getting notes from backend
 * @file        : notes.jsx
 * @author      : Anuj
 * @since       : 08/07/2019
 ***************************************************************************************************/
import React, { Component } from 'react'
import Tools from '../components/tools'
import { Card, Chip } from '@material-ui/core'
import { getNotes, getArchiveNotes, updateTitle, updateDescription, updateColor, trash, deleteLabelToNote, saveLabelToNote, addReminder,deleteReminderToNote, deleteNote } from '../services/noteServices'
import { makeArchiveNote } from "../services/noteServices";
import Dialog from '../components/dialogBox'
import TrashOptions from '../components/trashOptions'
import SearchNote from '../components/searchNote'
import NoteAnalysis from '../components/pieChart'
export class NotesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            open: false,
            label : false,
            // noteId : '',
            archive: "",
            // trash : [],
            // archiveNoteCard : []

        }
        this.cardToDialogBox = React.createRef()
        this.displayCard = this.displayCard.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.editTitle = this.editTitle.bind(this)
        this.editDescription = this.editDescription.bind(this)
        this.closeDialogBox = this.closeDialogBox.bind(this)
        this.changeColor = this.changeColor.bind(this)
        this.trashNote = this.trashNote.bind(this)
        this.makeArchive = this.makeArchive.bind(this)
        this.displayLabelledCard = this.displayLabelledCard.bind(this)
        this.makeLabelFalse = this.makeLabelFalse.bind(this)
        

        // this.getArchiveNotes = this.getArchiveNotes.bind
        //this.noteIdHandler = this.noteIdHandler.bind(this)


    }
    // getArchiveNotes = () => {

    // }
    async handleClick(note) {
        console.log("note ==> ", note)
        await this.cardToDialogBox.current.getData(note);
        await this.setState({ open: true })
    }
    editTitle(title, noteId) {
        const data = {
            title: title,
            noteId: noteId
        }
        console.log("Data of Edit Title ==> ", data);

        updateTitle(data)
            .then(res => {
                console.log("Title Updated", res);

            })
            .catch(err => {
                console.log("error in editing title", err);

            })
    }
    editDescription(description, noteId) {
        const data = {
            description: description,
            noteId: noteId
        }
        updateDescription(data)
            .then(res => {
                console.log("Description Updated", res);

            })
            .catch(err => {
                console.log("error in editing description", err);

            })
    }

    async changeColor(color, noteId) {
        const colorData = {
            noteId: noteId,
            color: color
        }
        console.log("Color data in notes -->",colorData);
        
        await updateColor(colorData)
            .then(res => {
                console.log("update color successfully", res);
                getNotes()
                    .then(response => {
                        console.log("all Notes", response.data.result);

                        this.setState({ notes: response.data.result })
                    })
                    .catch(err => {
                        console.log("Error in getting Notes", err);

                    })

            })
            .catch(err => {
                console.log("Error in update color", err);

            })
    }
    async makeArchive(archive, noteID) {
        const archiveData = {
            archive: archive,
            noteId: noteID
        }
        await makeArchiveNote(archiveData)
            .then(res => {
                console.log("archive successfully", res);
                getNotes()
                    .then(response => {
                        console.log("all Notes", response.data.result);

                        this.setState({ notes: response.data.result })
                    })
                    .catch(err => {
                        console.log("Error in archive Notes", err);

                    })

            })
            .catch(err => {
                console.log("Error in archive note", err);

            })
    }


    closeDialogBox(e) {
        console.log("value of close Dialog box", e);
        this.setState({ open: !this.state.open })
    }
    async trashNote(noteId) {
        const data = {
            noteId: noteId
        }
        await trash(data)
            .then(res => {
                console.log("Note Trashed");
                getNotes()
                    .then(response => {
                        // console.log("all Notes", response.data.result);

                        this.setState({ notes: response.data.result })
                    })
                    .catch(err => {
                        console.log("Error in getting Notes", err);

                    })

            })
            .catch(err => {
                console.log("Error in Trashed Note");

            })

    }
    componentDidMount = () => {
        getNotes()
            .then(response => {
                // console.log("all Notes", response.data.result);

                this.setState({ notes: response.data.result })
            })
            .catch(err => {
                console.log("Error in getting Notes", err);

            })
        // getArchiveNotes()
        //     .then(response => {
        //         console.log(response);
        //         this.setState({ archive: response.data.result })

        //     })
        //     .catch(err => {
        //         console.log("error in getting archive Notes");

        //     })

    };
    async handleLabelOnDelete(label,noteId){
        var labelData = {
            label : label,
            noteId : noteId,
        }
         await deleteLabelToNote(labelData)
            .then(res => {
                console.log("label Deleted Successfully",res.data.result);
                var newArray = this.state.notes
                for(var i = 0 ; i < newArray.length ; i++ ){
                    if(newArray[i]._id === labelData.noteId ){
                        newArray[i].label = res.data.result
                        this.setState
                        ({
                            notes : newArray
                        })
                    }
                }
                
            })   
            .catch(err => {
                console.log("error in deleting note",err);
                
            })
    }
    saveLabelToNote = (noteID,selectedLabel) => {
        const labelData = {
            noteId : noteID,
            label : selectedLabel 
        }
        console.log("Label Data of save label is ==> ",labelData);
        
        saveLabelToNote(labelData)
            .then(res => {
                var newArray = this.state.notes
                for(var i = 0 ;i < newArray.length ; i++){
                    if(newArray[i]._id === labelData.noteId){
                        newArray[i].label = res.data.result
                        this.setState({
                            notes : newArray
                        })
                    }
                }
            })
    }
    async displayLabelledCard(){
        await this.setState({
            label : true
        })
    }
    async makeLabelFalse(){
        await this.setState({
            label : false
        })
    }

    displayCard = (newcard) => {
        console.log("newcard==>", newcard);

        this.setState({
            notes: [...this.state.notes, newcard]
        })
    }
    saveReminder = (noteID,reminder) => {
        const reminderData ={
            noteId : noteID,
            reminder : reminder
        }
        console.log("reminder data of note component ==>",reminderData);
        
        addReminder(reminderData)
            .then(res => {
                console.log("reminder is set",res.data.result);
                var newArray = this.state.notes
                for(var i = 0 ;i < newArray.length ; i++){
                    if(newArray[i]._id === reminderData.noteId){
                        newArray[i].reminder = res.data.result
                        this.setState({
                            notes : newArray
                        })
                    }
                }
                
            })
            .catch(err => {
                console.log("error in reminder",err);
                
            })
    }

    async handleReminderOnDelete(reminder,noteId){
        var reminderData = {
            reminder : reminder,
            noteId : noteId,
        }
         await deleteReminderToNote(reminderData)
            .then(res => {
                console.log("reminder Deleted Successfully",res.data.result);
                var newArray = this.state.notes
                for(var i = 0 ; i < newArray.length ; i++ ){
                    if(newArray[i]._id === reminderData.noteId ){
                        newArray[i].reminder = res.data.result
                        this.setState
                        ({
                            notes : newArray
                        })
                    }
                }
                
            })   
            .catch(err => {
                console.log("error in deleting note",err);
                
            })
    }

    deleteNote = (noteID) => {
        var deleteData = {
            noteId : noteID
        }
        // console.log("delete Data is -->",deleteData);
        
        deleteNote(deleteData)
            .then(res => {
                console.log("Note Deleted Successfully",res);
                var noteArray = this.state.notes
                for(var i = 0 ; i < noteArray.length ; i++){
                    if(noteArray[i]._id === deleteData.noteId)
                        noteArray.splice(i,1)
                        this.setState({
                            notes : noteArray
                        })
                }
            })
            .catch(err => {
                console.log("Error in Deleting Notes");
                
            })
    }

    render() {
        const grid = this.props.grid ? 'afterCard' : null;
        // console.log(CardView);
        // console.log("archiedsbkjf",this.props.archiveOpen);
        console.log(this.props.archiveNotes, this.props.reminderNotes, this.props.trashNotes,this.state.label,this.props.noteAnalysis);
        if(this.props.searchInputDashToNotes !== ""|| this.state.label){
            let searchNote
                if(this.props.searchInputDashToNotes !== "" ){
                    searchNote = this.state.notes.filter(
                        obj => obj.title.includes(this.props.searchInputDashToNotes) || 
                            obj.description.includes(this.props.searchInputDashToNotes)
                    )
                }
                else{
                    searchNote = this.state.notes.filter(
                        obj => obj.label.length > 0 && obj.label.find((item) => item === this.props.labelValue)
                    )
                }
                return(
                    <SearchNote
                        searchNote = {searchNote}
                        cardStyle = {this.props.grid}
                    />
                )
        }
        else if(this.props.noteAnalysis === true){
            return(
                <NoteAnalysis
                    allNotes = {this.state.notes}
                />
            )
            
        }
        else if (this.props.archiveNotes === true) {
            var notearr = this.state.notes.map((key) => {
                if (key.archive === true) {
                    // let noteArray = otherArray(this.state.notes)
                    // console.log("all notes", key._id);
                    return (

                        <div id={grid} >
                            <Card className="noteCard" style={{ backgroundColor: key.color , position: 'relative', top: '5rem'}}>
                                <div onClick={() => this.handleClick(key)}>
                                    <div className="noteTitle">
                                        {key.title}
                                    </div>
                                    <div className="noteDescription">
                                        {key.description}
                                    </div>
                                </div>
                                <div style ={{display:"flex"}}>
                                    {
                                        key.label !== null ?
                                           key.label.map((labels) =>
                                                <div>
                                                    <Chip
                                                        label = {labels}
                                                        onDelete = {() =>this.handleLabelOnDelete(labels,key._id)}
                                                    />
                                                </div>
                                            )
                                            : (null)
                                    }
                                </div>
                                <div style ={{display:"flex"}}>
                                    {
                                        key.reminder !== null ?
                                           key.reminder.map((reminders) =>
                                                <div>
                                                    <Chip
                                                        label = {reminders}
                                                        onDelete = {() =>this.handleReminderOnDelete(reminders,key._id)}
                                                    />
                                                </div>
                                            )
                                            : (null)
                                    }
                                </div>
                                <Tools
                                    //toolsToNotesProps = {this.noteIdHandler(key._id)}
                                    noteID={key._id}
                                    changeColor={this.changeColor}
                                    trashNote={this.trashNote}
                                    makeArchiveNoteProp={this.makeArchive}
                                    saveReminder = {this.saveReminder}
                                    selectedLabelProps = {this.saveLabelToNote}
                                />
                            </Card>
                        </div>
                    )
                }
            })
        }
        else if (this.props.reminderNotes === true) {
            var notearr = this.state.notes.map((key) => {
                if (key.reminder.length > 0 ) {
                    // let noteArray = otherArray(this.state.notes)
                    // console.log("all notes", key._id);
                    return (

                        <div id={grid} >
                            <Card className="noteCard" style={{ backgroundColor: key.color , position: 'relative', top: '5rem'}}>
                                <div onClick={() => this.handleClick(key)}>
                                    <div className="noteTitle">
                                        {key.title}
                                    </div>
                                    <div className="noteDescription">
                                        {key.description}
                                    </div>
                                </div>
                                <div style ={{display:"flex"}}>
                                    {
                                        key.label !== null ?
                                           key.label.map((labels) =>
                                                <div>
                                                    <Chip
                                                        label = {labels}
                                                        onDelete = {() =>this.handleLabelOnDelete(labels,key._id)}
                                                    />
                                                </div>
                                            )
                                            : (null)
                                    }
                                </div>
                                <div style ={{display:"flex"}}>
                                    {
                                        key.reminder !== null ?
                                           key.reminder.map((reminders) =>
                                                <div>
                                                    <Chip
                                                        label = {reminders}
                                                        onDelete = {() =>this.handleReminderOnDelete(reminders,key._id)}
                                                    />
                                                </div>
                                            )
                                            : (null)
                                    }
                                </div>
                                <Tools
                                    //toolsToNotesProps = {this.noteIdHandler(key._id)}
                                    noteID={key._id}
                                    changeColor={this.changeColor}
                                    trashNote={this.trashNote}
                                    makeArchiveNoteProp={this.makeArchive}
                                    saveReminder = {this.saveReminder}
                                    selectedLabelProps = {this.saveLabelToNote}
                                />
                            </Card>
                        </div>
                    )
                }
            })
        }
        else if (this.props.trashNotes === true) {
            var notearr = this.state.notes.map((key) => {
                if (key.trash === true) {
                    // let noteArray = otherArray(this.state.notes)
                    // console.log("all notes", key._id);
                    return (
                        <div id={grid} >
                            <Card style={{ backgroundColor: key.color,position: 'relative', top: '5rem',width : "125%",
                                     justifyContent :"space-around","flex-wrap": "wrap"
                                }}>
                                <div onClick={() => this.handleClick(key)}>
                                    <div className="noteTitle">
                                        {key.title}
                                    </div>
                                    <div className="noteDescription">
                                        {key.description}
                                    </div>
                                </div>
                                <div style ={{display:"flex"}}>
                                    {
                                        key.label !== null ?
                                           key.label.map((labels) =>
                                                <div>
                                                    <Chip
                                                        label = {labels}
                                                        onDelete = {() =>this.handleLabelOnDelete(labels,key._id)}
                                                    />
                                                </div>
                                            )
                                            : (null)
                                    }
                                </div>
                                <div style ={{display:"flex"}}>
                                    {
                                        key.reminder !== null ?
                                           key.reminder.map((reminders) =>
                                                <div>
                                                    <Chip
                                                        label = {reminders}
                                                        onDelete = {() =>this.handleReminderOnDelete(reminders,key._id)}
                                                    />
                                                </div>
                                            )
                                            : (null)
                                    }
                                </div>
                                <TrashOptions
                                    noteID = {key._id}
                                    restoreNote = {this.trashNote}
                                    deleteNotePermanent = {this.deleteNote}
                                />
                            </Card>
                        </div>
                    )
                }
            })
        }
        else {
            var notearr = this.state.notes.map((key) => {
                if (key.archive === false && key.trash === false) {
                    // let noteArray = otherArray(this.state.notes)
                    // console.log("all notes", key._id);
                    return (

                        <div id={grid} >
                            <Card className="noteCard" style={{ backgroundColor: key.color, position: 'relative', top: '5rem',    "word-break": "break-all"}}>
                                <div onClick={() => this.handleClick(key)}>
                                    <div className="noteTitle">
                                        {key.title}
                                    </div>
                                    <div className="noteDescription">
                                        {key.description}
                                    </div>
                                </div>
                                <div style ={{display:"flex"}}>
                                    {
                                        key.label !== null ?
                                           key.label.map((labels) =>
                                                <div>
                                                    <Chip
                                                        label = {labels}
                                                        onDelete = {() =>this.handleLabelOnDelete(labels,key._id)}
                                                    />
                                                </div>
                                            )
                                            : (null)
                                    }
                                </div>
                                <div style ={{display:"flex"}}>
                                    {
                                        key.reminder !== null ?
                                           key.reminder.map((reminders) =>
                                                <div>
                                                    <Chip
                                                        label = {reminders}
                                                        onDelete = {() =>this.handleReminderOnDelete(reminders,key._id)}
                                                    />
                                                </div>
                                            )
                                            : (null)
                                    }
                                </div>
                                <Tools
                                    //toolsToNotesProps = {this.noteIdHandler(key._id)}
                                    noteID={key._id}
                                    changeColor={this.changeColor}
                                    trashNote={this.trashNote}
                                    makeArchiveNoteProp={this.makeArchive}
                                    selectedLabelProps = {this.saveLabelToNote}
                                    saveReminder = {this.saveReminder}
                                />
                            </Card>
                        </div>
                    )
                }
            })
        }
        return (
            <div>
                <div className="notesGridView">
                    {notearr}
                </div>
                <Dialog
                    ref={this.cardToDialogBox}
                    parentOpen={this.state.open}
                    editTitle={this.editTitle}
                    editDescription={this.editDescription}
                    closeDialogBox={this.closeDialogBox}
                    editColor = {this.changeColor}
                    saveReminder = {this.saveReminder}
                    selectedLabelProps = {this.saveLabelToNote}
                    makeArchiveNote = {this.makeArchive}
                    trashNote={this.trashNote}
                    handleLabelOnNote = {this.handleLabelOnDelete}
                    handleReminderOnNote = {this.handleReminderOnDelete}
                />
            </div>
        )
    }
}

export default NotesComponent
