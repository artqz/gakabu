import React, { Component } from 'react'
import config from '../../config'

import TextInput from '../../components/auth/TextInput'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }
  changeInputPassword (value) {
    this.setState({
      ...this.state,
      password: value
    })
  }
  validateInputPassword() {
    return true
  }

  changeInputEmail (value) {
    this.setState({
      ...this.state,
      email: value
    })
  }

  validateInputEmail () {
    return true
  }

  handleClick () {
    console.log(this.state);
    fetch('http://127.0.0.1:8000/oauth/token', {
      credentials: true,
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        grant_type: 'password',
        client_id: '2',
        client_secret: 'HHh1D8lqG2DwM2FTCwseCtzQV3iSBXyfJgiloiY1',
        username: this.state.email,
        password: this.state.password,
        scope: '',
      })
    })
    .then(response => response.json())
    .then((result) => {
      localStorage.setItem('token', result.access_token);
      localStorage.setItem('expiration', result.expires_in);
    })
  }
  render() {
    return (
      <div className="form form-login">
        <h2 className="form-title">Войти</h2>
        <TextInput inputType="text" data={this.state.email} inputPlaceholder="Электронная почта" inputName="email" inputClass="field-input" changeValue={this.changeInputEmail.bind(this)} inputValidate={this.validateInputEmail.bind(this)} />
        <TextInput inputType="password" data={this.state.password} inputPlaceholder="Пароль" inputName="password" inputClass="field-input" changeValue={this.changeInputPassword.bind(this)} inputValidate={this.validateInputPassword.bind(this)} />
        <button className="btn btn-green" onClick={this.handleClick.bind(this)}>Войти</button>
      </div>
    )
  }
}

export default Login;
