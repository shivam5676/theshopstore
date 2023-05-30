import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
const ShopItems = () => {
  const params = useParams();
  const picA = `/${params.productid + "/" + params.productid + "-1.jpg"}`;
  const picB = `/${params.productid + "/" + params.productid + "-2.jpg"}`;
  const picC = `/${params.productid + "/" + params.productid + "-3.jpg"}`;
  const picD = `/${params.productid + "/" + params.productid + "-4.jpg"}`;
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container
          style={{ marginLeft: "10%", marginRight: "10%", color: "white" }}
        >
          <Nav.Link href="/shop" style={{ color: "white" }}>
            <Navbar.Brand style={{ fontWeight: "bolder", fontSize: "30px" }}>
              THE GENERICS
            </Navbar.Brand>
          </Nav.Link>
          <input style={{ paddingLeft: "20%" }}></input>

          <Nav.Link href="/homepage">
            <h4>Homepage</h4>
          </Nav.Link>
          <Nav.Link href="/store">
            <h4>store</h4>
          </Nav.Link>
          <Nav.Link href="/about">
            <h4>About</h4>
          </Nav.Link>
          <Nav.Link href="/contact">
            <h4>contact</h4>
          </Nav.Link>
        </Container>
      </Navbar>

      <Container
        style={{
          width: "30%",
          marginLeft: "5%",
          marginRight:"2%",
          borderStyle: "outset",
          float: "left",
        }}
      >
        <Row>
          <Col>
            {" "}
            <img
              src={picA}
              alt="iPhone 12"
              style={{ width: "180px", height: "240px", float: "left" }}
            ></img>
            <img
              src={picB}
              alt="iPhone 12"
              style={{
                width: "180px",
                height: "240px",
                float: "left",
                paddingLeft: "20px",
              }}
            ></img>
          </Col>

          <hr></hr>
          <Col>
            {" "}
            <img
              src={picC}
              alt="iPhone 12"
              style={{ width: "180px", height: "240px", float: "left" }}
            ></img>
            <img
              src={picD}
              alt="iPhone 12"
              style={{
                width: "180px",
                height: "240px",
                float: "left",
                paddingLeft: "20px",
              }}
            ></img>
          </Col>
        </Row>
      </Container>
      <h1>{params.productid}</h1>
    </div>
  );
};
export default ShopItems;
