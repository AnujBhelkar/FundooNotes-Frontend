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
          this.showArchive = this.showArchive.bind(this)
    }
    showArchive(){
            try{
            // this.setState({ archive: !this.state.archive})
            // this.props.archiveToTools(this.state.archive,this.props.noteID)
            // // console.log("note Id",this.props.noteID);
            // console.log("noteId in archive",this.props.noteID);
            var data ={
                noteId : this.props.noteID
            }
            console.log("1223213",data);
            
            archive(data)
                .then(res => {
                    console.log("archive successfully",res);
                    
                })
                .catch(err => {
                    console.log("err in archive",err);
                    
                })
            // this.setState({ archiveNotes : this.props.archiveNotes})
            // console.log("Archive Notes",this.state.archiveNotes);
                // this.setState({ archiveNotes :  !this.state.archiveNotes})
                // this.props.archiveNotes(!this.state.archiveNotes)
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
                            onClick = {this.showArchive}
                        />
                    </Tooltip>
                </IconButton>
            </div>
        )
    }
}

export default ArchiveComponent
