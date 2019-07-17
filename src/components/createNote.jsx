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
import { InputBase, IconButton, Button, ClickAwayListener } from '@material-ui/core';
import { relative } from 'path';

export class createNote extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            notes:{},
             open : false,
             title : '',
             description : '',
             archive : false,
             color : 'rgb(255,255,255)'
        }
        this.titleHandler =  this.titleHandler.bind(this)
        this.descriptionHandler =  this.descriptionHandler.bind(this)
        this.clickNotes = this.clickNotes.bind(this)
        this.saveNotes = this.saveNotes.bind(this)
        this.handleColor = this.handleColor.bind(this)
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
    handleColor = value => {
        const color = value
        this.setState({ color : color })
        console.log("create note",value);      
    }
    handleArchiveNote= value => {
        console.log("create note Archive value ==>",value);
        
        this.setState({
            archive :value
        })
    }

    saveNotes = event => {
        event.preventDefault();
        const token = localStorage.getItem('id')
        var data = {
            title : this.state.title,
            description : this.state.description,
            color       : this.state.color,
            archive     : this.state.archive
        }
        console.log("save Notes Data ==>",data);
        
        createNotes(data,token)
            .then(response => {
                console.log("note created Successfully !! ",response.data.result);
                this.setState({
                        notes:response.data.result
                })

                this.props.createNoteProps(this.state.notes)

                console.log(this.createNoteProps);
                
            })
            
            .catch(err => {
                console.log("Error in creating Note",err);
            })

        this.setState({
            open : !this.state.open,
            title : "",
            description : "",
            color : 'rgb(255,255,255)'
        })
    }

    render() {
        return (
            <div>
                <div className = "createNote" >
                    {
                        this.state.open ?
                            <Card id = "noteCard1" style ={{  backgroundColor : this.state.color,position:"relative",top : "5rem" }}>
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
                                        <Tools
                                            changeColor = {this.handleColor}
                                            makeArchiveNoteProp = {this.handleArchiveNote}
                                        />
                                    <div>
                                        <Button className= "closeNoteButton" onClick = {this.saveNotes}>close</Button>
                                    </div>
                                </div>
                            </Card>
                        :
                            <Card id = "noteCard" style = {{ position : "relative",top : "5rem"}}>
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
