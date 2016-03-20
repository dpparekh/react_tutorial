import React from "react";
import ReactDom from "react-dom";
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


const FilterableProductTable = React.createClass({
  getInitialState: function(){
    return {products: []};
  },
  handleFiltering: function(filter){

  },

  componentDidMount: function(){
    this.setState({products: this.props.products});
    this.state.forceUpdate();
  },
  render: function(){

    return(
        <div>
          <SearchBar onFilterChange={this.handleFiltering}/>
          <ProductTable products={this.state.products} />
        </div>
    );
  }
});

export default FilterableProductTable;
