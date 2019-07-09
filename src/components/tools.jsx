import React, { Component } from 'react'
import  Reminder from "../components/reminder";
import Collab from '../components/collaborator';
import Color from '../components/color'
import Image from '../components/image'
import Archive from '../components/archive'
import More from "../components/more";
import '../App.css'
class ToolsComponent extends Component {
    render() {
        return (
            <div className = "toolComponent">
                <Reminder/>
                <Collab/>
                <Color/>
                <Image/>
                <Archive/>
                <More/>
            </div>
        )
    }
}

export default ToolsComponent
