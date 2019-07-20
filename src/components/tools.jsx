import React, { Component } from 'react'
import  Reminder from "../components/reminder";
import Collab from '../components/collaborator';
import Color from './colorBox'
import Image from '../components/image'
import Archive from '../components/archive'
import More from "../components/moreOption";
import '../App.css'
class ToolsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
             open : false,
             color : '',
             archive : false,
        }
        // this.handleArchiveTool = this.handleArchiveTool.bind(this)
    }
    
    colorValue(value){
        
        try{
            this.setState({ color : value})
            this.props.toolPropsToCreateNote(value)
        }
        catch(err){
            console.log("value in tools",value);
        }
    }
    // handleArchiveTool = value =>{
    //     // console.log("tools value",value);
    //     // console.log("note id==>",this.props.noteID);
    //     console.log("value",value,"afsc",this.props.noteID);
        
    //     // this.setState({archive:value})
    //     // this.props.toolsToNotesProps(this.state.archive,this.props.noteID)
    //     this.props.noteIDToolsToArchive(value)
    // }
    render() {

    // console.log("12",this.props.archiveNotes);
        return (
            <div className = "toolComponent">
                <Reminder
                    noteID = {this.props.noteID}
                    saveReminder = {this.props.saveReminder}
                />
                <Collab/>
                <Color
                    props = {this.props}
                    changeColor = {this.props.changeColor}
                    noteID = {this.props.noteID}
                />                                                   
                <Image/>
                <Archive
                    //archiveToTools = {this.handleArchiveTool}
                    noteID = {this.props.noteID}
                    makeArchiveNoteProp = {this.props.makeArchiveNoteProp}
                />
                <More
                    noteID = {this.props.noteID}
                    trashNote = {this.props.trashNote}
                    selectedLabelProps = {this.props.selectedLabelProps}
                />
            </div>
        )
    }
}

export default ToolsComponent
