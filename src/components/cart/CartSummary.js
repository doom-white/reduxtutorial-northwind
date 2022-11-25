import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";
import { bindActionCreators } from "redux";
import { removeFromCart } from "../../redux/actions/cartActions";

class CartSummary extends Component {
  render() {
    return (
      <li className="nav-item dropdown position-relative">
        <a
          className="nav-link dropdown-toggle"
          href="!"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaCartArrowDown className="cart-list" />
          <span className="position-absolute top-0 start-20 translate-middle badge rounded-pill bg-danger">
            {this.props.cart.length}
          </span>
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          {this.props.cart.map((cartItem) => (
            <div key={cartItem.product.id}>
              <li className="dropdown-item">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td className="cart-summary-close-div">
                        <i
                          className="fa-solid fa-circle-xmark cart-summary-close"
                          onClick={() =>
                            this.props.actions.removeFromCart(cartItem.product)
                          }
                        ></i>
                        {cartItem.product.productName}
                      </td>
                      <td className="text-end">
                        <span className="badge rounded-pill bg-warning text-dark">
                          {cartItem.quantity}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
            </div>
          ))}
          <li className="text-center">
            {this.props.cart.length > 0 ? (
              <div className="d-grid px-3">
                <Link to="/cart-details" className="btn btn-primary">
                  Check Your Cart Summary
                </Link>
              </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      removeFromCart: bindActionCreators(removeFromCart, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
