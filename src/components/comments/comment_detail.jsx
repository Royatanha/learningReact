import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const CommentDetail = props => {
  return(
    <div className="comment">
    <a href="/" className="avatar">
    <img alt="avatar" src={faker.image.avatar()}/>
    </a>
    <div className="content" >
    <a href="/" className="author">
    {faker.name.firstName()}
    </a>
    <div className="metadata">
      <span className="date">{props.timeAgo}</span>
      </div>
      <div className="text">{props.content}</div>
    </div>
    </div>
  );
}

export default CommentDetail;
