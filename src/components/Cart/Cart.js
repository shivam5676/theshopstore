import CartPrint from "../Cart/CartPrint";

const Cart = () => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
  return (
    <div>
      {cartElements.map((cartitem) => (
        <CartPrint
          images={cartitem.imageUrl}
          price={cartitem.price}
          title={cartitem.title}
          quantity={cartitem.quantity}
        ></CartPrint>
      ))}
    </div>
  );
};
export default Cart;
