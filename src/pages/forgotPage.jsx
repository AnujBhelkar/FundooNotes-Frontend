import React, { Component } from 'react'
import Forget from '../components/forgotPassword'

export class ForgotPage extends Component {
    render() {
        return (
            <div>
                <Forget props = {this.props} />
            </div>
        )
    }
}

export default ForgotPage
