import React, { Component } from 'react'

import './ImageUploader.css'

class ImageUploader extends Component {
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
    var file = event.target.files[0]
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
            height: height,
            animation: false,
            url: ''
          }
        })
        this.props.onChange(this.state.image)
        this.saveImage()
      }
      image.src = reader.result
    }
    reader.readAsDataURL(file)
  }

  selectImage () {
    this.refs.inputImage.click()
  }

  saveImage () {
    console.log(this.state.image.preview);
    fetch('http://127.0.0.1:8000/api/v1/file', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        image: this.state.image.preview
      })
    })
      .then(function(res){ return res.json(); })
      .then(function(data){
        console.log(this);
        this.setState({
          image: {
            url: 1
          }
        })
        alert( JSON.stringify( data ) )
      })
  }

  render() {
    return (
      <div className="item add-image" onClick={this.selectImage.bind(this)}>
        <i className="i-sprite-add-image"></i>
        <input type="file" name="image" accept="image/*" multiple
          onChange={this.handleImageChange.bind(this)}
          ref="inputImage"
          value={this.state.value}
        />
      </div>
    )
  }
}

export default ImageUploader;
