import React, { useState, useEffect } from "react";
import StoreBar from "../../components/navbar/StoreBar";
import Products from "../../components/Products/Products";
import { commerce } from "../../lib/commerce";
import Cart from "../../components/Cart/Cart";

//

//reducer is way to update our store

const StoreList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list(); ///commers specific api call ,return promise, destruc data for response
    //data is our products

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quanitity) => {
    const item = await commerce.cart.add(productId, quanitity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(cart);

  return (
    <div>
      <StoreBar totalItems={cart.total_items} />
      {/*<Products products={products} onAddToCart={handleAddToCart} />*/}
      <Cart cart={cart} />
    </div>
  );
};

export default StoreList;
