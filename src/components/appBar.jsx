import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip'
// import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search'
import Drawer from './drawerMenu';
import { createMuiTheme , MuiThemeProvider } from '@material-ui/core'

import '../App.css'

const theme = createMuiTheme({
    overrides : {
        MuiDrawer:{
            paper:{
        top: 70,
        height: 100,
        width : 225,
        display: "flex",
        outline: "none",
        zindex: 1200,
        position: "fixed",
        overflowy: "auto",
        flexdirection: "column",
        }
    }
}
})

export class appBar extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            open : '',             
        }
        this.toggleHandle = this.toggleHandle.bind(this)
    }
    toggleHandle = () => {
        try{
            this.props.slideCards();
            this.setState({ open : !this.state.open })
        }
        catch(err){
            console.log("Error in handle toggle bar");
            
        }
    }

    render() {
        return (
            <MuiThemeProvider theme ={theme}>
                <div>
                    <AppBar position="static">
                        <Toolbar style={{ backgroundColor: 'white' }} >
                            <Tooltip title = "Menu" >
                                <IconButton  color="default" aria-label="Open drawer">
                                    <MenuIcon onClick = {this.toggleHandle}  />
                                </IconButton>
                            </Tooltip>
                            <div className="appBarClass">
                                <Drawer
                                    className = "drawerMenu"
                                    appBarProps={this.state.open}
                                />
                                
                                <div className = "fundooImageText">
                                    <div>
                                        <img src={ require('../assests/images/keep_48dp.png')} alt = ""/>
                                    </div>
                                    <div className = "fundooName">
                                        F u n d o o
                                    </div>
                                </div>
                                <div className="search">
                                    <div className = "searchIcon">
                                        <Tooltip title = "Search">
                                            <Search/>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>                        
                        </Toolbar>
                    </AppBar>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default appBar
