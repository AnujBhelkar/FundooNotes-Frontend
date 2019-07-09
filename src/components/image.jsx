import React, { Component } from 'react'
import ImageIcon from '@material-ui/icons/ImageOutlined'
import { IconButton, Tooltip } from '@material-ui/core';
export class ImageComponent extends Component {
    render() {
        return (
            <div>
                <IconButton>
                    <Tooltip title = "Image">
                        <ImageIcon />
                    </Tooltip>
                </IconButton>
            </div>
        )
    }
} 

export default ImageComponent

