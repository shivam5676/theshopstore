// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import Header from "./components/Header/Header";
import Product from "./components/Product";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [CartOpen, setCartOpen] = useState(false);
  const onCartOpen = () => {
    setCartOpen(true);
  };
  const onCartClose=()=>{
    setCartOpen(false)
  }
  return (
  
      <div>
        {CartOpen ? <Cart cartCloseHandler={onCartClose}></Cart> : ""}
        <Header CartOpenHandler={onCartOpen}></Header>
        <Product></Product>
      </div>
  
  );
}

export default App;
