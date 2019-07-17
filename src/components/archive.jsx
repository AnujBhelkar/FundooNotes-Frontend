import React, { Component } from 'react'
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined'
import { IconButton, Tooltip } from '@material-ui/core';
import {archive} from '../services/noteServices'
export class ArchiveComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            archive : false,
            archiveNotes  : false 
        }
          this.makeArchiveNote = this.makeArchiveNote.bind(this)
    }
    makeArchiveNote(e){
            try{
                this.props.makeArchiveNoteProp(!this.state.archive,this.props.noteID)
        }
        catch(err){
            console.log("error in get");
            
        }
    }
    render() {
        
        return (
            <div>
                <IconButton>
                    <Tooltip title ="Archive">
                        <ArchiveIcon 
                            onClick = {this.makeArchiveNote}
                        />
                    </Tooltip>
                </IconButton>
            </div>
        )
    }
}

export default ArchiveComponent
