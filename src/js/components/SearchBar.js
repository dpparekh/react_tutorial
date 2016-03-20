import React from "react";
import ReactDom from "react-dom";

const SearchBar = React.createClass({
  render: function(){
    return(
        <form>
          <input type="text" placeholder="search..."/>
          <p>
            <input type="checkbox" /> Only show products in stock
          </p>
        </form>
    );
  }
});

export default SearchBar;
