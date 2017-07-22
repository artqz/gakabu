import React, { Component } from 'react'

import PostEditor from '../../components/PostEditor'

class Create extends Component {
  state = {
    editor: {
      title: '',
      gameId: '',
      gameTitle: '',
      items: []
    }
  }

  render() {

    return (
      <div>
        <PostEditor />
      </div>
    )
  }
}

export default Create;
