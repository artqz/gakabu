import React, { Component } from 'react';

import Main from './Main'
import Header from './Header'
import Login from './pages/auth/Login'
import Registration from './pages/auth/Registration'

class App extends Component {
  state = {
    registrationFormShow: false,
    loginFormShow: false
  }
  openModalWindow (value) {
    if (value === 'login') {
      this.setState ({
        loginFormShow: !this.state.loginFormShow,
        registrationFormShow: false
      });
    }
    else this.setState({
      loginFormShow: false,
      registrationFormShow: !this.state.registrationFormShow
    });
  }
  hideBackdrop () {
    this.setState({
      loginFormShow: false,
      registrationFormShow: false
    });
  }
  render () {
    return (
      <div>
        <Header openModalWindow={this.openModalWindow.bind(this)}  />
        <Main />
        {(this.state.registrationFormShow || this.state.loginFormShow) ?
          (
            <div>
              <div className="_modal">              
                {(this.state.registrationFormShow) ? <div className="registration-form"><Registration /></div> : null}
                {(this.state.loginFormShow) ? <div className="registration-form"><Login /></div> : null}
              </div>
              <div className="modal-backdrop" onClick={this.hideBackdrop.bind(this)}></div>
            </div>
          )
        : null}
      </div>
    );
  }
}

export default App;
