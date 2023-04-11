import React from 'react'
import { Typography, Grid, Button } from '@mui/material'
import { Container } from '@mui/system'
import useStyles from './Styles'
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'

const Cart = ({cart, handleUpdateQty,handleRemove, handleEmptyCart }) => {
    const classes =useStyles();


    const EmptyCart = () =>(
        <div>
        <Typography variant='subtitle1'> The cart is empty 🥱. Start adding some!
        </Typography>
        
        <Button variant="contained" color="error" component = {Link} to='/'> Click Here!</Button>
       

        </div>
    );

    const FilledCart = () =>(
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm ={4} key={item.id}>
                    <CartItem item ={item} onUpdate={handleUpdateQty} onRemove = {handleRemove}/>
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h6">
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} type='button' variant="contained" size='small' color="warning" onClick={handleEmptyCart}>Empty Cart</Button>
                <Button component= {Link} to='/checkout' className={classes.checkoutButton} type='button' variant="contained" size='small' color="secondary">CheckOut</Button>
                </div>

        </div>
        </>
    );
    if(!cart.line_items) return 'Loading...'
  return (
    <Container>
        <div className={classes.toolbar}/>
      <Typography className={classes.title} variant='h6' gutterBottom>Your Shopping Cart</Typography>
      {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
    </Container>
  )
}

export default Cart
