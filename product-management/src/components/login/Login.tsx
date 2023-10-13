import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import "./login.css";

interface IUserDetails {
  name: string;
  age: number;
  address: string | number;
  phone: number;
  dob: Date;
}

export const Login = () => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userDetails, setUserDetails] = useState<IUserDetails[]>([]);
  const [ticketNumbers, setTicketNumbers] = useState<number[]>([]);

  // let firstName: string = "peter";
  // let age: number = 10;
  // let isVoter: boolean = true;
  // let Dob: Date = new Date();

  // setUserDetails({
  //   name: "nagesh",
  //   age: 29,
  //   address: "zyz",
  //   phone: 23432424,
  //   dob: new Date(),
  // });

  const userIdRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (userIdRef && userIdRef.current) userIdRef.current.focus();
  }, []);

  const calculateSum: Function = (a: number, b: number): number => {
    return a + b;
  };

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

  return (
    <div className="login-container">
      {calculateSum(1, 3)}
      <img src="login-avatar.png" alt="Avatar" />
      <div>
        <label htmlFor="user-id">UserId: </label>
        <input
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
          type="password"
          placeholder="Enter Password"
          onChange={handlePasswordChange}
          id="password"
        />
      </div>
      <div className="buttons">
        <button onClick={handleSubmit}>Submit</button>
        <button type="button">Cancel</button>
      </div>
      <label>
        <input type="checkbox" name="remember" /> Remember me
      </label>
    </div>
  );
};
