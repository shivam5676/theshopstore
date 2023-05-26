import { createContext } from "react"

const CartContext=createContext({
    item:[],
    totalAmount:0,
    addItem:(item)=>{}
});
export default CartContext;
    