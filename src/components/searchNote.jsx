import React, { Component } from 'react'
import { Card,Chip } from "@material-ui/core";
import Tools from "../components/tools"
import '../App.css'
import Label from './label';
class Search extends Component {
    render() {
        console.log("length of search note is ==>",this.props.searchNote);
        
        const grid = this.props.cardStyle ? 'afterCard' : null;
           var noteArr = this.props.searchNote.map((key) => {
                        return (
                            <div id={grid} >
                                <Card className="noteCard" style={{ backgroundColor: key.color, position: 'relative', top: '5rem'}}>
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
                                    <Tools
                                        //toolsToNotesProps = {this.noteIdHandler(key._id)}
                                        noteID={key._id}
                                        changeColor={this.changeColor}
                                        trashNote={this.trashNote}
                                        makeArchiveNoteProp={this.makeArchive}
                                        selectedLabelProps = {this.saveLabelToNote}
                                    />
                                </Card>
                            </div>
                        )
                })   
    return(                
            <div className="notesGridView">
            {
                    (this.props.searchNote).length === 0 ?
                        <div className = "noMatchFound">
                            No Matching Found
                        </div>
                    :
                        <Label>
                            {/** search Note*/}
                        </Label>
                }
                {noteArr}
            </div>
        )
     } 
}

export default Search
// return (
//     <div>
//         
//         <div>