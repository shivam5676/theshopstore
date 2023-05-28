import { Button, Container, Nav, Navbar } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";

const Header = (props) => {
  const CartOpen = () => {
    props.CartOpenHandler();
  };

  return (
    <div>
      <Nav
  style={{
    backgroundColor: "black",
    paddingLeft: "50%",
    marginBottom: "5px",
    fontWeight: "bold",
  }}
>
  <Nav.Link href="/homepage" style={{ color: "white" }}>
    Homepage
  </Nav.Link>
  <Nav.Link href="/" style={{ color: "white" }}>
    store
  </Nav.Link>
  <Nav.Link href="/about" style={{ color: "white" }}>
    About
  </Nav.Link>
</Nav>

      <Navbar bg="success" expand="sm" variant="dark">
        {" "}
        <Container className="justify-content-center">
          {" "}
          <Navbar.Brand>
            <h1>The GENERICS</h1>{" "}
          </Navbar.Brand>
        </Container>
        <HeaderCartButton onClick={CartOpen}></HeaderCartButton>
      </Navbar>
    </div>
  );
};
export default Header;
