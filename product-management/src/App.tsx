import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./components/register/Register";
import { Navigation } from "./components/navigation/Navigation";
import { Login } from "./components/login/Login";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Dashboard } from "./components/dashboard/Dashboard";
// import { Register } from "./components/register/Register";
// import { Navigation } from "./components/navigation/Navigation";
// import { Login } from "./components/login/Login";
// import { ProductList } from "./components/product-list/ProductList";

// //theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import { ProductDetails } from "./components/product-details/ProductDetails";
// import { Parent } from "./components/parent/Parent";
// import { Categories } from "./components/categories/Categories";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
