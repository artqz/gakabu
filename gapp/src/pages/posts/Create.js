import React, { Component } from 'react'

import PostEditor from '../../components/PostEditor'
import './Create.css'

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
        <div className="container">
          <PostEditor />
        </div>
      </div>
    )
  }
}

export default Create;
