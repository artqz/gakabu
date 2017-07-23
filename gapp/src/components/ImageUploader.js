import React, { Component } from 'react'

import './ImageUploader.css'

class Create extends Component {
  state = {
    value: '',
    image: {
      preview: '',
      width: '',
      height: '',
      url: '',
      animation: false
    }
  }

  handleImageChange (event) {
    const file = event.target.files[0]
    var reader = new FileReader()
    var image = new Image()

    reader.onloadend = () => {

      image.onload = () => {

        var width, height

        if (image.width > 600) {
          width = 600
          height =  Math.round(image.height/(image.width/600))
        }
        else {
          width = image.width
          height = image.height
        }

        this.setState({
          value: '',
          image: {
            preview: reader.result,
            width: width,
            height: height
          }
        })

        this.props.onChange(this.state.image)
      }
      image.src = reader.result
    }
    reader.readAsDataURL(file)
  }
  selectImage () {
    this.refs.inputImage.click()
  }
  render() {
    return (
      <div className="item add-image" onClick={this.selectImage.bind(this)}>
        <i className="i-sprite-add-image"></i>
        <input type="file" name="image" accept="image/*"
          onChange={this.handleImageChange.bind(this)}
          ref="inputImage"
          value={this.state.value}
        />
      </div>
    )
  }
}

export default Create;
