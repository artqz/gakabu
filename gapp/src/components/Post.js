import React, { Component } from 'react'

import './Post.css'

class Post extends Component {
  render () {
    return (
      <div className="post">
        <div className="">
          <div className="post-header">
            <a className="post-game-image">
              <img src="http://localhost:8000/images/games/icons/1.jpg" alt="1" />
            </a>
            <div className="post-game-info">
              <h5 className="post-game-name">Xyu Game 5</h5>
              <span className="post-date">Три часа назад</span>
            </div>
          </div>
          <div className="post-content">
            123
            123
            123
            <br/>
            123
          </div>
          <div className="post-read-more">
            <span className="text">Показать полностью</span>
          </div>
          <div className="post-wrap">
            <div className="post-wrap-like">
              <i className="i-sprite like"></i>
              <span className="like-count">12</span>
            </div>        
          </div>
        </div>
      </div>
    )
  }
}
export default Post;
