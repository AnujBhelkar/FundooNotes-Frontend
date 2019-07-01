/***************************************************************************************
 * @Purpose     : To create for registration page
 * @file        : registerPage.jsx
 * @author      : Anuj
 * @since       : 27/06/2019
 **************************************************************************************/
import React, { Component } from 'react'
import Register from '../components/registerComponent'
class RegisterPage extends Component {
    render() {
        return (
            <div>
                <Register props = {this.props} />
            </div>
        )
    }
}

export default RegisterPage
