import React, { Component } from 'react'

class ProfileLevel extends Component {
  render () {
    return (
      <div>
        <div className="page-block-header">
          Повысить уровень
        </div>
        <div className="page-block-body">
          <p>У Вас 0 уровень!</p>
          <p>Для перехода на следующий уровень вам необходимо 70 койнов.</p>
          <p><a href="/about/level">Узнать более подробно о системе уровней</a></p>
        </div>
      </div>
    )
  }
}
export default ProfileLevel;
