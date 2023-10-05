import React, { useEffect, useState } from "react";

export const ProductList = () => {
  const [userName, setUserName] = useState("");

  //Mounting
  useEffect(() => {
    // call an API to get data on page load
  }, []); //empty dependency array

  //Updating phase
  useEffect(() => {
    console.log("line 13", userName);
  }, [userName]); // dependency array with state(s)

  const handleResize = () => {
    console.log(window.innerWidth);
  };

  //Unmounting phase
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      //statements
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <input onChange={handleUserNameChange} value={userName} type="text" />
      {userName}
    </div>
  );
};
