import React, { Component } from 'react'


class Registration extends Component {
  state = {
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  registration () {

  }
  render() {
    return (
      <div className="modal-box">
        <h2 className="title">Регистрация</h2>
        <input className="field-input" placeholder="Имя пользователя" name="email" onChange={event => this.setState({nickname: event.target.value})} />
        <input className="field-input" placeholder="Электронная почта" name="email" onChange={event => this.setState({email: event.target.value})} />
        <input className="field-input" placeholder="Пароль" type="password" name="password" onChange={event => this.setState({password: event.target.value})} />
        <input className="field-input" placeholder="Повторите пароль" type="password" name="confirmPassword" onChange={event => this.setState({confirmPassword: event.target.value})} />
        <input className="field-input" type="submit" name="ok" onClick={this.registration.bind(this)} />
      </div>
    )
  }
}

export default Registration
