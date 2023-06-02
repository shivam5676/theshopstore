import {useState} from "react";
import AuthContext from "./authContext";


const AuthContextProvider=(props)=>{
 const[isLoggedin,setIsloggedin]=   useState(localStorage.getItem("e-user"))
 
const addTokenHandler=(token)=>{
setIsloggedin(true);

localStorage.setItem("e-user",token)
}
const removeTokenHandler=()=>{
    setIsloggedin(false)

    localStorage.removeItem("e-user")

}

const authContextHelper={

    isLogged:isLoggedin,
    addToken:addTokenHandler,
    removeItem:removeTokenHandler
}

return(
<AuthContext.Provider value={authContextHelper}>{props.children}</AuthContext.Provider>
)
}
export default AuthContextProvider;