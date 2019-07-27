import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';
import { Divider } from '@material-ui/core';
export class NoteAnalysis extends Component {
    constructor(props) {
        super(props)

        this.state = {
            noteLabels: ['Reminder', 'Reminder And Archive', 'Trash', 'Archive'],
            noteData: {},
            label: ['Note Label', 'Reminder Label', 'Reminder And Archive Label', 'Archive Label', 'Trash Label'],
            labelData : {}
        }
        this.noteAnalysis = this.noteAnalysis.bind(this)
        this.labelAnalysis = this.labelAnalysis.bind(this)
    }

    componentDidMount() {
        this.noteAnalysis();
        this.labelAnalysis();
    }
    noteAnalysis() {
        var archive = 0;
        var trash = 0;
        var reminder = 0;
        var archiveReminder = 0;
        console.log("this.props.allNotes", this.props.allNotes);

        this.props.allNotes.map((key) => {
            console.log("key is -->", key);
            if (key.trash === true) {
                trash++
            }
            else if (key.reminder.length > 0 && key.archive === true) {
                archiveReminder++
            }
            else if (key.reminder.length > 0) {
                reminder++
            }
            else {
                archive++
            }
        })
        // console.log("analysis",analysis);

        this.setState({
            noteData: {
                labels: this.state.noteLabels,
                datasets: [{
                    label: "Notes Ratio",
                    data: [reminder, archiveReminder, archive, trash],
                    backgroundColor: ['khaki', 'midnight green', 'rosybrown', 'cadetblue']
                }]
            }

        })
    }
    labelAnalysis() {
        var archiveLabel = 0;
        var trashLabel = 0;
        var reminderLabel = 0;
        var archiveReminderLabel = 0;
        var notelabel = 0;
        console.log("this.props.allNotes", this.props.allNotes);

        this.props.allNotes.map((key) => {
            if (key.label.length > 0) {
                
                if (key.trash === true && key.label.length > 0) {
                    trashLabel = trashLabel + key.label.length
                    console.log("trashLAbel -->", trashLabel);
                }
                else if (key.reminder.length > 0 && key.archive === true && key.label.length > 0) {
                    archiveReminderLabel = archiveReminderLabel + key.label.length
                    console.log("reminder and archive LAbel -->", archiveReminderLabel);
                }
                else if (key.reminder.length > 0 && key.label.length > 0) {
                    reminderLabel = reminderLabel + key.label.length
                    console.log("reminder LAbel -->", reminderLabel);
                }
                else if (key.archive === true && key.label.length > 0){
                    archiveLabel = archiveLabel + key.label.length
                    console.log("archive LAbel -->", trashLabel);
                }
                else {
                    notelabel = notelabel + key.label.length
                    // console.log("note LAbel -->", notelabel);     
                }
            }

        })

        // console.log("analysis",analysis);

        this.setState({
            labelData: {
                labels: this.state.label,
                datasets: [{
                    label: "Notes Ratio",
                    data: [notelabel,reminderLabel, archiveReminderLabel, archiveLabel, trashLabel],
                    backgroundColor: ['khaki', 'midnight green', 'rosybrown', 'cadetblue']
                }]
            }

        })
    }

    render() {

        console.log("data is -->", this.state.Data);
        return (
            <div>
                <div style={{ position: 'relative', top: '6rem' }}>
                    <Pie
                        data={this.state.noteData}
                        height="100%"
                    />
                    <span className="pieChart">
                        Analysis of notes
                    </span>
                    <Divider style={{ position: 'relative',bottom: '-1rem'}}/>
                </div>
                    
                <div style={{ position: 'relative', top: '8rem' }}>
                    <Pie
                        data={this.state.labelData}
                        height="100%"
                    />
                    <span className="pieChart">
                        Analysis of Labels
                    </span>
                </div>
                <Divider style={{ position: 'relative',bottom: "-10rem"}}/>
            </div>
        )
    }
}

export default NoteAnalysis
