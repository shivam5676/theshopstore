import { Card, Col, Container, Row } from "react-bootstrap";

const ProductPrint = (props) => {
  const price = `$${props.price.toFixed()}`;
  console.log(props);
  return (
    <div>
      <Container className="justify-content-center">
        <Card style={{ width: "18rem" }} className="justify-content-center">
          <Card.Title>{props.title}</Card.Title>
          <Card.Img src={props.image}></Card.Img>
          <Card>
            <b>{price}</b>
          </Card>
        </Card>
      </Container>
    </div>
  );
};
export default ProductPrint;
