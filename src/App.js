import React, { Component } from 'react'
import Register from './pages/registerPage'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ForgotPassword from './components/forgotPassword'
import Login from './pages/loginPage'
import Reset from './pages/resetPage'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path = '/' component = {Login}></Route>
          <Route path = '/login' component = {Login}></Route>
          <Route path = '/register' component = {Register} ></Route>
          <Route path = '/forgotPassword' component = {ForgotPassword} ></Route>
          <Route path = '/resetPassword/:token' component = {Reset} ></Route>
        </Router>
      </div>
    )
  }
}

export default App
