import { useContext, useEffect } from "react";
import CartContext from "../store/CartContext";
import axios from "axios";
import React from "react";

//we made this component to get our cart data back from backend end server for first time when this comnponent get rendered -

const DataReciever = () => {
  const email = localStorage.getItem("userEmail");
  if (email) {
    const emailupdate = email.replace("@", "").replace(".", "");
    const ctx = useContext(CartContext);
    useEffect(() => {
      axios
        .get(
          `https://crudcrud.com/api/34fb42749b49411497de19dc992bdf69/cart${emailupdate}`
        )
        .then((response) => {
          response.data.forEach((item) => {
            ctx.recieveItem(item);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  }
};
export default DataReciever;
