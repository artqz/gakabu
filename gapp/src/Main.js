import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Posts from './pages/posts/Index'
import Create from './pages/posts/Create'
import Profile from './pages/profile/Index'
import Login from './pages/auth/Login'
import Registration from './pages/auth/Registration'

const checkAuth = () => {
  const token = localStorage.getItem('token')
  const expiration = localStorage.getItem('expiration')

  if (!token || !expiration) {
    return false
  }

  if (Date.now() > parseInt(expiration + Date.now(), 10)) {
    localStorage.removeItem('token')
    localStorage.removeItem('expiration')

    return false
  }
  else {
    return true
  }
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ): (
      <Redirect to={{ pathname: '/login'}} />
    )
  )} />
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/add' component={Create}/>
      <Route path='/feed' component={Posts}/>
      <AuthRoute path='/profile' component={Profile}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/registration' component={Registration}/>
    </Switch>
  </main>
)

export default Main
