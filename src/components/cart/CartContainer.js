import React from "react";
import CartItems from "../../components/cart/CartItems";
import "./StoreContainer.scss";
import { connect } from "react-redux";
import { CLEAR_CART } from "../../actions";

const CartContainer = ({ total, cart = [], dispatch }) => {
  //with dispatch we have acsses
  return (
    <>
      <div className="store-container">
        <div>
          {cart.map((item) => {
            return <CartItems key={item.id} {...item} />;
          })}
        </div>
      </div>
      <div className="cart-total">
        <h1>total</h1>
        <h2 className="total">{total}</h2>
        <button
          className="btn clear-btn"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          clear cart
        </button>
      </div>
    </>
  );
};
//also map dispatc action

const mapStateToProps = (store) => {
  console.log(store);
  return { cart: store.cart, total: store.total };
};

export default connect(mapStateToProps)(CartContainer);
