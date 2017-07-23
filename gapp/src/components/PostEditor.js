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

    items.push({type: 'image', value: image})
    this.setState({
      items: items
    })
  }
  addItemText () {
    const items = this.state.items

    items.push({type: 'text', value: ''})
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
              <img src={item.value} alt={Date.now()} />
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
    console.log(this.state.items)
    return (
      <div className="post-editor">
        <ul className="items-list">{items}</ul>
        <ul className="panel-adding">
          <li className="item add-text" onClick={this.addItemText.bind(this)}>
            <i className="i-sprite-add-text"></i>
          </li>
          <li className="item add-image"><ImageUploader onChange={this.handleImageChange.bind(this)} /></li>
          <li className="item add-video"><i className="i-sprite-add-video"></i></li>
        </ul>
      </div>
    );
  }
}

export default PostEditor;
