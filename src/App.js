import { Switch, Route } from "react-router-dom";
import Product from "./components/Product";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Home from "./home";
import Contact from "./components/pages/Contact";

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
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
