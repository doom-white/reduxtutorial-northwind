import React from "react";
import { Routes, Route } from "react-router-dom";
import Navi from "./components/navi/Navi";
import Dashboard from "./components/root/Dashboard";
import CartDetails from "./components/cart/CartDetails";

const App = () => {
  return (
    <div className="container">
      <Navi />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart-details" element={<CartDetails />} />
      </Routes>
    </div>
  );
};

export default App;
