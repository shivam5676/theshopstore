
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const totalLength=ctx.items.reduce((prevQuantitySum,currentItem)=>{
    return (prevQuantitySum+currentItem.quantity)
  },0)
  return (
    <button onClick={props.onClick} style={{borderRadius:"12px",backgroundColor:"tomato"}}>
      <span style={{ backgroundColor: "yellow",borderRadius:"12px",fontWeight:"bold",paddingLeft:"25px",paddingRight:"15px",margin:"5px"}}>Cart</span>
      <span style={{ fontWeight: "bolder",color:"white" }}>{totalLength}</span>
    </button>

  );
};
export default HeaderCartButton;
