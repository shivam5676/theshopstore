import { Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Home from "./home";
import Contact from "./components/pages/Contact";
import Shop from "./components/pages/Shop";
import ShopItems from "./components/ShopItems";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/homepage">
          <Homepage></Homepage>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/shop" exact>
          <Shop></Shop>
        </Route>
        <Route path="/shop/:productid">
          <ShopItems></ShopItems>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
