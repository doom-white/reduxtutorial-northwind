import React, { Component } from "react";
import { connect } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";

class CartSummary extends Component {
  render() {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="!"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaCartArrowDown className="cart-list" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {this.props.cart.length}
          </span>
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          {this.props.cart.map((cartItem) => (
            <div key={cartItem.product.id}>
              <li className="dropdown-item">{cartItem.product.productName}</li>
              <hr className="dropdown-divider" />
            </div>
          ))}
          <li className="text-center">
            {this.props.cart.length > 0 ? (
              <button className="btn btn-primary">
                Check Your Cart Summary
              </button>
            ) : (
              "Your cart is empty."
            )}
          </li>
        </ul>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.CartReducer,
  };
};

export default connect(mapStateToProps)(CartSummary);
