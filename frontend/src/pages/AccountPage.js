import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AccountPage.css";
import { Link } from "react-router-dom";

export default function AccountPageLoginIn() {

  const [user, setInfo] = useState({
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
      name : user.name,
      password: user.password
    }

    axios({
      url: '/account/auth',
      method: 'POST',
      data: payload
    })
    .then((result) => {
      console.log(result);
      if(result.data === 'found'){
        navigate('/');
      }else{
        alert('User not found');
      }
    })
}


  return (
    <div className="Login">
      <main>
        <h1>Account Page</h1>
        <p>Enter your account details below</p>
        <form onSubmit={sendUser}>
        <div className="login-name">
        <label for="name">User Name</label>
          <br />
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={user.name}
            onChange={handleChange} 
          />
          </div>
          <br />
          <div className="login-password">
          <label for = "password">Password</label>
          <br />
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={user.password}
            onChange={handleChange}  
          />
          </div>
          <br />
          <button className="login-btn">Login</button>
          <br />
          <Link to="/account/signup"><button className="register-btn">Create your new account</button></Link>
          <br />
        </form>
      </main>
    </div>
  );
}