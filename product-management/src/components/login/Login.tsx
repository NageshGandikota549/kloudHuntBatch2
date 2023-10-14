import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import "./login.css";

export const Login = () => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const userIdRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (userIdRef && userIdRef.current) userIdRef.current.focus();
  }, []);

  const handleUserIdChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setUserId(value);
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = (): void => {
    console.log(userId, password);
  };

  const handleCancel = () => {
    setUserId("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <img data-testid="user-profile" src="login-avatar.png" alt="Avatar" />
      <div>
        <label htmlFor="user-id">UserId: </label>
        <input
          value={userId}
          ref={userIdRef}
          type="text"
          placeholder="Enter Username"
          onChange={handleUserIdChange}
          id="user-id"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          value={password}
          type="password"
          placeholder="Enter Password"
          onChange={handlePasswordChange}
          id="password"
        />
      </div>
      <div className="buttons">
        <button disabled={!userId || !password} onClick={handleSubmit}>
          Submit
        </button>
        <button onClick={handleCancel} type="button">
          Cancel
        </button>
      </div>
      <label>
        <input type="checkbox" name="remember" /> Remember me
      </label>
    </div>
  );
};
