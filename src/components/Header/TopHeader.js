import { Container, Nav, Navbar } from "react-bootstrap";

const TopHeader = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "black",
        
          marginBottom: "5px",
          fontWeight: "bold",
      }}
    >
      <Container style={{ marginLeft: "40%", width: "50%" }}>
        {" "}
        <Nav.Link href="/shop" style={{ color: "white" }}>
          Shop
        </Nav.Link>
        <Nav.Link href="/homepage" style={{ color: "white" }}>
          Homepage
        </Nav.Link>
        <Nav.Link href="/" style={{ color: "white" }}>
          store
        </Nav.Link>
        <Nav.Link href="/about" style={{ color: "white" }}>
          About
        </Nav.Link>
        <Nav.Link href="/contact" style={{ color: "white" }}>
          Contact
        </Nav.Link>
      </Container>
    </Navbar>
  );
};
export default TopHeader;
