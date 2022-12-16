import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/SignupPage.css";

export default function AccountPageSignUp() {
  const [newUser, setInfo] = useState({
    name: '',
    password: ''
  });

  const navigate = useNavigate();

  let handleChange = ({target}) => {
    const {name, value} = target;
    setInfo(prevValues => {
      return {
        ...prevValues,
        [name] : value
      }
    });
  };

  let sendUser = (event) => {
    event.preventDefault();

    let payload = {
      name : newUser.name,
      password: newUser.password
    }

    axios({
      url: '/api/account/signup',
      method: 'POST',
      data: payload
    })
      .then(() => {
        navigate('/account');
      })
  }

  return (
    <div className="Signup">
      <main>
        <h1>Sign Up</h1>
        <p>Enter your account details below</p>
        <form onSubmit={sendUser}>
          <div className="signup-name">
              <label for="name">Name</label>
          <br />
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={newUser.name}
            onChange={handleChange} 
          />
          </div>
          <br />
          <div className="signup-password">
          <label for = "password">Password</label>
          <br />
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={newUser.password}
            onChange={handleChange}  
          />
          </div>
          <br />
     
          <button type="submit-buttom"> Submit </button>
      
          <br />
          </form>
      </main>
    </div>
  );
}