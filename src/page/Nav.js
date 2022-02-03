import React from "react";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <Link className="btn" to="/create">
        create
      </Link>
    </div>
  );
};

export default Nav;
