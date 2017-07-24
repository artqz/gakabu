import React, { Component } from 'react'

import './ImageUploader.css'

class ImageUploader extends Component {
  state = {
    value: '',
    image: {
      base64: '',
      width: '',
      height: '',
      url: '',
      urlBig: '',
      urlGif: '',
      size: '',
      type: '',
      loading: false,
      animation: false,
      index: this.props.index
    }
  }

  handleImageChange (event) {
    var file = event.target.files[0]
    var reader = new FileReader()
    var image = new Image()

    reader.onloadend = () => {

      image.onload = () => {

        var width, height, animation, type, size

        size = Math.round(file.size/1024/1024*100)/100

        if (image.width > 600) {
          width = 600
          height =  Math.round(image.height/(image.width/600))
          type = 'imageBig'
        }
        else {
          width = image.width
          height = image.height
          type = 'image'
        }

        if (file.type === 'image/gif') {
          animation = true
          type = 'imageGif'
        }
        else {
          animation = false
        }

        this.setState({
          value: '',
          image: {
            base64: reader.result,
            width: width,
            height: height,
            animation: animation,
            url: '',
            urlBig: '',
            urlGif: '',
            size: size,
            type: type,
            loading: false,
            index: this.props.index
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

    fetch('http://127.0.0.1:8000/api/v1/file', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        image: this.state.image.base64
      })
    })
      .then((res) => { return res.json(); })
      .then((data) => {

        if (data.imageType === "gif") {
          this.setState({
            image: {
              ...this.state.image,
              loading: true,
              url: data.imageUrlPreview,
              urlGif: data.imageUrl,
              animation: true
            }
          })
        }
        else if (data.imageType === "jpgBig") {
          this.setState({
            image: {
              ...this.state.image,
              loading: true,
              url: data.imageUrl,
              urlBig: data.imageUrlBig
            }
          })
        }
        else {
          this.setState({
            image: {
              ...this.state.image,
              loading: true,
              url: data.imageUrl
            }
          })
        }

        this.props.onChange(this.state.image)
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
