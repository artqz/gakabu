import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import ProfileMain from '../../components/ProfileMain'
import ProfileLevel from '../../components/ProfileLevel'
import ProfileStats from '../../components/ProfileStats'
import './Index.css'

class Index extends Component {

  render() {

    return (
      <div>
        <div className="container">
          <div className="narrow-column">
            <div className="page-block">
              <ul className="profile-right-menu">
                <NavLink exact={true} to='/profile'><li className="profile-right-menu-item">Основное</li></NavLink>
                <NavLink to='/profile/level'><li className="profile-right-menu-item">Повысить уровень</li></NavLink>
                <NavLink to='/profile/stats'><li className="profile-right-menu-item">Статистика</li></NavLink>
              </ul>
            </div>
          </div>

          <div className="wide-column">
            <div className="page-block">              
              <div>
                <Switch>
                  <Route exact path='/profile' component={ProfileMain}/>
                  <Route exact path='/profile/level' component={ProfileLevel}/>
                  <Route exact path='/profile/stats' component={ProfileStats}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index;
