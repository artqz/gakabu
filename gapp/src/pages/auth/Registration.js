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
    password:  {
      value: '',
      class: '',
      error: ''
    }
  }

  changeInputPassword (value) {
    this.setState({
      password: {
        ...this.state.password,
        value: value
      }
    })
  }

  validateInputPassword () {
    // Проверяем имя пользователя на количество символов
    if (this.state.password.value.length < 6) {
      return this.setState({
        password: {
          ...this.state.password,
          class: 'field-error',
          error: 'Пароль должен быть больше 6 символов'
        }
      })
    }
    else if (this.state.password.value.length > 24) {
      return this.setState({
        password: {
          ...this.state.password,
          class: 'field-error',
          error: 'Пароль не может быть больше 24 символов'
        }
      })
    }

    return this.setState({
      password: {
        ...this.state.password,
        class: '',
        error: ''
      }
    })
  }

  changeInputUsername (value) {
    this.setState({
      username: {
        ...this.state.username,
        value: value
      }
    })
  }

  validateInputUsername () {
    // Проверяем имя пользователя на количество символов
    if (this.state.username.value.length < 3) {
      return this.setState({
        username: {
          ...this.state.username,
          class: 'field-error',
          error: 'Имя пользователя слишком короткое'
        }
      })
    }
    else if (this.state.username.value.length > 24) {
      return this.setState({
        username: {
          ...this.state.username,
          class: 'field-error',
          error: 'Слишком длинное имя'
        }
      })
    }

    // Проверка на занятость
    var urlParam = '/users/check?username=' + this.state.username.value

    fetch(config.apiUrl + urlParam, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((result) => {
      if (result.result) {
        return this.setState({
          username: {
            ...this.state.username,
            class: 'field-error',
            error: 'Имя уже занято'
          }
        })
      }
      else {
        return this.setState({
          username: {
            ...this.state.username,
            class: 'field-correct',
            error: ''
          }
        })
      }
    })

    return this.setState({
      username: {
        ...this.state.username,
        class: '',
        error: ''
      }
    })
  }

  changeInputEmail (value) {
    this.setState({
      email: {
        ...this.state.email,
        value: value
      }
    })
  }

  validateInputEmail () {
    // Проверка email на валидность
    var validateEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    if (! this.state.email.value.match(validateEmail)) {
      return this.setState({
        email: {
          ...this.state.email,
          class: 'field-error',
          error: 'Некорректный адрес почты'
        }
      })
    }

    // Проверка на занятость
    var urlParam = '/users/check?email=' + this.state.email.value

    fetch(config.apiUrl + urlParam, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((result) => {
      if (result.result) {
        return this.setState({
          email: {
            ...this.state.email,
            class: 'field-error',
            error: 'Данный адрес уже занят'
          }
        })
      }
      else {
        return this.setState({
          email: {
            ...this.state.email,
            class: 'field-correct',
            error: ''
          }
        })
      }
    })

    return this.setState({
      email: {
        ...this.state.email,
        class: '',
        error: ''
      }
    })
  }

  handleClick () {
    if (this.state.username.value && this.state.email.value && this.state.password.value ) {
      fetch(config.apiUrl + '/auth/registration', {
        credentials: true,
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          username: this.state.username.value,
          email: this.state.email.value,
          password: this.state.password.value,
          password_confirmation: this.state.password.value
        })
      })
      .then(response => response.json())
      .then((result) => {
        console.log(result);
      })
    }
  }

  render() {
    return (
      <div className="modal-box">
        <h2 className="title">Регистрация</h2>
        <TextInput inputType="text" data={this.state.username} inputPlaceholder="Ваш ник" inputName="username" inputClass="field-input" changeValue={this.changeInputUsername.bind(this)} inputValidate={this.validateInputUsername.bind(this)} />
        <TextInput inputType="text" data={this.state.email} inputPlaceholder="Электронная почта" inputName="email" inputClass="field-input" changeValue={this.changeInputEmail.bind(this)} inputValidate={this.validateInputEmail.bind(this)} />
        <TextInput inputType="password" data={this.state.password} inputPlaceholder="Пароль" inputName="password" inputClass="field-input" changeValue={this.changeInputPassword.bind(this)} inputValidate={this.validateInputPassword.bind(this)} />
        <input className="btn btn-green" type="submit" name="ok" onClick={this.handleClick.bind(this)} />
        <pre>{this.state.email.value}</pre>
      </div>
    )
  }
}

export default Registration
