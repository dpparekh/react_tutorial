import React from "react";
import ReactDom from "react-dom";

const ProductRow = React.createClass({
  render: function(){
    let name = this.props.product.stocked ? this.props.product.name : <span style={{color:'red'}}>{this.props.product.name}</span>;
    return(
        <tr>
          <td>{name}</td>
          <td>{this.props.product.price}</td>
        </tr>
    );
  }
});

export default ProductRow;
