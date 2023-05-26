import CartContext from "./CartContext";

const CartContextProvider = () => {
  const addItemHandler = (item) => {
    console.log("item");
  };
  const cartcontexthelper = {
    item: [],
    totalAmount: 0,
    addItem: addItemHandler,
  };
  return (
    <CartContext.Provider value={cartcontexthelper}></CartContext.Provider>
  );
};
export default CartContextProvider;
