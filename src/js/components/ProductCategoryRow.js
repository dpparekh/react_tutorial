import React from "react";
import ReactDom from "react-dom";

const ProductCategoryRow = React.createClass({

  render: function(){
    return(
        <tr>
          <th>{this.props.category}</th>
        </tr>
    );
  }
});

export default ProductCategoryRow;
