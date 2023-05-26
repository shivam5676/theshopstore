import { Container, Navbar } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const CartOpen=()=>{
    props.CartOpenHandler();
  }

  return (
    <Navbar bg="success" expand="sm" variant="dark" >
      {" "}
      <Container className="justify-content-center" >
        {" "}
        <Navbar.Brand><h1>The GENERICS</h1> </Navbar.Brand>
      </Container>
      <HeaderCartButton onClick={CartOpen}></HeaderCartButton>
    </Navbar>
  );
};
export default Header;
