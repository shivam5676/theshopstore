import { Container, Nav, Navbar } from "react-bootstrap";
import HomepageTour from "./HomepageTour";

const Homepage = () => {
  return (
    <div>
      {" "}
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
      </Navbar>{" "}
      <h1
        style={{
          paddingLeft: "50%",
          marginBottom: "5px",
          fontWeight: "bold",
        }}
      >
        Tours
      </h1>
      <HomepageTour></HomepageTour>
    </div>
  );
};
export default Homepage;
