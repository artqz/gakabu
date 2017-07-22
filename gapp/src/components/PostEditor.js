import React, { Component } from 'react'
import Editor from 'react-medium-editor'

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

  render() {
    var items = this.props.items
      .map((item, index) => {
        if (item.type === 'text') {
          return (
            <div key={index}>
              <Editor options={this.props.options} />
            </div>
          )
        }
        else if (item.type === 'image') {
          return (
            <div key={index}>
              img
            </div>
          )
        }
        else if (item.type === 'video') {
          return (
            <div key={index}>
              img
            </div>
          )
        }
    })
    return (
      <div>
        {items}
      </div>
    );
  }
}

export default PostEditor;
