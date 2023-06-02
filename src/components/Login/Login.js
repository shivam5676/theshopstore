import { Container, Navbar } from "react-bootstrap";
import TopHeader from "../Header/TopHeader";
import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import AuthContext from "../../store/authContext";
import {Redirect} from "react-router-dom"

const Login = () => {
 const authCtx= useContext(AuthContext)
  const emailRef = useRef();
  const passwordRef = useRef();

  const formDataAHandler = (event) => {
    event.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbQjM5ZHO-YFs3fe1rVxJb0vKfGBYqgWs",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Authentication failed");
        }
      })
      .then((data) => {
     
        authCtx.addToken(data.idToken)
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  return (
    <div>
      {authCtx.isLogged?<Redirect to="/shop"></Redirect>:<div><TopHeader></TopHeader>
      <Navbar bg="success" expand="sm" variant="dark">
        {" "}
        <Container className="justify-content-center">
          {" "}
          <Navbar.Brand>
            <h1>The GENERICS</h1>{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div
        style={{
          width: "50%",
          height: "120px",
          marginLeft: "35%",
          marginTop: "70px",
          backgroundColor: "darkgoldenrod",
        }}
      >

        <form onSubmit={formDataAHandler}>
          <label>Email</label>
          <input type="email" ref={emailRef}></input>
          <br></br>
          <label>Password</label>
          <input type="password" ref={passwordRef}></input>
          <button>Login</button>
        </form>
       
      </div></div>}
      
    </div>
  );
};
export default Login;
