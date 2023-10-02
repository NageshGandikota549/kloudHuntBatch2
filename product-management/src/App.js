import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Register } from "./components/register/Register";
import { Navigation } from "./components/navigation/Navigation";
import { Login } from "./components/login/Login";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
