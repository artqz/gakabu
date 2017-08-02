import React, { Component } from 'react'
import Editor from 'react-medium-editor'

import ImageUploader from './ImageUploader'

import './PostEditor.css'
import './Editor.css'

class PostEditor extends Component {

  static defaultProps = {
    options: {
      toolbar: {
        buttons: [
          {name: 'bold', aria: 'Жирный'},
          {name: 'italic', aria: 'Курсив'},
          {name: 'strikethrough', aria: 'Зачеркнутый'},
          {name: 'anchor', aria: 'Ссылка'},
          {name: 'quote', aria: 'Цитата'}
        ]
      },
      placeholder: {
        text: 'Введите текст'
      }
    }
  }

  state = {
    items: [
      {type: 'text', value: ''},
    ]
  }
  handleTextChange(index, text) {
    const items = this.state.items

    items[index].value = text
    this.setState({
      items: items
    })
  }
  handleImageChange(image) {
    const items = this.state.items
    console.log(image.index);
    if (!image.loading) {
      items.push({
        type: 'image',
        base64: image.base64,
        width: image.width,
        height: image.height,
        url: image.url,
        animation: image.animation,
        index: image.index
      })

    }
    else {
      if (image.type === 'imageGif') {
        items[image.index].url = image.url
        items[image.index].urlGif = image.urlGif
        items[image.index].size = image.size
      }
      else if (image.type === 'imageBig') {
        items[image.index].url = image.url
        items[image.index].urlBig = image.urlBig
      }
      else {
        items[image.index].url = image.url
      }
    }

    this.setState({
      items: items
    })
    console.log(this.state.items);
  }

  addItemText () {
    const items = this.state.items

    items.push({type: 'text', value: ''})
    this.setState({
      items: items
    })
  }

  successfulUploaded (itemUrl) {
    if (itemUrl) {
      return <div className="item-successful-uploaded"><i className="i-sprite-successful-uploaded"></i></div>;
    }
    else {
      return <div className="item-failed-uploaded">Ошибка загрузки картинки!</div>
    }
  }

  deleteItem (index) {
    const items = this.state.items

    items.splice(index, 1);
    this.setState({
      items: items
    })
  }

  render() {
    var items = this.state.items
      .map((item, index) => {
        if (item.type === 'text') {
          return (
            <li className="item-text" key={index}>
                <Editor
                  text={item.value}
                  options={this.props.options}
                  onChange={this.handleTextChange.bind(this, index)}
                />
            </li>
          )
        }
        else if (item.type === 'image') {
          return (
            <li className="item-image" key={index}>
              <div id={index} onClick={this.deleteItem.bind(this, item.index)}>Delete</div>
              <div id={index} className="image-block" style={{width : item.width+'px', height : item.height+'px'}}>
                {this.successfulUploaded(item.url)}
                <img src={item.base64} alt={Date.now()} width={item.width} height={item.height} />
              </div>
            </li>
          )
        }
        else {
          return (
            <li className="item-video" key={index}>
              img
            </li>
          )
        }
    })
    console.log(this.state.items.length);
    return (
      <div className="post-editor">
        <ul className="items-list">{items}</ul>
        <ul className="panel-adding">
          <li className="item add-text" onClick={this.addItemText.bind(this)}>
            <i className="i-sprite-add-text"></i>
          </li>
          <li><ImageUploader index={this.state.items.length} onChange={this.handleImageChange.bind(this)} /></li>
          <li className="item add-video"><i className="i-sprite-add-video"></i></li>
        </ul>
      </div>
    );
  }
}

export default PostEditor;
