import React from "react";
import CartItems from "../../components/cart/CartItems";
import cartItems from "../../data/cart-items";

const CartContainer = () => {
  return (
    <div className="store-container">
      <div>
        {cartItems.map((item) => {
          return <CartItems key={cartItems.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CartContainer;
