import React from 'react'
import Register from './pages/registerPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import ForgotPassword from './pages/forgotPage'
import Login from './pages/loginPage'
import Reset from './pages/resetPage'
import Dashboard from './pages/dashboardPage'
import Chart from './pages/charts'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('id') ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' component={Login}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register} ></Route>
          <Route path='/forgotPassword' component={ForgotPassword} ></Route>
          <Route path='/resetPassword/:token' component={Reset} ></Route>
          <PrivateRoute path='/dashboard' component={Dashboard}></PrivateRoute>
          {/** <Route path='/chart' component={Chart}></Route>*/}
        </Router>
      </div>
    )
  }
}

export default App
