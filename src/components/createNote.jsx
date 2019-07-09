/***************************************************************************************
 * @Purpose     : To Create for making App bar
 * @file        : createNote.jsx
 * @author      : Anuj
 * @since       : 08/07/2019
 **************************************************************************************/
import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import Tools from '../components/tools'
import {createNotes} from '../services/noteServices'
import '../App.css'
import { InputBase, IconButton } from '@material-ui/core';

export class createNote extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open : false,
             title : '',
             description : ''
        }
        this.titleHandler =  this.titleHandler.bind(this)
        this.descriptionHandler =  this.descriptionHandler.bind(this)
        this.clickNotes = this.clickNotes.bind(this)
        this.saveNotes = this.saveNotes.bind(this)
    }
    clickNotes = event => {
        event.preventDefault();
        this.setState({open : !this.state.open})
    }
    titleHandler = event => {
        event.preventDefault();
        const title = event.target.value;
        this.setState({ title : title})
    }
    descriptionHandler = event => {
        event.preventDefault();
        const description = event.target.value;
        this.setState({ description : description })
    }

    saveNotes = event => {
        event.preventDefault();
        this.setState({ open : ! this.state.open})
        const token = localStorage.getItem('id')
        var data = {
            title : this.state.title,
            description : this.state.description
        }
        createNotes(data,token)
            .then(response => {
                console.log("note created Successfully !! ",response);
                
            })
            .catch(err => {
                console.log("Error in creating Note",err);
            })
        this.setState({
            title : "",
            description : ""
        })
    }

    render() {
        return (
            <div>
                <div className = "createNote" >
                    {
                        this.state.open ?
                            <Card id = "noteCard1">
                                <InputBase
                                    id = "inputBaseTitle"
                                    placeholder = "Title"
                                    multiline
                                    value = {this.state.title}
                                    onChange = { this.titleHandler }
                                />
                                <InputBase
                                    id = "inputBaseTitle"
                                    placeholder = "Take a note..."
                                    multiline
                                    value = { this.state.description }
                                    onChange = { this.descriptionHandler }
                                />
                                <div className = "Component">
                                        <Tools/>
                                    <div>
                                        <IconButton className= "closeNoteButton" onClick = {this.saveNotes}>
                                            close
                                        </IconButton>
                                    </div>
                                </div>
                            </Card>
                            :
                            <Card id = "noteCard">
                                <InputBase
                                    id = "inputBaseTakeANote"
                                    placeholder = " Take a Note..............."
                                    onClick = {this.clickNotes}
                                />
                            </Card> 
                    }
                </div>
            </div>
        )
    }
}

export default createNote
