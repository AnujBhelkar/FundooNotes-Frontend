/***************************************************************************************
 * @Purpose     : To Create for making Drawer Menu
 * @file        : drawerMenu.jsx
 * @author      : Anuj
 * @since       : 08/07/2019
 **************************************************************************************/
import React, { Component } from 'react'
import {MenuItem,Drawer,Divider} from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
//import { height } from '@material-ui/system';
//import {getNotes} from '../services/noteServices'
import {Archive, DeleteOutlineRounded} from "@material-ui/icons"
const theme = createMuiTheme({
    overrides : {
        MuiDrawer : {
            paper : {
                72 :{
            top: "7px",
            flex: "1 0 auto",
            width: 225,
            height: 100,
            zindex: 1200,
            display: "flex",
            outline: "none",
            "z-index": 1200,
            "overflow-y": "auto",
          
                
                
             
                }
            }
        }
    }
})
// import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton'
// import List from '@material-ui/core/List'
// import {ListItemIcon} from '@material-ui/icons'
class DrawerMenu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            archiveOpen : false,
            trashOpen  : false,
            reminderOpen : false
        }
        this.showArchiver = this.showArchiver.bind(this)
        this.handleReminder = this.handleReminder.bind(this)
        this.handleNotes = this.handleNotes.bind(this)
        this.showTrash = this.showTrash.bind(this)
    }
    async handleNotes(){
        await this.setState({
            archiveOpen : false,
            trashOpen :false,
            reminderOpen : false
        })
        this.props.archiveOpen(this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen)
        console.log("handle Notes ==>",this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen);
        
    }
    async showArchiver(){
        await this.setState({
            archiveOpen : true,
            trashOpen :false,
            reminderOpen : false
        })
        this.props.archiveOpen(this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen)    
        console.log("Archive Notes ==>",this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen);    
    }
    async showTrash(){
        await this.setState({
            archiveOpen : false,
            trashOpen :true,
            reminderOpen : false
        })
        this.props.archiveOpen(this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen)   
        console.log("Trash Notes ==>",this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen);     
    }
    async handleReminder(){
        await this.setState({
            archiveOpen : false,
            trashOpen :false,
            reminderOpen : true
        })
        this.props.archiveOpen(this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen)        
        console.log("Reminder Notes ==>",this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen);
    }
   
    render() {
        return (
            <MuiThemeProvider theme = {theme}>
                <div>                    
                        <Drawer
                            variant = 'persistent'
                            open = {this.props.appBarProps}
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
                            <Divider/>
                            <MenuItem>
                                LABELS
                            </MenuItem>
                            <Divider/>
                            <MenuItem onClick = {this.showArchiver}>
                                <Archive style = {{marginRight: "50px"}}/>
                                Archive
                            </MenuItem>
                            <MenuItem onClick = {this.showTrash}>
                                <DeleteOutlineRounded style = {{marginRight: "50px"}}/>
                                Trash
                            </MenuItem>
                            <Divider/>
                        </Drawer>
                        
                    </div>
                </MuiThemeProvider>
        )
    }
}

export default DrawerMenu; 

// .