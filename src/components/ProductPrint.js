import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CartContext from "../store/CartContext";
import AuthContext from "../store/authContext";

const ProductPrint = (props) => {
  const price = `$${props.price.toFixed()}`;
const ctx= useContext(CartContext)
const authCtx=useContext(AuthContext)

const additemhandler=()=>{
  ctx.addItem({
    id:props.id,
    title:props.title,
    quantity:1,
    price:props.price,
    image:props.image,
    email:authCtx.email
  })

  
}

  return (
    <div style={{marginLeft:"20%"}}>
      {/* <Container className="justify-content-center"> */}
        <Card style={{ width: "18rem" }} className="justify-content-center">
          <Card.Title>{props.title}</Card.Title>
          <Card.Img src={props.image}></Card.Img>
          <Card>
            <b>{price}</b>
          </Card>
          <button onClick={additemhandler}>addItem</button>
        </Card>
      {/* </Container> */}
    </div>
  );
};
export default ProductPrint;
