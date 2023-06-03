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
import DataReciever from "./components/dataReciever";
function App() {
  const authctx = useContext(AuthContext);
  return (
    
    <div>
      <Switch>
        <Route path="/homepage">
          <Homepage></Homepage>
        </Route>

        <Route path="/about">
          {authctx.isLogged ? (
            <About></About>
          ) : (
            <Redirect to="/auth"></Redirect>
          )}
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/auth">
          <Login></Login>
        </Route>
        {/* {authctx.isLogged && <Route path="/shop">
          <Shop></Shop>
        </Route>} */}
        

        <Route path="/shop" exact>
          {authctx.isLogged ? <Shop></Shop> : <Redirect to="/auth"></Redirect>}
        </Route>

        <Route path="/shop/:productid">
          {authctx.isLogged?<ShopItems></ShopItems>:<Redirect to="/auth"></Redirect>}
        </Route>

        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
      <DataReciever></DataReciever>
      </div>
      
  );
}

export default App;
