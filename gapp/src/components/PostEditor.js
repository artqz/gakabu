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

  state = {
    items: [
      {type: 'text', value: ''},
      {type: 'text', value: ''}
    ]
  }
  handleChange(text, e) {
    var self = this
    self.state.items[e.id-1].value = text
  }
  render() {
    var items = this.state.items
      .map((item, index) => {
        if (item.type === 'text') {
          return (
            <div key={index}>
              <Editor
                text={item.value}
                options={this.props.options}
                onChange={this.handleChange.bind(this)}
              />
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
        else {
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
