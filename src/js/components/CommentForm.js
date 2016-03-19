import React from 'react';
import ReactDom from 'react-dom';

const CommentForm = React.createClass({
  getInitialState: function(){
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e){
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e){
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if(!text || !author){
      return;
    }
    this.props.onCommentSubmit(this.state);
    this.setState({author: '', text: ''});
  },
  getInputStyles: function(){
    return {width:'200px', height: '100px'};
  },
  render: function(){
    return (
      <form className="commentForm">
          <input type="text" value={this.state.author} placeholder="Your Name" onChange={this.handleAuthorChange}/> <br />
          <input type="text" value={this.state.text} placeholder="Say something.." onChange={this.handleTextChange} style={this.getInputStyles()}/>
          <input type="submit" value="Post" onClick={this.handleSubmit}/>
      </form>
    );
  }
});

export default CommentForm;
