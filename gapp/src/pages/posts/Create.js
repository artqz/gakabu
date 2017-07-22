import React, { Component } from 'react'

import PostEditor from '../../components/PostEditor'

class Create extends Component {
  static defaultProps = {
    editor: {
      title: '',
      gameId: '',
      gameTitle: '',
      items: [
        {type: 'text', value: ''},
        {type: 'image', value: '123'}
      ]
    }
  }

  render() {
    var items = this.props.editor.items

    return (
      <div>
        <PostEditor items={items} />
      </div>
    )
  }
}

export default Create;
