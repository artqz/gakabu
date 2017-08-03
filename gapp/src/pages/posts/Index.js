import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import PostsNew from './PostsNew'
import './Index.css'

class Index extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="narrow-column">
            <div className="page-block">
              <ul className="posts-right-menu">
                <NavLink exact={true} to='/feed'><li className="posts-right-menu-item">Новые</li></NavLink>
                <NavLink to='/feed/hot'><li className="posts-right-menu-item">Горячие</li></NavLink>
                <NavLink to='/feed/best'><li className="posts-right-menu-item">Лучшие</li></NavLink>
              </ul>
            </div>
          </div>

          <div className="wide-column">
            <Switch>
              <Route exact path='/feed' component={PostsNew}/>
              <Route exact path='/feed/hot' component={PostsNew}/>
              <Route exact path='/feed/best' component={PostsNew}/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Index;
