import React from "react";
import ReactDom from "react-dom";

const SearchBar = React.createClass({
  getInitialState: function(){
    return {filter:'', showOnlyStocked: false};
  },
  handleChange: function(){
        this.props.onFilterChange(this.state.filter, this.state.showOnlyStocked);
  },
  handleFilterChange: function(e){
    e.preventDefault();
    this.setState({filter: e.target.value, showOnlyStocked: this.state.showOnlyStocked},this.handleChange);
  },
  handleStockChange: function(e){
    this.setState({filter: this.state.filter, showOnlyStocked: e.target.checked},this.handleChange);
  },
  render: function(){
    return(
        <form>
          <input type="text" placeholder="search..." value={this.state.filter} onChange={this.handleFilterChange}/>
          <p>
            <input type="checkbox" checked={this.state.showOnlyStocked} onClick={this.handleStockChange} /> Only show products in stock
          </p>
        </form>
    );
  }
});

export default SearchBar;
