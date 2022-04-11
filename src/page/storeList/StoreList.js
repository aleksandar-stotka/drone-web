import React, { useState, useEffect } from "react";
import StoreBar from "../../components/navbar/StoreBar";
import Products from "../../components/Products/Products";
import { commerce } from "../../lib/commerce";
import Cart from "../../components/Cart/Cart";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import Checkout from "../../components/CeckoutForm/checkout/Checkout";
import { ContactlessOutlined } from "@material-ui/icons";
import Buttons from "../../components/buttons/Buttons";

//

//reducer is way to update our store

const StoreList = () => {
  const { closeSubmenu, navShow } = useGlobalContext();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [showStore, setShowStore] = useState(true);
  const [itsLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState([]);

  const fetchProducts = async () => {
    setIsLoading(true);
    const { data } = await commerce.products.list(); ///commers specific api call ,return promise, destruc data for response
    //data is our product   s
    console.log(data);

    setProducts(data);
    setIsLoading(false);
  };

  const storeIsShow = () => {
    setShowStore(false);
  };

  const backStore = () => {
    setShowStore(true);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };
  const handleCategory = (category) => {
    const newCtegory = products;
    setCategory(newCtegory);
    newCtegory.filter((item) => item.categories[0].name === category);
    setProducts(newCtegory);
  };

  const handleUpdatedCartQty = async (porductId, quantity) => {
    const { cart } = await commerce.cart.update(porductId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };
  /////////////////////////////////////////////////

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div onMouseOver={closeSubmenu}>
      {itsLoading && (
        <p
          style={{
            color: "red",
            width: "40rem",
            fontSize: "10rem",
            margin: "auto",
            fontWeight: "bold",
          }}
        >
          ...loading
        </p>
      )}
      <StoreBar totalItems={cart.total_items} isShow={storeIsShow} />
      {showStore && (
        <Products products={products} onAddToCart={handleAddToCart} />
      )}
      {!showStore && (
        <Cart
          cart={cart}
          back={backStore}
          handleUpdatedCartQty={handleUpdatedCartQty}
          handleRemoveFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart}
        />
      )}
    </div>
  );
};

export default StoreList;
