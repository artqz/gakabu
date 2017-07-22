import React, { Component } from 'react'

class Create extends Component {
  state = {
    imageFile: null,
    imagePreview: null
  }
  handleImageChange (event) {
    const file = event.target.files[0]
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreview: reader.result
      });
    }
    reader.readAsDataURL(file)
  }
  render() {
    return (
      <div>
        Добавить картинку
        <input type="file" name="image" accept="image/*" onChange={this.handleImageChange.bind(this)} />
        <img src={this.state.imagePreview} alt="1" />
      </div>
    )
  }
}

export default Create;
