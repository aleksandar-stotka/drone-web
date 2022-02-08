import React from "react";

import { createStore } from "redux";
import CartContainer from "../../components/cart/CartContainer";
import NavCart from "../../components/navCart/NavCart";
import cartItems from "../../data/cart-items";
import reducer from "../../REDUCER/reducer";
import { Provider } from "react-redux";

const initialStore = {
  cart: cartItems,
  total: 109,
  amount: 5,
};
const store = createStore(reducer, initialStore); //there i create store with createStore from redux
//store is the place where we store our date\
//

//reducer is way to update our store

const StoreList = () => {
  return (
    <Provider store={store}>
      <NavCart />
      <CartContainer />
    </Provider>
  );
};

export default StoreList;
