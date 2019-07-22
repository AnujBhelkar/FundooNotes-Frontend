import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import CardActions from '@material-ui/core/CardActions'
import { Button } from '@material-ui/core';
import {forgotPassword} from '../services/userServices'
export class ForgotPassword extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email : ''
        }
    }
    forgotPasswordHandler = event => {
        const email = event.target.value
        this.setState({ email : email })
    }
    forgotSubmit = event => {
        event.preventDefault();

        var data ={
            email : this.state.email
        }
        console.log(data);
        
        forgotPassword(data)
            .then((response) => {
                console.log("Link send to your Email ",response);
                
            })
            .catch((err) => {
                console.log("Error ",err);
                
            })
    } 
    
    render() {
        return (
            <div>
                <div className = "forgotBox">
                    <Card>
                        <div className = "forgotHeader"> 
                            <h3> Forgot Password ? </h3>
                        </div>
                        <div className = 'forgotTextField'>
                            <TextField
                                id ='email'
                                variant = 'outlined'
                                margin  = 'dense'
                                type    =  'email'
                                label   =  'Email'
                                value   = { this.state.email }
                                onChange = {this.forgotPasswordHandler.bind(this)} 
                            />
                        </div>
                        <div className = 'forgotSumbit' >
                            <CardActions>
                                <Button size = 'large' onClick = {this.forgotSubmit.bind(this)} > F o r g o t </Button>
                            </CardActions>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default ForgotPassword
