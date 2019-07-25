/***************************************************************************************
 * @Purpose     : To Create for building logic of Login page
 * @file        : loginComponent.jsx
 * @author      : Anuj
 * @since       : 29/06/2019
 **************************************************************************************/

import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import '../App.css'
import { TextField, Button } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions'
import { login } from '../services/userServices'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

 export class LoginComponent extends Component {
     constructor(props) {
         super(props)

         this.state = {
            email    : '',
            password : '',   
            showPassword : ''  
         } 
     }
     
     emailHandler = event => {
         const email = event.target.value;
         this.setState({email : email})
     } 
      passwordHandler = event => {
          const password = event.target.value
          this.setState({password : password})
      }
      handleClickShowPassword = event => {
          const showPassword = !this.state.showPassword;
          this.setState({showPassword : showPassword})
      } 
      createAccButtonHandler = event => {
          event.preventDefault();
          this.props.history.push('/register')
      }
      forgotButtonHandler = () => {
          this.props.history.push('/forgotPassword')
      }

      loginButtonHandler = event => {
          var data = {
              email: this.state.email,
              password : this.state.password
          }
          console.log(data);
          
          login(data)
            .then((response) => {
                console.log("Login Successfully !!! ",response)
                localStorage.setItem('id',response.data.token)
                localStorage.setItem('email',response.data.result.email)
                localStorage.setItem('userName',response.data.result.firstName)
                localStorage.setItem('profilePic',response.data.result.imageUrl)
                console.log(this.props);
                this.props.history.push('/dashboard')
            })
            .catch((err) => {
                    console.log( "Login Unsuccessfull !! ",err);
            })
      }
      
     render() {
         return (
             <div>
                 <Card className = "loginBox">
                    <div className = "loginHeader">
                        <h3> F U N D O O </h3>
                    </div>
                    <div className = 'childHeader'>
                        <h2> Sign In </h2>
                    </div>
                    <div className ="childNextHeader" >
                    <h4 > Use Your Fundoo Account </h4>
                    </div>
                    <form>
                        <div className = 'textFieldLogin'>
                            <div>
                                <TextField
                                    id     = 'email'
                                    label  = 'Email'
                                    type   = 'email'
                                    name   = 'email'
                                    margin = 'dense'
                                    variant= 'outlined'
                                    value  = {this.state.email}
                                    onChange = {this.emailHandler.bind(this)}                            
                                />
                            </div>
                            <div className = 'textLoginPass'>
                            <TextField
                                id = 'password'
                                variant="outlined"
                                type={this.state.showPassword ? 'text' : 'password'}
                                label="Password"
                                margin = 'dense'
                                value={this.state.password}
                                onChange={this.passwordHandler.bind(this)}
                                
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
                        </div>
                        <div className = 'loginButtons'>
                            <CardActions>
                                <Button size ='large' onClick = {this.createAccButtonHandler.bind(this)} > create account </Button>
                            </CardActions>
                            <div className = "createAccountButton">
                                <CardActions>
                                    <Button size ='large' onClick = {this.loginButtonHandler.bind(this)} > L O G I N </Button>
                                </CardActions>
                            </div>
                        </div>
                            <CardActions>
                                <Button size ='large' onClick = {this.forgotButtonHandler.bind(this)} style ={{"marginTop" : "-7%",
                                    "margin-left": "2%"}} > Forgot Password ? </Button>
                            </CardActions>
                    </form>
                 </Card>
             </div>
         )
     }
 }
 
 export default LoginComponent
 