import React from "react";
import Navi from "./components/navi/Navi";
import Dashboard from "./components/root/Dashboard";

const App = () => {
  return (
    <div className="container">
      <Navi />
      <Dashboard />
    </div>
  );
};

export default App;
