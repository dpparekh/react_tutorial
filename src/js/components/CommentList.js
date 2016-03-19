import React from 'react';
import ReactDom from 'react-dom';
import Comment from './Comment'

const CommentList = React.createClass({
    render: function(){
      let commentNodes = this.props.data.map(function(comment){
        return (
          <Comment author={comment.author} key={comment.id}>
            {comment.text}
          </Comment>
        );
      });
      return (
        <div className="commentList">
          {commentNodes}
        </div>
      );
    }

});

export default CommentList;
