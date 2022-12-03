import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BuyBook = () => {
  const history = useNavigate();
  const [bookname, setBookname] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/orders", {
        bookname: String(bookname),
        contact: String(contact),
        address: String(address),
      })
      .then((res) => res.data);
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact, address);
    sendRequest().then(() => history("/orders"));
  };

  return (
    <div>
        <form onSubmit={e => {handleSubmit(e)}}>
        <label>contact</label>
        <br />
        <input 
          name='contact' 
          type='text'
          onChange={() => (e) => setContact(e.target.value)}
        />
        <br/>
        <label>Address</label>
        <br />
        <input 
          name='address' 
          type='text'
          onChange={() => (e) => setAddress(e.target.value)}
        />
        <br />
        <input 
          className='submitButton'
          type='submit' 
          value='buy' 
        />
      </form>
    </div>
  )
}

export default BuyBook