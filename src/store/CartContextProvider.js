import { useReducer } from "react";
import CartContext from "./CartContext";
const defaultState = {
  items: [],
  totalAmount: 0,
};
const reducerfn = (state, action) => {
  if (action.type == "ADD") {
    const updatedtotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    const updateditems = [...state.items, action.item];

    return { items: updateditems, totalAmount: updatedtotalAmount };
  }
  return defaultState;
};

const CartContextProvider = (props) => {
  const [state, dispatchfn] = useReducer(reducerfn, defaultState);

  const addItemHandler = (item) => {
    dispatchfn({
      type: "ADD",
      item: item,
    });
  };
  const cartcontexthelper = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
  };
  return (
    <CartContext.Provider value={cartcontexthelper}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
