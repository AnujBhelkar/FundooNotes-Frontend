import React, { Component } from 'react'
import PaletteIcon from '@material-ui/icons/Palette'
import {PopupState,  bindToggle, bindPopper } from 'material-ui-popup-state';
import { IconButton, Tooltip, ClickAwayListener, Card, Popper, Paper } from '@material-ui/core';
import transitions from '@material-ui/core/styles/transitions';
const colorCodesAndNames = [{ name: "default", colorCode: "rgb(255, 255, 255)" },
{ name: "Red", colorCode: "rgb(242,139,130)" },
{ name: "Orange", colorCode: "rgb(247,188,2)" },
{ name: "Yellow", colorCode: "rgb(252,244,117)" },
{ name: "Green", colorCode: "rgb(204,255,143)" },
{ name: "Teal", colorCode: "rgb(167,255,235)" },
{ name: "Blue", colorCode: "rgb(203,240,248)" },
{ name: "Dark Blue", colorCode: "rgb(174,203,250)" },
{ name: "Purple", colorCode: "rgb(215,174,251)" },
{ name: "Pink", colorCode: "rgb(251,207,232)" },
{ name: "Brown", colorCode: "rgb(230,201,168)" },
{ name: "Gray", colorCode: "rgb(232,234,237)" }
]
class ColorComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false


        }
        this.handleColor = this.handleColor.bind(this)
    }
    colorPaletteHandler = event => {
        this.setState({ open: !this.state.open })
        this.props.toolsPropsToCollorPallete(event.target.value)
        console.log("color value", event.target.value);

        // this.props.colorPaletteProps(this.state.open)
    }
    closePopper() {
        try {
            this.setState({ open: true })
        }
        catch (err) {
            console.log("Error in close popper");

        }
    }
    handleColor(event) {
        try {
            // event.prventDefault();
            const open = !this.state.open
            console.log("color Change", open);
            this.setState({ open: open })
            // this.props.toolsPropsToCollorPallete(event.target.value)
        }
        catch (err) {
            // console.log("color Change ",this.state.open);
            console.log("Error in handle color");

        }
    }

    render() {
        const changeColor = colorCodesAndNames.map((colorKey) =>


            <Tooltip title={colorKey.name} style={{ zIndex: "999" }}>
                <IconButton style={{ backgroundColor: colorKey.colorCode, margin: "2px", zIndex: "999" }}
                    value={colorKey.colorCode}
                    onClick={this.colorPaletteHandler}
                >
                </IconButton>
            </Tooltip>

        );


        return (
            <div>
                <IconButton>
                    <Tooltip title="Color">
                        <PaletteIcon
                            onClick={this.handleColor}
                        />
                    </Tooltip>
                </IconButton>
            </div>  
        )
    }
}

export default ColorComponent



// <PopupState>
// {popupState =>(
//     <div>                       
//         <div {...this.bindToggle(popupState)} >
//             <IconButton>
//                 <Tooltip title="Color">
//                     <PaletteIcon
//                         onClick={this.handleColor}
//                     />
//                 </Tooltip>
//             </IconButton>
//         </div>
//         <Popper {...this.bindPopper(popupState)} transition >    
//             <Paper
//                 onMouseLeave = {this.closePopper}
//                 >
//                     {changeColor}
//             </Paper>
//         </Popper>
//     </div>

//     )}  

// </PopupState>  