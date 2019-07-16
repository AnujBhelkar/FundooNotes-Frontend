import React, { Component } from 'react'
import '../App.css'
import { MoreVertOutlined } from "@material-ui/icons";
export class TrashOptions extends Component {
    render() {
        return (
            <div className = "moreOption">
                <MoreVertOutlined/>
            </div>
        )
    }
}

export default TrashOptions
