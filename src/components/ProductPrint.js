import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CartContext from "../store/CartContext";

const ProductPrint = (props) => {
  const price = `$${props.price.toFixed()}`;
  const ctx = useContext(CartContext);
  const additemhandler = (event) => {
    event.preventDefault()
    ctx.addItem({
      title:props.title,
      price:props.price,
      quantity: 1,
    });
  };

  return (
    <div>
      <Container className="justify-content-center">
        <Card style={{ width: "18rem" }} className="justify-content-center">
          <Card.Title>{props.title}</Card.Title>
          <Card.Img src={props.image}></Card.Img>
          <Card>
            <b>{price}</b>
          </Card>
          <button onClick={additemhandler}>addItem</button>
        </Card>
      </Container>
    </div>
  );
};
export default ProductPrint;
