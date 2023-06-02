import { createContext } from "react"

const AuthContext=createContext(
{
    token:"",
    isLogged:"",
    addToken:(token)=>{},
    removeItem:()=>{}
})
export default AuthContext;