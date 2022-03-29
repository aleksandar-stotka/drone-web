import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const Products = ({ products, onAddToCart, findCategory }) => {
  return (
    <>
      \{" "}
      <main>
        <Grid
          container
          style={{ padding: "30px", textAlign: "center" }}
          gutterBottom
          spacing={5}
        >
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product
                product={product}
                onAddToCart={onAddToCart}
                findCategory={findCategory}
              />
            </Grid> //full width on mobile device
          ))}
        </Grid>
      </main>
    </>
  );
};
export default Products;
