import React from "react";
import "./CartItems.scss";

const CartItems = ({ id, title, price, img, amount, cart }) => {
  return (
    <div className="col span-1-of-3">
      <img className="store-img" src={img} alt={title} />
      <div className="store-title">
        <h3>{title}</h3>
        <h4>price:{price}$</h4>
        <span>{amount}</span>
      </div>
    </div>
  );
};

export default CartItems;
