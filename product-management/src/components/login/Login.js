import React, { useState } from "react";

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
    <div>
      <div>
        <label for="user-id">UserId: </label>
        <input type="text" onChange={handleUserIdChange} id="user-id" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" onChange={handlePasswordChange} id="password" />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
