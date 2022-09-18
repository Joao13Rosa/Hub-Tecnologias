import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";
import Dashboard from "./components/Dashboard/Dashboard";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
