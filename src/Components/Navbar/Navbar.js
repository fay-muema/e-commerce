import {AppBar, IconButton, Toolbar, Typography, Badge} from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStyles from './Styles'
import Logo from '../images/beauty.png'
import {Link, useLocation} from 'react-router-dom'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
  return (
    <div>
        <AppBar position='fixed' className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to='/' className={classes.title} color="inherit">
                    <img src={Logo} alt='logo' className={classes.image} height="25px"/>
                    TruElegance
                </Typography>
                <div className={classes.grow}/>
                { location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton component = {Link} to='/cart' aria-label='Show cart items' >
                        <Badge badgeContent={totalItems} color="success">
                        <ShoppingCartIcon/>
                        </Badge>
                        
                    </IconButton>
                </div>
                )}
            </Toolbar>
        </AppBar>
      
    </div>
  )
}

export default Navbar
