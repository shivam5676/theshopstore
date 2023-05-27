import { Fragment, useContext } from "react";
import CartPrint from "../Cart/CartPrint";
import CartContext from "../../store/CartContext";
import { Button, Card } from "react-bootstrap";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const newitem = ctx.items.map((cartitem) => (
    <div key={cartitem.id} style={{ display: "flex" }}>
      <img
        src={cartitem.image}
        style={{ width: "90px", padding: "10px" }}
      ></img>

      <h2 style={{ padding: "10px", width: "280px" }}>{cartitem.title}</h2>
      <p style={{ padding: "10px", width: "100px" }}>{cartitem.price}</p>
      <div>
        <input
          type="number"
          value={cartitem.quantity}
          style={{ width: "50px", margin: "00px 20px 0px 0px" }}
        ></input>
        <Button>remove</Button>
      </div>
    </div>
  ));
  return (
    <Fragment>
      {" "}
      <button onClick={props.cartCloseHandler} style={{ float: "right" }}>
        close Cart
      </button>
      <CartPrint items={newitem}></CartPrint>
    </Fragment>
  );
};
export default Cart;
