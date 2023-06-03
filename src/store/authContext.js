import { createContext } from "react"

const AuthContext=createContext(
{
    addEmail:(emaildata)=>{},
    token:"",
    isLogged:"",
    addToken:(token)=>{},
    removeItem:()=>{}
})
export default AuthContext;