import React, { Component } from "react";
import { connect } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { bindActionCreators } from "redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

class CartDetails extends Component {
  removeFromCart = (p) => {
    this.props.actions.removeFromCart(p);
    alertify.set("notifier", "position", "top-right");
    alertify.error(p.productName + " is been deleted!");
  };

  render() {
    let productLength = 1;
    let total = 0,
      result;
    return (
      <div className="position-relative">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#id</th>
              <th>Product</th>
              <th className="text-end">Quantity</th>
              <th className="text-end">U.Price</th>
              <th className="text-end">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((p) => (
              <tr key={p.product.id}>
                <td>#{productLength++}</td>
                <td>{p.product.productName}</td>
                <td className="text-end">{p.quantity}</td>
                <td className="text-end">
                  {p.product.unitPrice}
                  {" ₺"}
                </td>
                <td className="text-end">
                  {(p.quantity * p.product.unitPrice).toFixed(2)}
                  {" ₺"}
                </td>
                <td className="text-end">
                  <FaTrash
                    className="cartItem-remove"
                    onClick={() => this.removeFromCart(p.product)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.props.cart.length > 0 && (
          <div className="div-sum-total">
            {this.props.cart.map((c, i) => {
              total += Number(c.quantity) * Number(c.product.unitPrice);
              if (this.props.cart.length - 1 === i) result = total.toFixed(2);
              return result;
            })}
            {" ₺"}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.CartReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      removeFromCart: bindActionCreators(removeFromCart, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
