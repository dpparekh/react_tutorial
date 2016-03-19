// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox';
let data = [
  {id: 1, author: "Dhaval Parekh", text: "this is one comment"},
  {id: 2, author: "Chad Cartwright", text: "this is *another* comment"}
]
ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
