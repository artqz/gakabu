import React, { Component } from 'react'

class TextInput extends Component {
  changeValue (e) {
    this.props.changeValue(e.target.value)
  }
  inputValidate (e) {
    this.props.inputValidate()
  }
  render () {
    return (
      <div className={'form-field ' + this.props.data.class}>
        <input
          type={this.props.inputType}
          value={this.props.data.value}
          placeholder={this.props.inputPlaceholder}
          name={this.props.inputName}
          className={this.props.inputClass}
          onChange={this.changeValue.bind(this)}
          onBlur={this.inputValidate.bind(this)}
        />
        {(this.props.data.error) ? <span className="field-msg">{this.props.data.error}</span> : null}
      </div>
    )
  }
}
export default TextInput;
