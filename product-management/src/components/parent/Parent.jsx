import React, { useState } from "react";
import { Sibling } from "./Sibling";
import { Child1 } from "./Child1";
import { createContext } from "react";

export const UserContext = createContext();

export const Parent = () => {
  const [userName, setUserName] = useState("");

  const hanldeUserNameChange = (value) => setUserName(value);

  return (
    <>
      <UserContext.Provider
        value={{ userName: userName, onUserNameChange: hanldeUserNameChange }}
      >
        <Child1 />
        <Sibling />
      </UserContext.Provider>
    </>
  );
};
