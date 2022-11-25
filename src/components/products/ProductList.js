import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts } from "../../redux/actions/productAction";
import { FaCartPlus } from "react-icons/fa";
import { addToCart } from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(`${product.productName} added to cart!`);
  };

  render() {
    return (
      <div>
        <h3>
          <span className="badge bg-warning text-dark me-2">
            Products
            {!this.props.currentCategory.categoryName &&
              " (" + this.props.products.length + ")"}
          </span>
          {this.props.currentCategory.categoryName && (
            <span className="badge bg-success">
              <small>
                {this.props.currentCategory.categoryName} (
                {this.props.products.length})
              </small>
            </span>
          )}
        </h3>
        <table className="table table-striped">
          <thead>
            <th>#id</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>U.Price</th>
            <th>Stock</th>
            <th className="text-center">Cart</th>
          </thead>
          <tbody>
            {this.props.products.map((p) => (
              <tr key={p.id}>
                <td>#{p.id}</td>
                <td>{p.productName}</td>
                <td>{p.quantityPerUnit}</td>
                <td>{p.unitPrice}</td>
                <td>{p.unitsInStock}</td>
                <td className="text-center">
                  <FaCartPlus
                    className="add-to-cart"
                    onClick={() => this.addToCart(p)}
                  />
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
    currentCategory: state.ChangeCategoryReducer,
    products: state.ProductListReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getProducts: bindActionCreators(getProducts, dispatch),
      addToCart: bindActionCreators(addToCart, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
