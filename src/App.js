import React from "react";
import Navbar from "./Navbar";

import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import { Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import Company from "./page/Company";
import InfoGrid from "./page/InfoGrid";
import Products from "./page/Products";
import Login from "./login/Login";
import SingUp from "./singup/SingUp";
import { useAuthContext } from "./hooks/useAuthContext";
import { Redirect } from "react-router-dom";
import PageLogin from "./page/PageLogin";
import MavicSeries from "./components/series/mavic/MavicSeries";

function App() {
  const { user } = useAuthContext();
  return (
    <div>
      <Navbar />
       
      <Sidebar />
      <Submenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/person/:id" children={<InfoGrid />}></Route>
        <Route path="/mavic">
          <MavicSeries />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/pagelogin">
          {!user && <Redirect to="/login" />}
          {user && <PageLogin />}
          <PageLogin />
        </Route>
        <Route path="/login">
          {user && <Redirect to="/pagelogin" />}
          {!user && <Login />}
        </Route>
        <Route path="/singup">
          {user && <Redirect to="/pagelogin" />}
          {!user && <SingUp />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
