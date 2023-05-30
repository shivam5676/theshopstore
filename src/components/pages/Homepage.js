import { Container, Nav, Navbar } from "react-bootstrap";
import HomepageTour from "../HomepageTour";
import TopHeader from "../Header/TopHeader";

const Homepage = () => {
  return (
    <div>
      {" "}
    <TopHeader></TopHeader>
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
