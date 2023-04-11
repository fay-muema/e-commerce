import React from 'react'
import { Grid } from '@mui/material';
import Product from './Product'
import useStyles from './Styles/ProductStyles'

// const foundation = require('../images/foundation.png')
// const concealor = require('../images/concealor.png')


// const products =[
//   //   {id: 1, name: "Foundation", 
//   //   description: "Foundation color 133", 
//   //   price: '$110', 
//   //   image: 'https://www.narscosmetics.com/on/demandware.static/-/Sites-itemmaster_NARS/default/dw88daa18b/2020/September/Foundation/Valencia/0194251004143_1.jpg'
//   // },

//   //   {id: 2, name:"concealor", 
//   //   description: "Concealor color 2",
//   //    price: '$112', 
//   //    image: 'https://sdcdn.io/mac/us/mac_sku_MGT905_1x1_0.png?width=1440&height=1440'
//   //   }
// ];

const Products = ({products, onAddTocart}) => {

  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <Grid container justify="center" spacing={4}>
           { products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddTocart = {onAddTocart}/>
            </Grid>
           ))};
        </Grid>
        </div>    
    </main>
  )
}

export default Products
