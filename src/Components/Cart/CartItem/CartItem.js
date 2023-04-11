import React from 'react'
import { CardMedia, Typography, Card, CardContent, CardActions, Button } from '@mui/material'
import useStyles from './styles.js'

const CartItem = ({item, onUpdate, onRemove}) => {
    const classes = useStyles();
  return (
    
      <Card>
        <CardMedia image={item.image.url} alt={item.name} className={classes.media}/>
        <CardContent className= {classes.cardContent}>
            <Typography>{item.name}</Typography>
            <Typography>{item.line_total.formartted_with_symbols}</Typography>
        </CardContent>
        <CardActions className={classes.cartActions}>
            <div className={classes.buttons}>
                <Button type="button" size="small" onClick={() =>onUpdate(item.id, item.quantity - 1)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type="button" size="small" onClick={() =>onUpdate(item.id, item.quantity + 1)}>+</Button>
            </div>
            <Button variant="contained" color="secondary" onClick={() => onRemove(item.id)}>Remove</Button>
        </CardActions>

      </Card>
    
  )
}

export default CartItem
