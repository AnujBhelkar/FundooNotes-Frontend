import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import CardActions from '@material-ui/core/CardActions'
import { Button } from '@material-ui/core'
import {resetPassword} from '../services/userServices'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class ResetPassword extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             password : '',
             showPassword : '',
             confirmPassword : ''
        }
    }
    resetPasswordHandler = event => {
        const password = event.target.value
        this.setState({ password : password })
    }
    resetConfirmPasswordHandler = event => {
        const confirmPassword = event.target.value
        this.setState({ confirmPassword : confirmPassword })

    }
    handleClickShowPassword = event => {
        const showPassword = ! this.state.showPassword;
        this.setState({showPassword : showPassword})
    }
    resetSubmit = event => {
        event.preventDefault();

        var cur_url = window.location.pathname;
        var token = cur_url.substr(15)
        console.log("token", token,);
        const resetData = {
            "password" : this.state.password,
            "confirmPassword" : this.state.confirmPassword
        }
        resetPassword(resetData,token)
            .then((response) => {
                console.log("Password Reset Successfully !!",response);
                this.props.history.push('/login')
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
                                id = "password"
                                name = "password"
                                variant="outlined"
                                type={this.state.showPassword ? 'text' : 'password'}
                                label="Password"
                                margin = 'dense'
                                value={this.state.password}
                                onChange={this.resetPasswordHandler.bind(this)}
                                InputProps={{
                                    endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    aria-label="Toggle password visibility"
                                                    onClick={this.handleClickShowPassword.bind(this)}
                                                >
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                    ),
                                }}
                          />
                          <TextField
                                id = "confirmPassword"
                                name = "confirmPassword"
                                variant="outlined"
                                type={this.state.showPassword ? 'text' : 'password'}
                                label="Password"
                                margin = 'dense'
                                value={this.state.confirmPassword}
                                onChange={this.resetConfirmPasswordHandler.bind(this)}
                                InputProps={{
                                    endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    aria-label="Toggle password visibility"
                                                    onClick={this.handleClickShowPassword.bind(this)}
                                                >
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                    ),
                                }}
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
