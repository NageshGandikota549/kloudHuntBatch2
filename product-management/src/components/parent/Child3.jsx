import React, { useContext } from "react";
import { UserContext } from "./Parent";

export const Child3 = () => {
  const { userName, onUserNameChange } = useContext(UserContext);

  const handleUserNameChange = (event) => onUserNameChange(event.target.value);
  return (
    <div>
      Child3
      <input type="text" value={userName} onChange={handleUserNameChange} />
      --- {userName}
    </div>
  );
};
