import { useState } from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  const [theme, setTheme] = useState("DARK");  

  return (
    <div className={`${theme === "DARK" ? "bg-[#1a1a1a] text-white" : "bg-white text-black"} min-h-screen`}>
      <Router>
      <Navbar theme={theme}/>
      <Routes>
        <Route path="/" element={<Main theme={theme}/> }/>
        <Route path="/login" element={<Login theme={theme}/>} />
        <Route path="/signup" element={<Signup theme={theme}/>} />
      </Routes>
      </Router>
      <Sidebar theme={theme} setTheme={setTheme} />
     
    </div>
  );
}

export default App;
