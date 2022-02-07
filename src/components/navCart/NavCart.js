import React from "react";
import "./NavCart.scss";

const NavCart = ({ cart }) => {
  const { count } = cart;
  return (
    <div className="navcart-container">
      <h3>total items</h3>
      <hr></hr>
      <span>{count}</span>
    </div>
  );
};

export default NavCart;
