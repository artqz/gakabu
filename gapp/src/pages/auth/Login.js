import React, { Component } from 'react'


class Login extends Component {
  state = {
    email: '',
    password: '',
  }
  login () {
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
        client_secret: 'xHVsMr2FtLJAtWqrZdKsB30VsYEajMpu5UvE70v0',
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
      <div>
        <input name="email" onChange={event => this.setState({email: event.target.value})} />
        <input type="password" name="password" onChange={event => this.setState({password: event.target.value})} />
        <input type="submit" name="ok" onClick={this.login.bind(this)} />
      </div>
    )
  }
}

export default Login;
