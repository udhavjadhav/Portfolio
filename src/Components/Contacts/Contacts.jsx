import styled from "styled-components";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Container = styled.div`
  /* background-color: #fff; */
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  justify-content: center;  
`
const Container1 = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 10px;

  input, textarea{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding: 12px;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 5px;
    margin-bottom: 30px;
    width: 100%;
    font-size: 16px;
    background-color: transparent;
  }

   button {
    margin-top: 25px ;
    color: white;
    background-color: #f72145;
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #005F6B;
    }
  } 
`;

const H1 = styled.h1`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#fff;
  margin: 100px 0 50px;
`
const P = styled.p`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
`
const H4 = styled.h4`
  color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
`

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("")

  const handleSubmit = (e) =>{
    if(name === '' || email === '' || msg === ''){
      setError("Please enter all the details!")
    }
    else{
      setError("")
      setName("")
      setEmail("")
      setMsg("")
      setSuccess("Success!")
    }

  }
  return (
    <>
      <Navbar />
      <H1>Contact Us</H1>
      <Container>
        <Container1>
          <div className="container">
              <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name"/>
              <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email"/>
              <textarea onChange={(e)=>setMsg(e.target.value)}  placeholder="Message" rows="8" cols="50"/>
              <button  onClick={(e) => handleSubmit(e)} type="submit" >Submit</button>
           <P>{error}</P>
           <H4>{success}</H4>
          </div>
        </Container1>
      </Container>
    </>
  );
};

export default Contacts;