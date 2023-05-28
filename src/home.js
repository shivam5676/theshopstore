import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Product from "./components/Product";
import { Nav } from "react-bootstrap";

const Home = () => {
  const [CartOpen, setCartOpen] = useState(false);

  const onCartOpen = () => {
    setCartOpen(true);
  };
  const onCartClose = () => {
    setCartOpen(false);
  };
  return (
    <div>
     
      {CartOpen ? <Cart cartCloseHandler={onCartClose}></Cart> : ""}
      <Header CartOpenHandler={onCartOpen}></Header>
      <Product></Product>
    </div>
  );
};
export default Home;
