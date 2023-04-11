import { useEffect, useState } from 'react';
import './App.css';
import {Products, Navbar, Cart, Checkout} from './Components'
import {commerce} from './Components/lib/commerce'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
 const [products, setProducts] = useState([]);
 const [cart, setCart] = useState({});
 
const fetchProducts = async () =>{
  const { data } = await commerce.products.list();

  setProducts( data );
}

const fetchCart = async () => {
  setCart(await commerce.cart.retrieve());
}

const handleAddToCart = async (productId, quantity) => {
  setCart(await commerce.cart.add(productId, quantity))
}
  
const handleUpdateQty = async (lineItemId, quantity) => {
  setCart(await commerce.cart.update(lineItemId, {quantity}))
}
const handleRemove = async ( productId) => {
  setCart(await commerce.cart.remove(productId))

}
const handleEmptyCart = async() => {
  setCart(await commerce.cart.empty())
}




useEffect(()=> {
  fetchProducts();
  fetchCart();
}, []);
// console.log(cart);
  return (
    <Router>
    <div className="App">
      
      <Navbar totalItems={cart.total_items}/>
      <Routes>
        <Route exact path='/' element={ <Products products={products} onAddTocart = {handleAddToCart}/>}/>
       
        <Route exact path='/cart' element={<Cart cart={cart} handleUpdateQty={handleUpdateQty} 
        handleRemove = {handleRemove} handleEmptyCart = {handleEmptyCart}/>}/>

        <Route exact path='/checkout' element ={<Checkout cart={cart}/>} />
    
    </Routes>
       </div>
    </Router>
  );
}

export default App;
