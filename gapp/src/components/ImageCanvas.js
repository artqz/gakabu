import React, { Component } from 'react'

class ImageCanvas extends Component {
  componentDidMount () {
    var data = this.props.data,
        ctx = this.refs.canvas.getContext('2d'),
        image = new Image()

    image.onload = () => {
      ctx.drawImage(image, 0, 0, data.width, data.height);
    }
    image.src = data.base64;
  }

  render () {
    var data = this.props.data

    return (
      <div><canvas ref="canvas" width={data.width} height={data.height} /></div>
    )
  }
}

export default ImageCanvas
