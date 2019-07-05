import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import MenuItem from '@material-ui/core/MenuItem'
// import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton'
// import Toolbar from '@material-ui/core/Toolbar'
// import List from '@material-ui/core/List'
// import {ListItemIcon} from '@material-ui/icons'
class DrawerMenu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        // this.handleNotes = this.handleNotes.bind(this)
    }
   
    render() {
        return (
            <div>
                <div>
                    <Drawer
                        variant = 'persistent'
                        open = {this.props.appBarProps}
                        overflow = 'auto'
                        width ={300}
                    >
                        <MenuItem id="noteMenu" onClick={() => this.handleNotes()}>
                            <img src={require('../assests/images/note.svg')} alt="note icon"
                                style={{ marginRight: "50px" }} />
                            Notes
                        </MenuItem>
                        <MenuItem id='reminderMenu' onClick = { () => this.handleReminder()}>
                            <img src ={require('../assests/images/reminder.svg')} alt ='reminder icon'
                                style = {{marginRight: "50px"}} />
                            Reminder
                        </MenuItem>
                    </Drawer>
                </div>
            </div>
        )
    }
}

export default DrawerMenu; 

