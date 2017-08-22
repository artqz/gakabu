import React, { Component } from 'react'

class TextInput extends Component {
  state = {
    value: '',
    class: '',
    error: ''
  }
  changeValue (e) {
    this.setState({
      value: e.target.value,
      class: '',
      error: ''
    })
    this.props.changeValue(e.target.value)
  }
  inputValidate (e) {
    console.log(this);
    this.setState({
      ...this.state,
      class: this.props.inputValidate(e.target.value).class,
      error: this.props.inputValidate(e.target.value).error
    })
  }
  render () {
    return (
      <div className={'form-field ' + this.state.class}>
        <input
          type={this.props.inputType}
          placeholder={this.props.inputPlaceholder}
          name={this.props.inputName}
          className={this.props.inputClass}
          onChange={this.changeValue.bind(this)}
          onBlur={this.inputValidate.bind(this)}
        />
        {(this.state.error) ? <span className="field-msg">{this.state.error}</span> : null}
      </div>
    )
  }
}
export default TextInput;
