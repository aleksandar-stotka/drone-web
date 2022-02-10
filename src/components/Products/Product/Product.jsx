import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from "@material-ui/icons"
import useStyles from "./styles"
const Product = ({ product,onAddToCart }) => { 
     
     
    //all lau out for one specifiv product
    const classes = useStyles()
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.image.url} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom >
                            {product.name}
                      </Typography>
                        <Typography variant='h5'  >
                            {product.price.formatted_with_symbol}
                      </Typography>
                        <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='body2' color="textSecondary"  />
                            
             
                    </div>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Card" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart/>
                    </IconButton>

                </CardActions>
                
        </Card>
  </div>
      
  ) 
};



export default Product;
