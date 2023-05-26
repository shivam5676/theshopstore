import { Button } from "react-bootstrap"
import Cart from "../Cart/Cart"

const HeaderCartButton=(props)=>{
    return(
        <Button onClick={props.onClick}>Cart</Button>
        
    )
}
export default HeaderCartButton