import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import ProfileMain from '../../components/ProfileMain'
import './Index.css'

class Index extends Component {

  render() {

    return (
      <div>
        <div className="container">
          <div className="narrow-column">
            <div className="page-block">
              <ul className="profile-right-menu">
               <li className="profile-right-menu-item profile-right-menu-item-selected"><Link to='/profile'>Основное</Link></li>
               <li className="profile-right-menu-item"><Link to='/profile/level'>Повысить уровень</Link></li>
               <li className="profile-right-menu-item">Статистика</li>
              </ul>
            </div>
          </div>

          <div className="wide-column">
            <div className="page-block">
              <div className="page-block-header">
                Основное
              </div>
              <div>
                  <Route exact path='cho_blya_nado?' component={ProfileMain}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index;
