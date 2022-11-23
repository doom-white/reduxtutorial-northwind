import React, { Component } from "react";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <CategoryList />
        </div>
        <div className="col-md-9">
          <ProductList />
        </div>
      </div>
    );
  }
}
