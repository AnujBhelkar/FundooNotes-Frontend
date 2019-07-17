/****************************************************************************************************
 * @Purpose     : To Create for building logic of getting notes from backend
 * @file        : notes.jsx
 * @author      : Anuj
 * @since       : 08/07/2019
 ***************************************************************************************************/
import React, { Component } from 'react'
import Tools from '../components/tools'
import Card from '@material-ui/core/Card'
import { getNotes, getArchiveNotes, updateTitle, updateDescription, updateColor,trash} from '../services/noteServices'
import { makeArchiveNote } from "../services/noteServices";
import Dialog from '../components/dialogBox'
import TrashOptions from '../components/trashOptions'
export class NotesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            open: false,
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

        // this.getArchiveNotes = this.getArchiveNotes.bind
        //this.noteIdHandler = this.noteIdHandler.bind(this)


    }
    // getArchiveNotes = () => {

    // }
    async handleClick(note) {
        console.log("note ==> ", note)
        this.cardToDialogBox.current.getData(note);
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
    async makeArchive(archive,noteID){
        const archiveData ={
            archive : archive,
            noteId : noteID
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
    async trashNote(noteId){
        const data = {
            noteId : noteId
        }
        await trash(data)
            .then(res => {
                console.log("Note Trashed");
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
                console.log("Error in Trashed Note");
                
            })

    }
    componentDidMount = () => {
        getNotes()
            .then(response => {
                console.log("all Notes", response.data.result);

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


    displayCard = (newcard) => {
        console.log("newcard==>", newcard);

        this.setState({
            notes: [...this.state.notes, newcard]
        })
    }


    render() {
        const grid = this.props.grid ? 'afterCard' : null;
        // console.log(CardView);
        // console.log("archiedsbkjf",this.props.archiveOpen);
        console.log(this.props.archiveNotes, this.props.reminderNotes, this.props.trashNotes);

        if (this.props.archiveNotes === true) {
            var notearr = this.state.notes.map((key) => {
                if(key.archive === true){
                // let noteArray = otherArray(this.state.notes)
                // console.log("all notes", key._id);
                return (

                    <div id={grid} >
                        <Card className="noteCard" style={{ backgroundColor: key.color }}>
                            <div onClick={() => this.handleClick(key)}>
                                <div className="noteTitle">
                                    {key.title}
                                </div>
                                <div className="noteDescription">
                                    {key.description}
                                </div>
                            </div>
                            <Tools
                                //toolsToNotesProps = {this.noteIdHandler(key._id)}
                                noteID={key._id}
                                changeColor={this.changeColor}
                                trashNote = {this.trashNote}
                                makeArchiveNoteProp ={this.makeArchive}
                            />
                        </Card>
                    </div>
                )
                }
            })
        }
        else if(this.props.trashNotes === true) {
            var notearr = this.state.notes.map((key) => {
                if(key.trash === true){
                // let noteArray = otherArray(this.state.notes)
                // console.log("all notes", key._id);
                return (
                    <div id={grid} >
                        <Card className="noteCard" style={{ backgroundColor: key.color }}>
                            <div onClick={() => this.handleClick(key)}>
                                <div className="noteTitle">
                                    {key.title}
                                </div>
                                <div className="noteDescription">
                                    {key.description}
                                </div>
                            </div>
                            <TrashOptions/>
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
                            <Card className="noteCard" style={{ backgroundColor: key.color,position : 'relative',top : '5rem' }}>
                                <div onClick={() => this.handleClick(key)}>
                                    <div className="noteTitle">
                                        {key.title}
                                    </div>
                                    <div className="noteDescription">
                                        {key.description}
                                    </div>
                                </div>
                                <Tools
                                    //toolsToNotesProps = {this.noteIdHandler(key._id)}
                                    noteID={key._id}
                                    changeColor={this.changeColor}
                                    trashNote = {this.trashNote}
                                    makeArchiveNoteProp ={this.makeArchive}
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
                    editColor = {this.changeColor}
                    closeDialogBox={this.closeDialogBox}
                />
            </div>
        )
    }
}

export default NotesComponent
