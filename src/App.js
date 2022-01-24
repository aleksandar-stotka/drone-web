import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import { Route } from "react-router-dom";
import Home from "./page/Home";

import Products from "./page/Products";

function App() {
  return (
    <div>
      <Navbar />

      <Sidebar />
      <Submenu />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
