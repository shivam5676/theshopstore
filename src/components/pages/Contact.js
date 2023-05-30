import { useEffect } from "react";
import { useState } from "react";
import { Alert, Container, Nav, Navbar } from "react-bootstrap";
import TopHeader from "../Header/TopHeader";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isValid, setisValid] = useState(false);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };

  const formDataHandler = (event) => {
    event.preventDefault();
    const contactObj = {
      name: name,
      email: email,
      phone: phone,
    };
    const response = fetch(
      "https://contactdetails-4a8bb-default-rtdb.firebaseio.com/myStore.json",
      {
        method: "POST",
        body: JSON.stringify(contactObj),
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        console.log("error");
      });
    setEmail("");
    setName("");
    setPhone("");
    console.log(response);
  };
  return (
    <div>
      <TopHeader></TopHeader>

      <Navbar bg="success" expand="sm" variant="dark">
        {" "}
        <Container className="justify-content-center">
          {" "}
          <Navbar.Brand>
            <h1>The GENERICS</h1>{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>

      <h1 style={{ marginLeft: "40%" }}>Contact page</h1>

      <Container
        style={{ backgroundColor: "yellow", width: "250px", marginTop: "20px" }}
      >
        <form onSubmit={formDataHandler}>
          <label>NAme</label>
          <input onChange={nameChangeHandler} value={name} required></input>
          <label>Email Id</label>
          <input onChange={emailChangeHandler} value={email} required></input>
          <label>Phone Number</label>
          <input onChange={phoneChangeHandler} value={phone} required></input>
          <button>Submit</button>
        </form>
      </Container>
    </div>
  );
};
export default Contact;
