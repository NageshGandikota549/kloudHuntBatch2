import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Register } from "./components/register/Register";
import { Navigation } from "./components/navigation/Navigation";
import { Login } from "./components/login/Login";
import { ProductList } from "./components/product-list/ProductList";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
        
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/product-list" Component={ProductList} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
