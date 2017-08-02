import React  from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
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
  </header>
)

export default Header
