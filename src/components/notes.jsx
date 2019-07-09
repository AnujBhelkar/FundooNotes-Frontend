/****************************************************************************************************
 * @Purpose     : To Create for building logic of getting notes from backend
 * @file        : notes.jsx
 * @author      : Anuj
 * @since       : 08/07/2019
 ***************************************************************************************************/
import React, { Component } from 'react'
import Tools from '../components/tools'
import Card from '@material-ui/core/Card'
import { getNotes } from '../services/noteServices'
export class    NotesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: []

        }
    }
    componentDidMount() {
        getNotes()
            .then(response => {
                console.log("all Notes", response.data.result);
                this.setState({ notes: response.data.result })
            })
            .catch(err => {
                console.log("Error in getting Notes", err);

            })

    }
    render() {
        const grid = this.props.grid? 'allNotesListView' : null;
            // console.log(CardView);
            
        var notearr = this.state.notes.map((key) => {

            // let noteArray = otherArray(this.state.notes)
            console.log("all notes", key.id);
            return (
                <div id={grid}>
                    <div className = "notesCardSetting">
                        <Card className = "noteCard">
                            <div>
                                {key.title}
                            </div>
                            <div>
                                {key.description}
                            </div>
                                <Tools />
                        </Card>
                    </div>
                </div>
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
