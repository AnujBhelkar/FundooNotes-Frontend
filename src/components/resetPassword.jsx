import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import CardActions from '@material-ui/core/CardActions'
import { Button } from '@material-ui/core'
import {resetPassword} from '../services/userServices'
 
class ResetPassword extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             password : ''
        }
    }
    resetPasswordHandler = event => {
        const password = event.target.value
        this.setState({ password : password })
    }
    resetSubmit = event => {
        event.preventDefault();

        var cur_url = window.location.pathname;
        var token = cur_url.substr(19)
        console.log("token", token,);
        
        resetPassword(this.state.password,token)
            .then((response) => {
                console.log("Password Reset Successfully !!",response);
                
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
                            <h3> Reset Password ? </h3>
                        </div>
                        <div className = 'forgotTextField'>
                            <TextField
                                variant = 'outlined'
                                margin  = 'dense'
                                label   =  'Password'
                                value   = { this.state.password }
                                onChange = {this.resetPasswordHandler.bind(this)} 
                            />
                        </div>
                        <div className = 'forgotSumbit' >
                            <CardActions>
                                <Button size = 'large' onClick = {this.resetSubmit.bind(this)} > R E S E T </Button>
                            </CardActions>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default ResetPassword
