import React from "react";

import { createStore } from "redux";
import CartContainer from "../../components/cart/CartContainer";
import CartItems from "../../components/cart/CartItems";
import NavCart from "../../components/navCart/NavCart";

const initialStore = {
  count: 2,
};

const store = createStore(reducer, initialStore); //there i create store with createStore from redux
//store is the place where we store our date

console.log(store.getState());
//reducer is way to update our store
function reducer(state) {
  return state;
}

const StoreList = () => {
  return (
    <main>
      <NavCart />
      <CartContainer />
    </main>
  );
};

export default StoreList;
