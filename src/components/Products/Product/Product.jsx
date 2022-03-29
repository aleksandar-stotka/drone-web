import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  onAddCategory,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { useState } from "react";
const Product = ({ product, onAddToCart }) => {
  const [categor, setCategor] = useState({});
  //all lau out for one specifiv product
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.image.url}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" gutterBottom></Typography>

            <Typography variant="h5">
              {product.price.formatted_with_symbol}
            </Typography>
            <Typography
              dangerouslySetInnerHTML={{ __html: product.description }}
              variant="body2"
              color="textSecondary"
            />
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label="Add to Card"
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
