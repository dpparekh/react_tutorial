import React from 'react';
import ReactDom from 'react-dom';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';
const CommentBox = React.createClass(
  {
    getInitialState: function () {
      return {data: []};
    },
    loadCommentsFromServer: function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function(data){
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err){
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    handleCommentSubmit: function(comment){
      let comments = this.state.data;
      comment.id = Date.now();
      let newComments = comments.concat([comment]);
      this.setState({data: newComments});
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: comment,
        success: function(data){
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, error){
          this.setState({data: comments});
          console.error(this.props.url, stats, err.toString());
        }
      });
    },
    componentDidMount: function(){
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function() {
      return (
        <div className="commentBox">
          <h1>Comments</h1>
            <CommentList data={this.state.data} />
            <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </div>
      );
    }
  }
);
export default CommentBox;
