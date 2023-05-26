import { Button, Card, Container } from "react-bootstrap";

const CartPrint = (props) => {
    const totalAmount=props.quantity*props.price;
  return (
    <div>
      <Container>
        <span>
          <Card.Body>
            <Card.Img
              src={props.images}
              alt="Beautiful flower"
              style={{ width: "6rem", padding: "7px" }}
            ></Card.Img>
            <span style={{ padding: "35px" }}>
              <span>{props.title}</span>
            </span>
            <span style={{ padding: "35px" }}>
              <span>{props.price}</span>
            </span>

            <span style={{ padding: "35px" }}>
              <span style={{padding:"10px"}}>{props.quantity}</span>
              <Button variant="danger" >REmove</Button>
            </span>
          </Card.Body>
          
        </span>
      </Container>
      
    </div>
  );
};
export default CartPrint;
