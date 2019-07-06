import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import Reminder from '@material-ui/icons/AddAlertOutlined'

import '../App.css'
import { InputBase, IconButton, Tooltip } from '@material-ui/core';

export class createNote extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open : false
        }
        this.clickNotes = this.clickNotes.bind(this)
    }
    clickNotes = event => {
        event.preventDefault();
        this.setState({open : !this.state.open})
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
                                />
                                <InputBase
                                    id = "inputBaseTitle"
                                    placeholder = "Take a note..."
                                    multiline
                                />
                                <div className = "notesComponent">
                                    <Tooltip title = "Reminder">
                                        <IconButton className= "reminderComponent">
                                            <Reminder/>
                                        </IconButton>
                                    </Tooltip>
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
