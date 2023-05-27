import { useContext } from "react";
import { Button, Card, Container } from "react-bootstrap";
import CartContext from "../../store/CartContext";

const CartPrint = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>CART</h1>
      <div style={{ marginLeft:"300px",marginRight:"300px"}}>
        <hr style={{ height:"2px", backgroundColor:"red" }} />
      </div>

      <div style={{ display: "flex", padding: "10px" }}>
        <h3 style={{ padding: "10px 10px 0px 15px" }}> Item</h3>
        <h3 style={{ padding: "10px 10px 0px 290px" }}>Price</h3>
        <h3 style={{ padding: "10px 10px 0px 25px" }}>Quantity</h3>
      </div>
      <div>{props.items}</div>
      <hr style={{height:"50px"}}></hr>
      <h1 style={{ textAlign: "right" }}>
        <b style={{ paddingRight: "10px" }}> Total </b>
        {totalAmount}
      </h1>
    </div>
  );
};
export default CartPrint;
