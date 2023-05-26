// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import Header from "./components/Header/Header";
import Product from "./components/Product";
import Cart from "./components/Cart/Cart";



function App() {
 const[CartOpen,setCartOpen]= useState(false)
 const onCartOpen=()=>{
setCartOpen(true)
 }
  return (
    <div>
      {CartOpen?<Cart></Cart>:""}
      <Header CartOpenHandler={onCartOpen}></Header>
      <Product ></Product>

    </div>
  );
}

export default App;
