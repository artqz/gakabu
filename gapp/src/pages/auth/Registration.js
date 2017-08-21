import React, { Component } from 'react'
import config from '../../config'

class Registration extends Component {
  state = {
    username: {
      value: '',
      class: ''
    },
    email:  {
      value: '',
      class: ''
    },
    password: '',
    confirmPassword: '',
  }
  checkUsername (value) {
    var urlParam

    if (value === 'username') { urlParam = '/users/check?username=' + this.state.username.value }
    else if (value === 'email') { urlParam = '/users/check?email=' + this.state.email.value }

    fetch(config.apiUrl + urlParam, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((result) => {
      console.log(result);
      if (! result.result) {
        if (value === 'username') {
          this.setState({ username: { class: ' field-correct' } })
        }
        else if (value === 'email') {
          this.setState({ email: { class: ' field-correct' } })
        }
      }
      else {
        if (value === 'username') {
          this.setState({ username: { class: ' field-error' } })
        }
        else if (value === 'email') {
          this.setState({ email: { class: ' field-error' } })
        }
      }
    })
  }
  handleClick () {
    console.log(this.state);
  }
  render() {
    return (
      <div className="modal-box">
        <h2 className="title">Регистрация</h2>
        <ul className="form-fieldset">
          <li className={'form-field' + ((this.state.username.class) ? this.state.username.class : '')}>
            <input className="field-input" placeholder="Имя пользователя" name="username" onChange={event => this.setState({username: {value: event.target.value}})} onBlur={this.checkUsername.bind(this, 'username')} />
          </li>
        </ul>

        <input className="field-input" placeholder="Электронная почта" name="email" onChange={event => this.setState({email: {value: event.target.value}})} onBlur={this.checkUsername.bind(this, 'email')} />
        <input className="field-input" placeholder="Пароль" type="password" name="password" onChange={event => this.setState({password: event.target.value})} />
        <input className="field-input" placeholder="Повторите пароль" type="password" name="confirmPassword" onChange={event => this.setState({confirmPassword: event.target.value})} />
        <input className="btn btn-green" type="submit" name="ok" onClick={this.handleClick.bind(this)} />
      </div>
    )
  }
}

export default Registration
