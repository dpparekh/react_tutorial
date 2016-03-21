import React from "react";
import ReactDom from "react-dom";
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import _ from 'lodash';

const FilterableProductTable = React.createClass({
  getInitialState: function(){
    return {products: []};
  },
  handleFiltering: function(filter, showOnlyStocked){
    let filteredProducts = this.props.products;

    if(showOnlyStocked === true){
      if(filter !== undefined && filter !== ''){
        filteredProducts = _.filter(this.props.products, function(o){
         return o.name.indexOf(filter) !== -1 && o.stocked === true;
      });
      }
      else{
        filteredProducts = _.filter(this.props.products, function(o){
         return o.stocked === true;
       });
     }
    }
    else{
      if(filter !== undefined){
       filteredProducts = _.filter(this.props.products, function(o){
        return o.name.indexOf(filter) !== -1;
        });
      }
    }

    this.setState({products: filteredProducts});



  },
  componentDidMount: function(){
    this.setState({products: this.props.products});
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
