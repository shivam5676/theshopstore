import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Home from "./home";
import Contact from "./components/pages/Contact";
import Shop from "./components/pages/Shop";
import ShopItems from "./components/ShopItems";
import Login from "./components/Login/Login";
import AuthContextProvider from "./store/authContextProvider";
import AuthContext from "./store/authContext";
import { useContext } from "react";
function App() {
  const authctx = useContext(AuthContext);
  return (
    <AuthContextProvider>
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

        <Route path="/auth">
          <Login></Login>
        </Route>
       

        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </AuthContextProvider>
  );
}

export default App;
