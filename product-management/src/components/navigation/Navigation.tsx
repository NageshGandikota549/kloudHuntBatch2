import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="link-container">
      <Link to={"/dashboard"}>
        <div className="link">Dashboard</div>
      </Link>
      <Link to={"/register"}>
        <div className="link">Register</div>
      </Link>
      <Link to={"/login"}>
        <div className="link">Login</div>
      </Link>
      <Link to={"/product-list"}>
        <div className="link">ProductList</div>
      </Link>
      <Link to={"/parent"}>
        <div className="link">Parent</div>
      </Link>
      <Link to={"/categories"}>
        <div className="link">Categories</div>
      </Link>
    </div>
  );
};
