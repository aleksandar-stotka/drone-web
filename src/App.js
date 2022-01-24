import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import { Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import Company from "./page/Company";

import Products from "./page/Products";

function App() {
  return (
    <div>
      <Navbar />

      <Sidebar />
      <Submenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
