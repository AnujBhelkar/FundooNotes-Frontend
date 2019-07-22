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

var initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword : '',
    showPassword : false,
    firstNameError:'',
    lastNameError : '',
    emailError : '',
    passwordError : '',
    allField : ''
}

class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }
    /**
     * @description : Getting the value from target field and storing the data into variable
     */

    changeHandler = event => {
        // event.preventDefault();
        const { name,value } = event.target;
        const emailRegularExpression = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/ 
        const passwordRegularExpression = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
       // this.setState({firstName : value})
        switch (name) {
            case 'firstName':
                initialState.firstNameError = 
                        value.length < 3 ? 
                        "First name should be greater than 2" : "";      
                        this.setState({firstNameError : initialState.firstNameError})      
                        this.setState({firstName : value})
            break;
            case 'lastName':
                initialState.lastNameError = 
                        value.length < 3 ? 
                        "Last name should be greater than 2" : "";      
                        this.setState({lastNameError : initialState.lastNameError})      
                        this.setState({lastName : value})
            break;
            case 'email':
                initialState.emailError = 
                        !emailRegularExpression.test(this.state.email) ? 
                        "Please Enter valid email ! " : "";      
                        this.setState({emailError : initialState.emailError})      
                        this.setState({email : value})
            break;
            case 'password':
                initialState.passwordError = 
                        !passwordRegularExpression.test(this.state.password) ? 
                        "Please Enter valid password ! " : "";      
                        this.setState({passwordError : initialState.passwordError})      
                        this.setState({password : value})
            break;
            // case "confirmPassword":
            //     initialState.passwordError = 
            //             (this.state.password === this.state.confirmPassword) ? 
            //             "Password and confirm must be same " : ""; 
            //             console.log(this.state.password,this.state.confirmPassword);
                             
            //             this.setState({passwordError : initialState.passwordError})      
            //             this.setState({confirmPassword : value})
            // break;
            case "confirmPassword":
                // initialState.passwordError = 
                //         (this.state.password === this.state.confirmPassword) ? 
                //         "Password and confirm must be same " : ""; 
                //         console.log(this.state.password,this.state.confirmPassword);
                             
                //         this.setState({passwordError : initialState.passwordError})      
                        this.setState({confirmPassword : value})
            break;
            default:
                break;
        }
    }




    // firstNameHandler = event => {
    //     const firstName = event.target.value;
    //     if(firstName.length < 3){
    //         this.setState({ firstNameError : "First name should be greater than 2" })
    //     }
    //     else{
    //         this.setState({ firstNameError : "" })
    //     }
    //         this.setState({ firstName: firstName })
    // }
    // lastNameHandler = event => {
    //     const lastName = event.target.value;
    //     this.setState({ lastName: lastName })
    // }
    // emailHandler = event => {
    //     const email = event.target.value;
    //     this.setState({ email: email })
    // }
    // passwordHandler = event => {
    //     const password = event.target.value;
    //     this.setState({ password: password })
    // }

    showPasswordHandler = event => {
        const showPassword = !this.state.showPassword
        this.setState({ showPassword : showPassword})
        console.log("show password",this.state.showPassword);
        
    }
    // confirmPasswordHandler = event => {
    //     const confirmPassword = event.target.value
    //     this.setState({confirmPassword : confirmPassword}) 
    // }

    signInInsteadHandler = event => {
        event.preventDefault();
        this.props.history.push('/login')
    }

    // validate = () => {
    //     // e.preventDefault();
    //   //  const { name,value } = e.target; 
    //   let firstNameError= '';
    //   let lastNameError = '';
    //   let emailError = '';
    //   let passwordError = '';
    //     const emailRegularExpression = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/ 
    //     //switch(name)
    //      if(this.state.firstName){
    //         if(this.state.firstName.length === 0 || this.state.firstName.length < 2 ){
    //             firstNameError =  ' Please Provide first name ! '
    //             this.setState({ firstNameError : firstNameError })
    //             return false;
    //          }
    //         // else{
    //         //     firstNameError = ""
    //         //     this.setState({ firstNameError : firstNameError })
    //         // }
    //     }         
    //     else if(this.state.lastName.length < 1 || this.state.lastName.length === 0 ){
    //         lastNameError = " Last Name length Greater than 2 ! "
    //         this.setState({ lastNameError : lastNameError })
    //         return false;
    //     }
    //     else if(this.state.email.length === 0){
    //         emailError = " Please provide email "
    //         this.setState({ emailError : emailError })
    //         return false;
    //     }
    //     else if(!emailRegularExpression.test(this.state.email)){
    //         emailError = " Please provide valid email ";
    //         this.setState({ emailError : emailError })
    //         return false;
    //     }
    //     else if(this.state.password.length === 0){
    //         passwordError = " Please provide password "
    //         this.setState({ passwordError : passwordError })
    //         return false;
    //     }
    //     else if(this.state.password !== this.state.confirmPassword){
    //         passwordError = " Password and confirm Password must be same "
    //         this.setState({ passwordError : passwordError })
    //         return false;
    //     }
    //      return true;

    // }


    formSubmit = event => {
        event.preventDefault();
        //const valid = this.validate()
            //if(valid){ 
            if((this.state.firstName && this.state.lastName && this.state.email
                    && this.state.password) === ""){
                        console.log("fill all details..");
                            const allField = "Please filled all details";
                            this.setState({allField : allField})
                    }
                           else if((this.state.firstNameError && this.state.lastNameError && this.state.emailError
                                && this.state.passwordError) === ""){
                                    console.log("please fill correct details",this.state.firstNameError , this.state.lastNameError , this.state.emailError
                                    , this.state.passwordError);
                                const allField = "";
                                this.setState({allField : allField})    
                                }
                                else{
                                    const allField = "Please filled correct details";
                                    this.setState({allField : allField})    
                                }
                    
                                
                //else{
                    if(this.state.allField === ""){
                    const data = {
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        email: this.state.email,
                        password: this.state.password
                    }
                    register(data)
                        .then((response) => {
                            console.log("Registeration Successfully");
                            this.setState(initialState)    
                        })
                        .catch((err) => {
                            console.log("Registration unsuccessfull",err);
                            
                        })
                }
                   // }
                
            
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
                                            id ='firstName'
                                            label="First Name"
                                            margin="dense"
                                            name = 'firstName'
                                            variant="outlined"
                                            value={this.state.firstName}
                                            onChange={this.changeHandler.bind(this)}
                                        />
                                        { this.state.firstNameError ? ( <div className = 'errorValidation'>
                                            {this.state.firstNameError}
                                        </div> ) : (null) }
                                    </div>
                                    <div className = 'textFieldWidth2'>
                                        <TextField
                                            id = 'lastName'
                                            label="Last Name"
                                            margin = "dense"
                                            name = 'lastName'
                                            variant="outlined"
                                            value={this.state.lastName}
                                            onChange={this.changeHandler.bind(this)}
                                        />
                                        { this.state.lastNameError ? ( <div className = 'errorValidation' >
                                            {this.state.lastNameError}
                                        </div> ) : ( null ) }
                                    </div>
                                </div>
                                <div className ="emailDiv" >
                                    <TextField
                                        className='textFieldWidth3'
                                        label="Email"
                                        variant="outlined"
                                        id="input"
                                        name = 'email'
                                        margin = 'dense'
                                        value={this.state.email}
                                        onChange={this.changeHandler.bind(this)}
                                    />
                                    { this.state.emailError ? ( <div className = 'errorValidation' >
                                        {this.state.emailError}
                                    </div> ) : (null) }
                                </div>
                                <span className = "spanEmail">
                                    You can use letters and numbers
                                </span>
                                <div className = 'textFieldPassword'>
                                    <div >
                                        <TextField
                                            id = 'password'
                                            className='textFieldWidth4'
                                            label="Password"
                                            variant="outlined"
                                            margin = 'dense'
                                            name = 'password'
                                            type = { this.state.showPassword ? 'text' : 'password' }
                                            value={this.state.password}
                                            onChange={this.changeHandler.bind(this)}

                                        />
                                    </div> 
                                    <div className = 'paddingConfirm'>
                                        <TextField style = {{marginLeft: -22 +'%'}}
                                            id = 'confirmPassword'
                                            className='textFieldWidth5'
                                            label="Confirm Password"
                                            variant="outlined"
                                            margin = 'dense'
                                            name = 'confirmPassword'
                                            type = { this.state.showPassword ? 'text' : 'password' }
                                            value={this.state.confirmPassword}
                                            onChange={this.changeHandler.bind(this)}

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
                                    { this.state.passwordError ? (<div className = 'errorValidation' > 
                                        {this.state.passwordError}
                                        </div> ) : (null) }
                                Use 8 or more characters with a mix of letters, numbers & symbols
                                </span>
                            </div>
                            <div>
                                 { this.state.allField? ( <div className = 'errorValidation' >
                                        {this.state.allField}
                            </div> ) : (null) }
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
