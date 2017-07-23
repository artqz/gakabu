import React, { Component } from 'react'

import './ImageUploader.css'

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
      this.props.onChange(reader.result)
    }
    reader.readAsDataURL(file)
  }
  render() {
    return (
      <div className="image-uploader">
        <i className="i-sprite-add-image"></i>
        <input type="file" name="image" accept="image/*" onChange={this.handleImageChange.bind(this)} />
      </div>
    )
  }
}

export default Create;
