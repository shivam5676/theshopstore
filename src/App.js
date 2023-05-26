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
  return (
    <CartContextProvider>
      <div>
        {CartOpen ? <Cart></Cart> : ""}
        <Header CartOpenHandler={onCartOpen}></Header>
        <Product></Product>
      </div>
    </CartContextProvider>
  );
}

export default App;
