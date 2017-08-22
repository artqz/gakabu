import React, { Component } from 'react'
import config from '../../config'

import TextInput from '../../components/auth/TextInput'

class Registration extends Component {
  state = {
    username: {
      value: '',
      class: '',
      error: ''
    },
    email:  {
      value: '',
      class: '',
      error: ''
    },
    password: '',
    confirmPassword: '',
  }
  changeValue (value) {
    this.setState({
      username: {
        ...this.state.username,
        value: value
      }
    })
  }

  validateEmail (value) {
    // Проверка email на валидность
    var validateEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    if (! value.match(validateEmail)) {
      return { class: 'field-error', error: 'Некорректная электронная почта' }
    }
    
    return {error: '', class: ''}
  }
  checkUsername (value) {
    var urlParam, validateEmail

    if (value === 'username') {
      urlParam = '/users/check?username=' + this.state.username.value
    }
    else if (value === 'email') {
      urlParam = '/users/check?email=' + this.state.email.value
    }
    console.log(this.state);
    // Проверяем имя пользователя на количество символов
    if (this.state.username.value.length < 3) {
      return this.setState({
        username: {
          ...this.state.username,
          class: ' field-error',
          error: 'short'
        }
      })
    }
    else if (this.state.username.value.length > 24) {
      return this.setState({
        username: {
          ...this.state.username,
          class: ' field-error',
          error: 'long'
        }
      })
    }

    //Проверка email
    validateEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    if (! this.state.email.value.match(validateEmail) && this.state.email.value.length < 3) {
      return this.setState({
        email: {
          ...this.state.email,
          class: ' field-error',
          error: 'invalid'
        }
      })
    }

    // Проверка на занятость
    fetch(config.apiUrl + urlParam, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((result) => {
      console.log(result);
      if (! result.result) {
        if (value === 'username') {
          this.setState({ username: { ...this.state.username, class: ' field-correct', error: '' } })
        }
        else if (value === 'email') {
          this.setState({ email: { ...this.state.email, class: ' field-correct', error: '' } })
        }
      }
      else {
        if (value === 'username') {
          this.setState({
            username: {
              ...this.state.username,
              class: ' field-error',
              error: 'exists'
            }
           })
        }
        else if (value === 'email') {
          this.setState({
            email: {
              ...this.state.email,
              class: ' field-error',
              error: 'exists'
            } })
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
            {(this.state.username.error === 'exists') ? <span className="field-msg">Имя пользователя уже занято</span> : null}
            {(this.state.username.error === 'short') ? <span className="field-msg">Имя пользователя слишком короткое</span> : null}
            {(this.state.username.error === 'long') ? <span className="field-msg">Слишком длинное имя</span> : null}
          </li>
          <li className={'form-field' + ((this.state.email.class) ? this.state.email.class : '')}>
            <input className="field-input" placeholder="Электронная почта" name="email" onChange={event => this.setState({email: {value: event.target.value}})} onBlur={this.checkUsername.bind(this, 'email')} />
            {(this.state.email.error === 'exists') ? <span className="field-msg">Электронная почта уже занята</span> : null}
            {(this.state.email.error === 'invalid') ? <span className="field-msg">Неправильный email</span> : null}
          </li>
        </ul>
        <TextInput inputType="text" inputPlaceholder="Имя пользователя" inputName="username" inputClass="field-input" changeValue={this.changeValue.bind(this)} inputValidate={this.validateEmail} />
        <input className="field-input" placeholder="Пароль" type="password" name="password" onChange={event => this.setState({password: event.target.value})} />
        <input className="field-input" placeholder="Повторите пароль" type="password" name="confirmPassword" onChange={event => this.setState({confirmPassword: event.target.value})} />
        <input className="btn btn-green" type="submit" name="ok" onClick={this.handleClick.bind(this)} />
        <pre>{this.state.username.value}</pre>
      </div>
    )
  }
}

export default Registration
