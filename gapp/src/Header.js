import React  from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => (
  <header>
    <div className="container">
      <nav>
        <ul>
          <li><Link to='/'>Свежее</Link></li>
          <li><Link to='/'>Горячее</Link></li>
          <li><Link to='/'>Лучшее</Link></li>
          <li><Link to='/about'>О проекте</Link></li>
          <li><Link to='/add'>Добавить пост</Link></li>
          <li><Link to='/profile'>Профиль</Link></li>
        </ul>
      </nav>
      <div className="top-profile">
        <span className="top-profile-name">djoctuk</span>
        <img className="top-profile-image" src="https://pp.userapi.com/c620820/v620820473/1ad26/NegGFkOtPGU.jpg" alt="Виктор" />
      </div>
    </div>
  </header>
)

export default Header
