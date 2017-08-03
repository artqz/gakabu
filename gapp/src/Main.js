import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Posts from './pages/posts/Index'
import Create from './pages/posts/Create'
import Profile from './pages/profile/Index'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/add' component={Create}/>
      <Route path='/feed' component={Posts}/>
      <Route path='/profile' component={Profile}/>
    </Switch>
  </main>
)

export default Main;
