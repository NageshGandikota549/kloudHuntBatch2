import React, { useState } from "react";
import './login.css'

export const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleUserIdChange = (event) => {
    const value = event.target.value;
    setUserId(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = () => {
    console.log(userId, password);
  };

  return (
    <div className="login-container"> 
    <img src="login-avatar.png" alt="Avatar"/>
      <div>
        <label for="user-id">UserId: </label>
        <input type="text" placeholder="Enter Username" onChange={handleUserIdChange} id="user-id" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" placeholder="Enter Password" onChange={handlePasswordChange} id="password" />
      </div>
      <div className="buttons">
      <button onClick={handleSubmit}>Submit</button>
      <button type="button" >Cancel</button>
      </div>
    <label>
      <input type="checkbox"  name="remember"/> Remember me
      </label>
    </div>
  );
};
