/****************************************************************************************
 * @description :- It create for handling Color Box componenet
 * @file        :- colorBox.jsx
 * @author      :- Anuj
 * @since       :- 15/07/2019 
 ****************************************************************************************/
import React, { Component } from 'react'
import PaletteIcon from '@material-ui/icons/Palette'
// import { PopupState, bindToggle, bindPopper } from 'material-ui-popup-state';
import { IconButton, Tooltip, ClickAwayListener, Card, Popper, Paper, Fade } from '@material-ui/core';
import { relative } from 'path';
// import transitions from '@material-ui/core/styles/transitions';
// import { thisTypeAnnotation } from '@babel/types';
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
            open: false,
            anchorEl: null,
            placement: null,
            colorCode: ""


        }
        // this.handleColor = this.handleColor.bind(this)
        this.closePopper = this.closePopper.bind(this)
        // this.changeColor = this.closePopper.bind(this)
    }
    colorPaletteHandler = event => {
        this.setState({ open: !this.state.open })
        this.props.toolsPropsToCollorPallete(event.target.value)
        console.log("color value", event.target.value);

        // this.props.colorPaletteProps(this.state.open)
    }
    closePopper() {
        try {
            this.setState({ open: false })
        }
        catch (err) {
            console.log("Error in close popper");

        }
    }
    handleColor = placement => event => {
        try {
            const { currentTarget } = event;
            this.setState(state => ({
                anchorEl: currentTarget,
                open: !state.open || state.placement !== placement,
                placement
            }))
        }
        catch (err) {
            // console.log("color Change ",this.state.open);
            console.log("Error in handle color");

        }
    }
    changeColor(value) {
        // this.setState({ colorCode : value})
        // console.log("color value ==>",value);
        console.log("colorhjgkj ===> ", value, this.props.noteID);
        this.props.changeColor(value, this.props.noteID)
    }

    render() {

        const changeColor = colorCodesAndNames.map((colorKey) =>

            <Tooltip title={colorKey.name} style = {{zIndex: "9999"}}>
                <IconButton style={{ backgroundColor: colorKey.colorCode, "margin": "2px" }}
                    // value={colorKey.colorCode}
                    onClick={() => this.changeColor(colorKey.colorCode)}
             >
                    {/** console.log("color===>",colorKey.colorCode)*/}
                </IconButton>
            </Tooltip>
        );
        const { open, placement, anchorEl } = this.state
        return (
            <div >
                <Popper open={open} placement={placement} anchorEl={anchorEl} transition style = {{position : "relative",zIndex : "9999"}}>
                    <div style = {{}}>
                        <Paper style={{ width: "35%",zIndex : "2px"}} onMouseLeave={this.closePopper} >
                            {changeColor}
                        </Paper>
                    </div>
                </Popper>
                <IconButton>
                    <Tooltip title="Color">
                        <PaletteIcon
                            onMouseOver={this.handleColor("top-start")}
                        />
                    </Tooltip>
                </IconButton>
            </div>
        )
    }
}

export default ColorComponent


