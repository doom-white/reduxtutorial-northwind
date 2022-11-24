import React, { Component } from "react";
import CartSummary from "../cart/CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light my-3">
        <div className="container-fluid">
          <h4 style={{ color: "rgb(139, 158, 175)" }}>
            Northwind - Redux Tutorial
          </h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!">
                  Link
                </a>
              </li>
              <CartSummary />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
