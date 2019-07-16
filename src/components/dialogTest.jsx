import React, { Component } from 'react'
import { Dialog } from '@material-ui/core';

export default class DialogTest extends Component {
    constructor(props){
        super(props);
        this.state={
            open:false
        }
    }
    handleOpen=()=>{
        this.setState({
            open:!this.state.open
        })
    }

    handleClose=()=>{
        this.setState({
            open:this.state.open
        })
    }
    render() {
        return (
            <div>
                <div onClick={this.handleOpen}>opendialog</div>
                <Dialog open={this.state.open}
                onClose={this.handleClose}>
                dhjudshcjhesfjc
                </Dialog>
                
            </div>
        )
    }
}
