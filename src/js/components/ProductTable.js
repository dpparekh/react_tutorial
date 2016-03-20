import React from "react";
import ReactDom from "react-dom";
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow';
const ProductTable = React.createClass({
  getInitialState: function(){
    return {rows: []};
  },
  componentDidMount: function(){
    var lastCategory = null;
    var rows = [];
    this.props.products.forEach(function(product){
      if(product.category !== lastCategory){
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    this.setState({rows: rows});
  },
  render: function(){
    return(
      <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {this.state.rows}
          </tbody>
      </table>
    );
  }
});

export default ProductTable;
