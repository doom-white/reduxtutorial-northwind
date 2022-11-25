import React, { Component } from "react";
import { connect } from "react-redux";

class CartDetails extends Component {
  render() {
    let productLength = 1;
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <th>#id</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>U.Price</th>
            <th>Total</th>
          </thead>
          <tbody>
            {this.props.cart.map((p) => (
              <tr key={p.product.id}>
                <td>#{productLength++}</td>
                <td>{p.product.productName}</td>
                <td>{p.quantity}</td>
                <td>{p.product.unitPrice}</td>
                <td>
                  {(p.quantity * p.product.unitPrice).toFixed(2)}
                  {" ₺"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.CartReducer,
  };
};

export default connect(mapStateToProps)(CartDetails);
