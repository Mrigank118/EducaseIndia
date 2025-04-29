import "./App.css";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return <div className="app">
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </div>;
}

export default App;