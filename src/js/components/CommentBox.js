import React from 'react';
import ReactDom from 'react-dom';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CommentBox = React.createClass(
  {
    render() {return (
        <div className="commentBox">
          <h1>Comments</h1>
            <CommentList />
            <CommentForm />
        </div>
      );
    }
  }
);
export default CommentBox;
