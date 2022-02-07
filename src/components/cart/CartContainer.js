import React from "react";
import CartItems from "../../components/cart/CartItems";
import cartItems from "../../data/cart-items";
import "./StoreContainer.scss";

const CartContainer = ({ allTotal }) => {
  const { total } = allTotal;
  return (
    <>
      <div className="store-container">
        <div>
          {cartItems.map((item) => {
            return <CartItems key={cartItems.id} {...item} />;
          })}
        </div>
      </div>
      <div className="cart-total">
        <h1>total</h1>
        <h2 className="total">{total}</h2>
      </div>
    </>
  );
};

export default CartContainer;
