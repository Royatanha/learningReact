import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './comment_detail';
import ApprovalCard from './approval_card';

class Comment extends Component {
  render(){
    return (
      <div>
      <div className="ui container comments">
      <ApprovalCard><h4>Warning!</h4>Are you sure you want to do this?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail content="nice Blog" timeAgo="Today at 5:45PM"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail content="I like the writing!" timeAgo="Today at 12:00PM"/>
          </ApprovalCard>
          <ApprovalCard>
              <CommentDetail content="this comments are props form parent" timeAgo="Today at 10:20AM"/>
            </ApprovalCard>
      </div>
      </div>
    );
  }
};

export default Comment;
