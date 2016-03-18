import React from 'react';
import ReactDom from 'react-dom';
import Comment from './Comment'

const CommentList = React.createClass({
    render: function(){
      return (
        <div className="commentList">
          <Comment author="Peter Hunt">This is one comment</Comment>
          <Comment author="Jordan Walke">This is *another* comment</Comment>
        </div>
      );
    }

});

export default CommentList;
