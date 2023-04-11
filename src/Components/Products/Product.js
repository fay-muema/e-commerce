import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, IconButton} from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useStyles from './Styles/Styles'
import './Products';

const Product = ({ product, onAddTocart }) => {
    const classes = useStyles();
    
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image.url} title={product.name} />
        <CardContent>
            
            <div className={classes.cardContent}>
            <Typography variant='body1' gutterBottom component="h2">
                {product.name}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="h2">
                {product.price.formatted_with_code
}
            </Typography>
            </div>
            <Typography dangerouslySetInnerHTML ={{__html: product.description}} variant='body2' color="textsecondary"/>
            
        
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
            <IconButton aria-label='Add to Cart' onClick ={() => onAddTocart(product.id, 1)}>
                <AddShoppingCartIcon/>

            </IconButton>
        </CardActions>
        
    </Card>
  )
}

export default Product
