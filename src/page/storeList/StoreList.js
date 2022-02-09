import React, { useState, useEffect } from "react";
import StoreBar from "../../components/navbar/StoreBar";
import Products from "../../components/Products/Products";
import { commerce } from "../../lib/commerce";

//

//reducer is way to update our store

const StoreList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  return (
    <div>
      <StoreBar />
      <Products />
    </div>
  );
};

export default StoreList;
