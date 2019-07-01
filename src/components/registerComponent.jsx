/***************************************************************************************
 * @Purpose     : To Create for building logic of registration pasge
 * @file        : registerComponent.jsx
 * @author      : Anuj
 * @since       : 27/06/2019
 **************************************************************************************/
import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
// import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import '../App.css'
import { register } from '../services/userServices'
// import { Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
//import InputAdornment from "@material-ui/core/InputAdornment"
class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword : '',
            showPassword : false
        }
    }
    /**
     * @description : Getting the value from target field and storing the data into variable
     */
    firstNameHandler = event => {
        const firstName = event.target.value;
        this.setState({ firstName: firstName })
    }
    lastNameHandler = event => {
        const lastName = event.target.value;
        this.setState({ lastName: lastName })
    }
    emailHandler = event => {
        const email = event.target.value;
        this.setState({ email: email })
    }
    passwordHandler = event => {
        const password = event.target.value;
        this.setState({ password: password })
    }

    showPasswordHandler = event => {
        const showPassword = !this.state.showPassword
        this.setState({ showPassword : showPassword})
        console.log("show password",this.state.showPassword);
        
    }
    confirmPasswordHandler = event => {
        const confirmPassword = event.target.value
        this.setState({confirmPassword : confirmPassword}) 
    }

    signInInsteadHandler = event => {
        event.preventDefault();
        this.props.props.history.push('/login')
    }

    formSubmit = event => {
        event.preventDefault();
        if(this.state.password !== this.state.confirmPassword){
            console.log("password and confirm password must be same ");
            
        }
        else{    
            const data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }
            register(data)
                .then((response) => {
                    console.log("Registeration Successfully");
                    
                })
                .catch((err) => {
                    console.log("Registration unsuccessfull",err);
                    
                })
        }
     }

    render() {
        return (
            <div className = 'mainDiv'>
                <Card className='registerBox'>
                    <div>
                        <div>
                            <h3 className = 'headerReg'> F u n d o o </h3>
                        </div>
                        <div>
                            <h4 className = 'headerRegChild'> Create Your Fundoo Account </h4>
                        </div>
                        <form>
                            <div className='textFieldRegister'>
                                <div className = 'textField1-2'>
                                    <div className = 'textFieldWidth'>
                                        <TextField
                                            label="First Name"
                                            margin="dense"
                                            variant="outlined"
                                            value={this.state.firstName}
                                            onChange={this.firstNameHandler.bind(this)}
                                        />
                                    </div>
                                    <div className = 'textFieldWidth2'>
                                        <TextField
                                            label="Last Name"
                                            margin = "dense"
                                            variant="outlined"
                                            value={this.state.lastName}
                                            onChange={this.lastNameHandler.bind(this)}
                                        />
                                    </div>
                                </div>
                                <div className ="emailDiv" >
                                    <TextField
                                        className='textFieldWidth3'
                                        label="Email"
                                        variant="outlined"
                                        id="input"
                                        margin = 'dense'
                                        value={this.state.email}
                                        onChange={this.emailHandler.bind(this)}
                                    />
                                </div>
                                <span className = "spanEmail">
                                    You can use letters and numbers
                                </span>
                                <div className = 'textFieldPassword'>
                                    <div >
                                        <TextField
                                            className='textFieldWidth4'
                                            label="Password"
                                            variant="outlined"
                                            margin = 'dense'
                                            type = { this.state.showPassword ? 'text' : 'password' }
                                            value={this.state.password}
                                            onChange={this.passwordHandler.bind(this)}
                                        />
                                    </div> 
                                    <div className = 'paddingConfirm'>
                                        <TextField style = {{marginLeft: -22 +'%'}}
                                            className='textFieldWidth5'
                                            label="Confirm Password"
                                            variant="outlined"
                                            margin = 'dense'
                                            type = { this.state.showPassword ? 'text' : 'password' }
                                            value={this.state.confirmPassword}
                                            onChange={this.confirmPasswordHandler.bind(this)}
                                        />
                                    </div>
                                    <div>
                                        <IconButton
                                            className = "showPasswordButton"
                                            onClick = {this.showPasswordHandler.bind(this)}
                                            >
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </div>
                                </div>
                                <span className = "spanPassword" style ={{marginLeft: -35 + '%'}}>
                                    Use 8 or more characters with a mix of letters, numbers & symbols
                                </span>
                            </div>
                            <div className='registerButton'>
                                <CardActions>
                                    <Button size='large' onClick={this.signInInsteadHandler.bind(this)}> Sign in instead </Button>
                                </CardActions>
                                <CardActions className = "registerButton2">
                                    <Button size='large' onClick={this.formSubmit.bind(this)}>R E G I S T E R</Button>
                                </CardActions>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        )
    }
}

export default RegisterComponent
