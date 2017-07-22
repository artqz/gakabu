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
      {type: 'image', value: ''},
      {type: 'text', value: ''}
    ]
  }
  handleChange(index, text) {
    const items = this.state.items

    items[index].value = text
    this.setState({
      items: items
    })
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
                onChange={this.handleChange.bind(this, index)}
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
