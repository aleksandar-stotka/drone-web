import React from "react";

import { createStore } from "redux";
import CartContainer from "../../components/cart/CartContainer";
import CartItems from "../../components/cart/CartItems";
import NavCart from "../../components/navCart/NavCart";
import cartItems from "../../data/cart-items";

const initialStore = {
  count: 0,
  amount: 1,
  total: 1,
};

const store = createStore(reducer, initialStore); //there i create store with createStore from redux
//store is the place where we store our date\
//

console.log(store.getState());
//reducer is way to update our store
function reducer(state, action) {
  console.log({ state, action });
  if (action.type === "DECREASE") {
    //we cant mutate our state
    //we have to make copy
    return { count: state.count - 1 };
  }
  if (action.type === "INCREASE") {
    //we cant mutate our state
    //we have to make copy
    return { count: state.count + 1 };
  }
  if (action.type === "RESET") {
    //we cant mutate our state
    //we have to make copy
    return { count: 0 };
  }
  return state;
}
store.dispatch({ type: "DECREASE" }); //reducer take action
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "RESET" });

const StoreList = () => {
  return (
    <main>
      <NavCart cart={store.getState()} />
      <CartContainer cart={cartItems} allTotal={store.getState()} />
    </main>
  );
};

export default StoreList;
