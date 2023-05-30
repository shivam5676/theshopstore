import { Card, Container, Nav, Navbar } from "react-bootstrap";

const Shop = () => {
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

      <section>
        <Container style={{ height: "230px" }}>
          
            <Nav.Link href="/shop/iphone12">
              <img
                src="/iphone12/iphone12-2.jpg"
                alt="iPhone 12"
                style={{ width: "180px", height: "240px", float: "left",marginRight:"50px" }}
              ></img>
              <h3 style={{ margin: "15px" }}>iphone 12 pro 8/128 gb</h3>
            </Nav.Link>
          
        </Container>
        <hr></hr>
        <Container style={{ height: "250px" }}>
          <Nav.Link href="/shop/iphone14">
            <img
              src="/iphone14/iphone14-3.jpg"
              alt="iPhone 14"
              style={{ width: "180px", height: "240px", float: "left" ,marginRight:"50px"}}
            ></img>
            <h3 style={{ margin: "15px" }}>iphone 14 pro 8/256 gb</h3>
          </Nav.Link>
        </Container>
        <hr></hr>
        <Container style={{ height: "250px" }}>
          <Nav.Link href="/shop/samsungs23/">
            <img
              src="/samsungs23/samsungs23-1.jpg"
              alt="iPhone 14"
              style={{ width: "180px", height: "240px", float: "left" ,marginRight:"50px"}}
            ></img>
            <h3 style={{ margin: "15px" }}>samsung S23 12/256 gb</h3>
          </Nav.Link>
        </Container>
      </section>
    </div>
  );
};
export default Shop;
