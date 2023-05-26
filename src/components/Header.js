import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="success" expand="sm" variant="dark" >
      {" "}
      <Container className="justify-content-center" >
        {" "}
        <Navbar.Brand><h1>The GENERICS</h1> </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
