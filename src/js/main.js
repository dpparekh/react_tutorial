// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox';
import FilterableProductTable from "./components/FilterableProductTable"
let data = [
  {id: 1, author: "Dhaval Parekh", text: "this is one comment"},
  {id: 2, author: "Chad Cartwright", text: "this is *another* comment"}
]

let products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
ReactDOM.render(
  <FilterableProductTable products={products} />,
  document.getElementById('content')
);
