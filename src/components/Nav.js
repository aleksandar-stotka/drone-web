import { Link } from "react-router-dom";
import React from "react";

import "./Nav.scss";

const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/create">create</Link>
      </nav>
    </div>
  );
};

export default Nav;
