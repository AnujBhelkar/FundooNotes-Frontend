import React, { Component } from 'react'
import  Reminder from "../components/reminder";
import Collab from '../components/collaborator';
import Color from './colorBox'
import Image from '../components/image'
import Archive from '../components/archive'
import More from "../components/more";
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
                <Reminder/>
                <Collab/>
                <Color
                    props = {this.props}
                    // colorPaletteProps = {this.state.open}
                    toolsPropsToCollorPallete = {this.colorValue}
                    // noteId = {this.props.noteId}
                />                                                   
                <Image/>
                <Archive
                    //archiveToTools = {this.handleArchiveTool}
                    noteID = {this.props.noteID}
                />
                <More/>
            </div>
        )
    }
}

export default ToolsComponent
