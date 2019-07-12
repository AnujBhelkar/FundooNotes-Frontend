/****************************************************************************************************
 * @Purpose     : To Create for building logic of getting notes from backend
 * @file        : notes.jsx
 * @author      : Anuj
 * @since       : 08/07/2019
 ***************************************************************************************************/
import React, { Component } from 'react'
import Tools from '../components/tools'
import Card from '@material-ui/core/Card'
import { getNotes,getArchiveNotes } from '../services/noteServices'
export class NotesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            noteId : '',
            archive : [],
            trash : [],
            archiveNoteCard : []

        }
        this.displayCard = this.displayCard.bind(this)
        //this.noteIdHandler = this.noteIdHandler.bind(this)


    }
    getArchiveNotes = () => {
        getArchiveNotes()
            .then(response =>{
                console.log(response);
                
            })
            .catch(err => {
                console.log("error in getting archive Notes");
                
            })
    }

    componentDidMount = () => {
        getNotes()
            .then(response => {
                console.log("all Notes", response.data.result);
                // console.log("all Notes 12", response.data.result[0].trash);
                
                // for(var i = 0 ; i < response.data.result.length ; i++ ){
                            
                //         // console.log("GAnes",response.data.result[i]);                    
                //      if(response.data.result[i].archive === false && response.data.result[i].trash === false){
                //         this.setState({ notes : response.data.result})
                //         console.log(" notes ",this.state.notes);
                //     }
                //     else if(response.data.result[i].trash === true){
                //         this.setState({ trash : response.data.result[i]})
                //         // console.log("GAnes",response.data.result[i]);     
                //     }
                //     else if(response.data.result[i].archive === true){
                //         this.setState({ archive : response.data.result[i]})
                //         console.log("Archive notes ",this.state.archive);
                //     }
            
                // }
                this.setState({ notes : response.data.result})
            })
            .catch(err => {
                console.log("Error in getting Notes", err);

            })
        };



//      noteIdHandler=(noteId)=>{
//         //  console.log(value);
         
//         //this.setState({archive : !this.state.archive})
    
//         var data ={
//             noteId : [noteId],
//             archive : !this.state.archive

//         }
//         console.log("noooooooooooop",data);
        
//         archive(data)
//             .then(response => {
//                 console.log("archive successfully",response);
                
//             })
//             .catch(err => {
//                 console.log("error in getting notes");
                
//             })
    
// }
    displayCard=(newcard)=>{
        console.log("newcard==>",newcard);
        
        this.setState({
            notes:[...this.state.notes,newcard]
        })
    }
    // archiveOpenDashboardToNotes(value){
    //     console.log("++++++++++++++>",value);
        
    // }


    
    render() {
        // var typeOfData;
        if(this.props.archiveNotes === true){
            
        }
        const grid = this.props.grid? 'afterCard' : null;
            // console.log(CardView);
            console.log("archiedsbkjf",this.props.archiveOpen);
            
        var notearr = this.state.notes.map((key) => {

            // let noteArray = otherArray(this.state.notes)
            // console.log("all notes", key._id);
            return ( 
                 (this.props.archiveNotes && this.props.reminderNotes && this.props.trashNotes  === false ?  
                    <div id={grid}>
                            <Card className = "noteCard">
                                <div className = "noteTitle">
                                    {key.title}
                                </div>
                                <div className = "noteDescription">
                                    {key.description}
                                </div>
                                <Tools
                                        //toolsToNotesProps = {this.noteIdHandler(key._id)}
                                        noteID = {key._id}
                                    />
                            </Card>
                    </div> 
                  : (null))
            )
        })
        return (
            <div className ="notesGridView">
                {notearr}
            </div>
        )
    }
}

export default NotesComponent
