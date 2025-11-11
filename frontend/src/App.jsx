import Home from "./pages/Home";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Jegy from "./components/Jegy";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menetrend from "./components/menetrend";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jegy" element={<Jegy />} />
        <Route path="/menetrend" element={<Menetrend />} />
      </Routes>
    </BrowserRouter>
  )
} 

export default App;
