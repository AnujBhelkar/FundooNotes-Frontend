import React, { Component } from 'react'
import Dialog from "@material-ui/core/Dialog";
import Tools from '../components/tools'
import { Card, InputBase, IconButton, ClickAwayListener } from "@material-ui/core";
import '../App.css'
export class DialogBoxComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            archive: '',
            _id: '',
            color : ''
        }
        this.handleEventTitle = this.handleEventTitle.bind(this)
        this.handleEventDescription = this.handleEventDescription.bind(this)
    }
    /**
     * @description : Here handling events
     */
    handleEventTitle = (event) => {
        const title = event.target.value
        this.setState({
            title: title
        })
    }
    handleEventDescription = (event) => {
        const description = event.target.value
        this.setState({
            description: description
        })
    }
    getData(note) {
        console.log("Data in dialog Box===> ", note)
        this.setState({
            title: note.title,
            description: note.description,
            archive: note.archive,
            _id: note._id,
            color : note.color
        })
    }
    async handleToggle(e) {
        await this.props.editTitle(this.state.title, this.state._id)
        await this.props.editDescription(this.state.description, this.state._id)
        await this.props.closeDialogBox(e)
    }
    render() {
        return (
            <div>
                    <Dialog
                        open={this.props.parentOpen}
                        className="dialogBox"
                    >
                    <ClickAwayListener onClickAway={() => this.handleToggle()}>
    
                        <Card id="cardOnDialogBox" style = {{backgroundColor : this.state.color}} >
                            <InputBase
                                id="inputBaseTitle"
                                placeholder="Title"
                                name="Title"
                                multiline
                                value={this.state.title}
                                onChange={this.handleEventTitle}
                            />
                            <InputBase
                                id="inputBaseTitle"
                                placeholder="Take a note..."
                                multiline
                                name="Description"
                                value={this.state.description}
                                onChange={this.handleEventDescription}
                            />
                            <div className="Component">
                                <Tools />
                                <div>
                                    <IconButton className="closeNoteButton" onClick={() => this.handleToggle()}>
                                        close
                                    </IconButton>
                                </div>
                            </div>
                        </Card>
                        </ClickAwayListener>
                    </Dialog>

                
            </div>
        )
    }
}

export default DialogBoxComponent
