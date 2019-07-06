import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip'
// import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import CloseSearch from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search'
import GridOn from '@material-ui/icons/ViewAgendaOutlined'
import GridOff from '@material-ui/icons/BorderAllRounded';
import Profile from '@material-ui/icons/AccountCircle'
import Drawer from './drawerMenu';
import InputBase from '@material-ui/core/InputBase'
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
            searchInput : '',
            grid : false,
        }
        this.toggleHandle = this.toggleHandle.bind(this)
        this.searchInputHandler = this.searchInputHandler.bind(this)
        this.refreshHandler = this.refreshHandler.bind(this)
        this.gridHandler = this.gridHandler.bind(this)
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
    searchInputHandler = event => {
        const searchInput = event.target.value;
        this.setState({searchInput : searchInput})
    }

    refreshHandler = event => {
        event.preventDefault();
        window.location.reload();
    }
    gridHandler = event =>{
        event.preventDefault();
        this.setState({ grid : !this.state.grid })
    }

    render() {
        return (
            <MuiThemeProvider theme ={theme}>
                <div className = "toolbar">
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
                                            <IconButton>
                                                <Search/>
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                    <div className = "searchInput">
                                        <InputBase 
                                            placeholder = 'Search Notes'
                                            value = {this.state.searchInput}
                                            onChange = {this.searchInputHandler}
                                            id = "searchInputBase"
                                        />
                                    </div>
                                    <div>
                                        <IconButton>
                                            <Tooltip title = "Close Search" >
                                                <CloseSearch/>
                                            </Tooltip>
                                        </IconButton>
                                    </div>
                                </div>
                                <div className = "refreshGridProfile">
                                    <IconButton>
                                        <Tooltip title = "Refresh">
                                            <RefreshIcon onClick = {this.refreshHandler} />        
                                        </Tooltip>
                                    </IconButton>
                                    <IconButton
                                        onClick = {this.gridHandler}
                                    >
                                        <Tooltip title = {this.state.grid ? " List View " : "Grid View"}>
                                            {this.state.grid ? <GridOn/> : <GridOff/>}        
                                        </Tooltip>
                                    </IconButton>
                                    <IconButton>
                                        <Tooltip title = "Fundoo Account">
                                            <Profile/>        
                                        </Tooltip>
                                    </IconButton>
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
