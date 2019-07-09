import React, { Component } from 'react'
import PaletteIcon from '@material-ui/icons/Palette'
import { IconButton, Tooltip } from '@material-ui/core';
export class ColorComponent extends Component {
    render() {
        return (
            <div>
                <IconButton>
                    <Tooltip title = "Color">
                        <PaletteIcon/>
                    </Tooltip>
                </IconButton>   
            </div>
        )
    }
}

export default ColorComponent
