import React from "react";
import {Grid} from "@material-ui/core"
import Product from "./Product/Product";
const products = [
    {id:1, name: 'Mavic', description: 'mavic air is ', price: '$444', image:"https://www2.djicdn.com/cms/uploads/cdcadbf686ac35831ac05e077ab944cf@640*640.jpg" },
    { id: 2, name: 'Air', description: 'air air is ', price: '$444', image: 'https://cdn11.bigcommerce.com/s-vyvz9xw5iv/images/stencil/original/products/3719/9706/DJI_AIR_2S_Drone04__24107.1618508560.jpg?c=1' }
    
]


const Products = () => {
    return(
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={ product}/>    
                    </Grid> //full width on mobile device
                ) )}


            </Grid>
        </main>
    )
}
export default Products