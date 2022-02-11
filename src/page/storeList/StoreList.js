import React, { useState, useEffect } from "react";
import StoreBar from "../../components/navbar/StoreBar";
import Products from "../../components/Products/Products";
import { commerce } from "../../lib/commerce";
import Cart from "../../components/Cart/Cart";
import { useGlobalContext } from "../../context";

//

//reducer is way to update our store

const StoreList = () => {
  const { closeSubmenu, newBack } = useGlobalContext();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [showStore, setShowStore] = useState(true);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list(); ///commers specific api call ,return promise, destruc data for response
    //data is our products

    setProducts(data);
  };

  const storeIsShow = () => {
    setShowStore(false);
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
    <div onMouseOver={closeSubmenu}>
      <StoreBar totalItems={cart.total_items} isShow={storeIsShow} />
      {showStore && (
        <Products products={products} onAddToCart={handleAddToCart} />
      )}
      {!showStore && <Cart cart={cart} />}
    </div>
  );
};

export default StoreList;
