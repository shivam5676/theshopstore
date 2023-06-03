import { useState } from "react";
import AuthContext from "./authContext";

const AuthContextProvider = (props) => {
  const [isLoggedin, setIsloggedin] = useState(localStorage.getItem("e-user"));

  console.log(isLoggedin)

  const addTokenHandler = (token) => {
    setIsloggedin(true);

    localStorage.setItem("e-user", token);
    console.log("auth token")
    console.log(isLoggedin)
  };
  const removeTokenHandler = () => {
    setIsloggedin(false);

    localStorage.removeItem("e-user");
  };

  const authContextHelper = {
    isLogged: isLoggedin,
    addToken: addTokenHandler,
    removeItem: removeTokenHandler,
  };

  return (
    <AuthContext.Provider value={authContextHelper}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
