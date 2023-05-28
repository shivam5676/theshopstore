import About from "./components/pages/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home";
import { Nav } from "react-bootstrap";
import Homepage from "./components/pages/Homepage";

const router = createBrowserRouter([
  { path: "/", element: <Home> </Home> },
  { path: "/about", element: <About></About> },
  { path: "/homepage", element: <Homepage></Homepage> }
]);
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
