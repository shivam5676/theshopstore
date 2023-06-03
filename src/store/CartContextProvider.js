import { useReducer } from "react";
import CartContext from "./CartContext";
import axios from "axios";
const defaultState = {
  items: [],
  totalAmount: 0,
};
const reducerfn = (state, action) => {
  if (action.type == "ADD") {
    const email = localStorage.getItem("userEmail");
    if (email) {
      const emailupdate = email.replace("@", "").replace(".", "");

      axios.post(
        `https://crudcrud.com/api/34fb42749b49411497de19dc992bdf69/cart${emailupdate}`,
        action.item
      );
    }

    const updatedtotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updateditems;

    if (existingItem) {
      const updateCurrentItem = {
        ...existingItem,
        quantity: action.item.quantity + existingItem.quantity,
      };
      updateditems = [...state.items];
      updateditems[existingItemIndex] = updateCurrentItem;
    } else {
      updateditems = [...state.items, action.item];
    }

    return { items: updateditems, totalAmount: updatedtotalAmount };
  }

  if (action.type == "Get cart data from backend") {
    const email = localStorage.getItem("userEmail");
    const emailupdate = email.replace("@", "").replace(".", "");

    const updatedtotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updateditems;

    if (existingItem) {
      const updateCurrentItem = {
        ...existingItem,
        quantity: action.item.quantity + existingItem.quantity,
      };
      updateditems = [...state.items];
      updateditems[existingItemIndex] = updateCurrentItem;
    } else {
      updateditems = [...state.items, action.item];
    }

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

  const recieveItemfromBackend = (item) => {
    dispatchfn({
      type: "Get cart data from backend",
      item: item,
    });
  };
  const cartcontexthelper = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
    recieveItem: recieveItemfromBackend,
  };
  return (
    <CartContext.Provider value={cartcontexthelper}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
