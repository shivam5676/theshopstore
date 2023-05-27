import { Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  return (
    <button onClick={props.onClick} style={{borderRadius:"12px",backgroundColor:"tomato"}}>
      <span style={{ backgroundColor: "yellow",borderRadius:"12px",fontWeight:"bold",paddingLeft:"25px",paddingRight:"15px",margin:"5px"}}>Cart</span>
      <span style={{ fontWeight: "bolder",color:"white" }}>{ctx.items.length}</span>
    </button>
  );
};
export default HeaderCartButton;
